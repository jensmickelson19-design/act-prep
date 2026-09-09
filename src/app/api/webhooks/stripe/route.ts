import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { getStripe } from "@/lib/stripe";
import { reportError } from "@/lib/observability";

// Stripe webhooks are the source of truth for subscription state. The
// endpoint is public (middleware skips /api); authenticity comes from the
// signature check against STRIPE_WEBHOOK_SECRET.
//
// Delivery is at-least-once and Stripe retries any non-2xx, so this handler is
// idempotent: it records every fully-processed event id in ProcessedStripeEvent
// and no-ops on repeats. A genuine processing failure returns 500 so Stripe
// retries rather than dropping the update.

// current_period_end lives on the subscription item in newer Stripe API
// versions (and on the subscription itself in older ones) — read both.
function periodEnd(sub: Stripe.Subscription): Date | null {
  const item = sub.items?.data?.[0] as { current_period_end?: number } | undefined;
  const ts = item?.current_period_end ?? (sub as unknown as { current_period_end?: number }).current_period_end;
  return ts ? new Date(ts * 1000) : null;
}

// Applies subscription state to the matching user. Returns "applied" on a
// successful write, "no_user" when no row matches (user deleted or a
// dashboard-created subscription with no linked account — safe to ignore).
// Any other error propagates so the caller can 500 and let Stripe retry.
async function applySubscription(sub: Stripe.Subscription): Promise<"applied" | "no_user"> {
  const customerId = typeof sub.customer === "string" ? sub.customer : sub.customer.id;
  const userId = sub.metadata?.userId;
  const coveredChildId = sub.metadata?.coveredChildId || null;

  const where = userId ? { id: userId } : { stripeCustomerId: customerId };
  try {
    await prisma.user.update({
      where: where as { id: string } | { stripeCustomerId: string },
      data: {
        stripeCustomerId: customerId,
        subscriptionStatus: sub.status,
        currentPeriodEnd: periodEnd(sub),
        // Only overwrite coverage when the subscription carries it, so an
        // unrelated update can't clear a parent's designated child.
        ...(coveredChildId !== null ? { coveredChildId: coveredChildId || null } : {}),
      },
    });
    return "applied";
  } catch (err) {
    // P2025 = "record to update not found": no linked user. Expected for
    // subscriptions created outside our checkout flow; not an error.
    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2025") {
      return "no_user";
    }
    throw err;
  }
}

async function handleEvent(event: Stripe.Event): Promise<void> {
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      if (session.mode === "subscription" && session.subscription) {
        const subId =
          typeof session.subscription === "string" ? session.subscription : session.subscription.id;
        const sub = await getStripe().subscriptions.retrieve(subId);
        await applySubscription(sub);
      }
      break;
    }
    case "customer.subscription.updated":
    case "customer.subscription.deleted": {
      await applySubscription(event.data.object as Stripe.Subscription);
      break;
    }
    default:
      break;
  }
}

export async function POST(req: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "Webhook not configured" }, { status: 503 });
  }
  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  const body = await req.text();
  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(body, signature, secret);
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // Idempotency: claim the event id first. A unique-violation means we've
  // already handled (or are handling) this delivery — ack and stop.
  try {
    await prisma.processedStripeEvent.create({
      data: { id: event.id, type: event.type },
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2002") {
      return NextResponse.json({ received: true, duplicate: true });
    }
    // Ledger write failed for another reason — let Stripe retry.
    reportError(err, { scope: "stripe-webhook.ledger", eventId: event.id, type: event.type });
    return NextResponse.json({ error: "Ledger unavailable" }, { status: 500 });
  }

  try {
    await handleEvent(event);
  } catch (err) {
    // Roll back the claim so the retry re-processes this event.
    await prisma.processedStripeEvent.delete({ where: { id: event.id } }).catch(() => {});
    reportError(err, { scope: "stripe-webhook.handler", eventId: event.id, type: event.type });
    return NextResponse.json({ error: "Processing failed" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
