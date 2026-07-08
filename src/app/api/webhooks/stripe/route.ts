import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { prisma } from "@/lib/prisma";
import { getStripe } from "@/lib/stripe";

// Stripe webhooks are the source of truth for subscription state. The
// endpoint is public (middleware skips /api); authenticity comes from the
// signature check against STRIPE_WEBHOOK_SECRET.

// current_period_end lives on the subscription item in newer Stripe API
// versions (and on the subscription itself in older ones) — read both.
function periodEnd(sub: Stripe.Subscription): Date | null {
  const item = sub.items?.data?.[0] as { current_period_end?: number } | undefined;
  const ts = item?.current_period_end ?? (sub as unknown as { current_period_end?: number }).current_period_end;
  return ts ? new Date(ts * 1000) : null;
}

async function applySubscription(sub: Stripe.Subscription) {
  const customerId = typeof sub.customer === "string" ? sub.customer : sub.customer.id;
  const userId = sub.metadata?.userId;
  const coveredChildId = sub.metadata?.coveredChildId || null;

  const where = userId ? { id: userId } : { stripeCustomerId: customerId };
  await prisma.user
    .update({
      where: where as { id: string } | { stripeCustomerId: string },
      data: {
        stripeCustomerId: customerId,
        subscriptionStatus: sub.status,
        currentPeriodEnd: periodEnd(sub),
        // Only overwrite coverage when the subscription carries it, so an
        // unrelated update can't clear a parent's designated child.
        ...(coveredChildId !== null ? { coveredChildId: coveredChildId || null } : {}),
      },
    })
    .catch(() => {
      // User deleted or never linked — nothing to update.
    });
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

  return NextResponse.json({ received: true });
}
