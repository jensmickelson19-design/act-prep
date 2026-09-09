"use client";

import { SegmentError } from "@/components/segment-error";

export default function ParentError(props: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <SegmentError {...props} homeHref="/parent" homeLabel="Dashboard" />;
}
