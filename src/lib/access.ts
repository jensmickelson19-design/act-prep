import type { Role } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { stripeConfigured } from "@/lib/stripe";

// Subscription statuses that grant access. `past_due` is included as a grace
// period while Stripe retries the card; `canceled` and null do not qualify.
const ACCESS_STATUSES = new Set(["trialing", "active", "past_due"]);

export function isSubscribed(user: {
  subscriptionStatus: string | null;
}): boolean {
  return user.subscriptionStatus !== null && ACCESS_STATUSES.has(user.subscriptionStatus);
}

export type AccessResult = {
  hasAccess: boolean;
  // Why access was granted (for UI copy). "self" = own subscription,
  // "linked" = covered by a linked account's subscription.
  via: "self" | "linked" | "unconfigured" | null;
};

// The access rule:
// - STUDENT: has access if they subscribe, OR a linked parent subscribes with
//   this student as the designated covered child.
// - PARENT: has access if they subscribe, OR any linked child has their own
//   subscription (the child pays -> the parent can monitor that child).
// If Stripe isn't configured (e.g. fresh local checkout), everything is open
// so the app remains usable in development.
export async function checkAccess(userId: string, role: Role): Promise<AccessResult> {
  if (!stripeConfigured()) return { hasAccess: true, via: "unconfigured" };

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { subscriptionStatus: true },
  });
  if (!user) return { hasAccess: false, via: null };
  if (isSubscribed(user)) return { hasAccess: true, via: "self" };

  if (role === "STUDENT") {
    const coveringParent = await prisma.parentChildLink.findFirst({
      where: {
        childId: userId,
        parent: {
          coveredChildId: userId,
          subscriptionStatus: { in: [...ACCESS_STATUSES] },
        },
      },
      select: { id: true },
    });
    return { hasAccess: Boolean(coveringParent), via: coveringParent ? "linked" : null };
  }

  // PARENT
  const subscribedChild = await prisma.parentChildLink.findFirst({
    where: {
      parentId: userId,
      child: { subscriptionStatus: { in: [...ACCESS_STATUSES] } },
    },
    select: { id: true },
  });
  return { hasAccess: Boolean(subscribedChild), via: subscribedChild ? "linked" : null };
}
