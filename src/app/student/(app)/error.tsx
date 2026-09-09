"use client";

import { SegmentError } from "@/components/segment-error";

export default function StudentAppError(props: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <SegmentError {...props} homeHref="/student" homeLabel="Dashboard" />;
}
