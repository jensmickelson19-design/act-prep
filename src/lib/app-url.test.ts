import { describe, it, expect, afterEach, beforeEach } from "vitest";
import { appUrl, absoluteUrl } from "@/lib/app-url";

const saved = { ...process.env };
beforeEach(() => {
  delete process.env.NEXT_PUBLIC_APP_URL;
  delete process.env.VERCEL_URL;
});
afterEach(() => {
  process.env = { ...saved };
});

describe("app-url: appUrl", () => {
  it("prefers NEXT_PUBLIC_APP_URL and strips a trailing slash", () => {
    process.env.NEXT_PUBLIC_APP_URL = "https://actprep.example.com/";
    expect(appUrl()).toBe("https://actprep.example.com");
  });

  it("falls back to VERCEL_URL with https://", () => {
    process.env.VERCEL_URL = "act-prep-abc123.vercel.app";
    expect(appUrl()).toBe("https://act-prep-abc123.vercel.app");
  });

  it("falls back to localhost in dev", () => {
    expect(appUrl()).toBe("http://localhost:3000");
  });
});

describe("app-url: absoluteUrl", () => {
  it("joins a path onto the base, normalizing the leading slash", () => {
    process.env.NEXT_PUBLIC_APP_URL = "https://x.test";
    expect(absoluteUrl("/reset-password?token=abc")).toBe(
      "https://x.test/reset-password?token=abc"
    );
    expect(absoluteUrl("verify-email")).toBe("https://x.test/verify-email");
  });
});
