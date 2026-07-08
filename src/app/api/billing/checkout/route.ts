import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { getStripe, stripeConfigured, TRIAL_DAYS } from "@/lib/stripe";

const schema = z.object({
  // Required when a PARENT subscribes: which linked child the plan covers.
  coveredChildId: z.string().optional(),
});

export async function POST(req: Request) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!stripeConfigured()) {
    return NextResponse.json({ error: "Billing is not configured" }, { status: 503 });
  }
  const parsed = schema.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }
  const { coveredChildId } = parsed.data;
  const userId = session.user.id;
  const role = session.user.role;

  // A parent must designate exactly one linked child for coverage.
  if (role === "PARENT") {
    if (!coveredChildId) {
      return NextResponse.json({ error: "Choose which child this plan covers" }, { status: 400 });
    }
    const link = await prisma.parentChildLink.findUnique({
      where: { parentId_childId: { parentId: userId, childId: coveredChildId } },
    });
    if (!link) {
      return NextResponse.json({ error: "That student is not linked to your account" }, { status: 400 });
    }
  }

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const stripe = getStripe();

  // Reuse the Stripe customer across checkout attempts.
  let customerId = user.stripeCustomerId;
  if (!customerId) {
    const customer = await stripe.customers.create({
      email: user.email,
      name: user.name,
      metadata: { userId },
    });
    customerId = customer.id;
    await prisma.user.update({ where: { id: userId }, data: { stripeCustomerId: customerId } });
  }

  const origin = new URL(req.url).origin;
  const checkout = await stripe.checkout.sessions.create({
    customer: customerId,
    mode: "subscription",
    line_items: [{ price: process.env.STRIPE_PRICE_ID!, quantity: 1 }],
    subscription_data: {
      trial_period_days: TRIAL_DAYS,
      metadata: { userId, coveredChildId: coveredChildId ?? "" },
    },
    metadata: { userId, coveredChildId: coveredChildId ?? "" },
    success_url: `${origin}/subscribe?success=1`,
    cancel_url: `${origin}/subscribe?canceled=1`,
  });

  return NextResponse.json({ url: checkout.url });
}
