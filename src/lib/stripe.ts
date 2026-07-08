import Stripe from "stripe";

// Lazy singleton so the app boots without Stripe env vars (e.g. local dev
// before billing is configured). Routes that need Stripe call getStripe() and
// return a 503 if it's not configured.
let client: Stripe | null = null;

export function stripeConfigured(): boolean {
  return Boolean(process.env.STRIPE_SECRET_KEY && process.env.STRIPE_PRICE_ID);
}

export function getStripe(): Stripe {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY is not set");
  }
  client ??= new Stripe(process.env.STRIPE_SECRET_KEY);
  return client;
}

export const TRIAL_DAYS = 7;
