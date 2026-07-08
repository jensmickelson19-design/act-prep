"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ChildOption = { id: string; name: string };

export function SubscribeActions({
  role,
  childOptions,
  subscribed,
  hasBillingAccount,
}: {
  role: "STUDENT" | "PARENT";
  childOptions: ChildOption[];
  subscribed: boolean;
  hasBillingAccount: boolean;
}) {
  const [coveredChildId, setCoveredChildId] = useState<string | null>(
    childOptions.length === 1 ? childOptions[0].id : null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const go = async (path: string, body?: object) => {
    setLoading(true);
    setError(null);
    const res = await fetch(path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body ?? {}),
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok && data.url) {
      window.location.href = data.url;
      return;
    }
    setError(data.error ?? "Something went wrong — try again.");
    setLoading(false);
  };

  if (subscribed) {
    return (
      <div className="space-y-2">
        <Button
          onClick={() => go("/api/billing/portal")}
          disabled={loading || !hasBillingAccount}
          variant="outline"
          className="w-full"
        >
          {loading ? "Opening…" : "Manage billing"}
        </Button>
        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {role === "PARENT" && childOptions.length > 1 && (
        <div className="space-y-2">
          <p className="text-sm font-medium">Which student does this plan cover?</p>
          {childOptions.map((c) => (
            <button
              key={c.id}
              onClick={() => setCoveredChildId(c.id)}
              className={cn(
                "flex w-full items-center gap-3 rounded-md border px-4 py-2.5 text-left text-sm transition-colors hover:bg-accent",
                coveredChildId === c.id && "border-primary bg-primary/5"
              )}
            >
              {c.name}
            </button>
          ))}
        </div>
      )}
      <Button
        onClick={() =>
          go("/api/billing/checkout", role === "PARENT" ? { coveredChildId } : {})
        }
        disabled={loading || (role === "PARENT" && !coveredChildId)}
        className="w-full"
      >
        {loading ? "Redirecting…" : "Start 7-day free trial — then $20/month"}
      </Button>
      {role === "PARENT" && childOptions.length === 0 && (
        <p className="text-sm text-muted-foreground">
          Link a student first (Invite a student), then subscribe to cover them — or your
          student can subscribe from their own account.
        </p>
      )}
      {hasBillingAccount && (
        <Button
          onClick={() => go("/api/billing/portal")}
          disabled={loading}
          variant="ghost"
          className="w-full"
        >
          Manage billing
        </Button>
      )}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
