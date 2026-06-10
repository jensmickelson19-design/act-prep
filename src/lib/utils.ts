import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Turn a closed-taxonomy sub-skill key (e.g. "comma_usage") into a
 * human-readable label ("Comma Usage"). Shared by the analytics and
 * study-plan UIs so the formatting stays consistent.
 */
export function prettySubSkill(s: string): string {
  return s.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
