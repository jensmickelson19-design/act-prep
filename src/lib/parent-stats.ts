import type { Subject } from "@prisma/client";
import { prisma } from "@/lib/prisma";

const DAY_MS = 24 * 60 * 60 * 1000;

// For sessions still open in the DB, fall back to lastPingAt — we already
// auto-close sessions older than 90s on next API access, so any dangling open
// session here is one that the auto-close hasn't been triggered for yet.
function sessionDurationSec(s: { startedAt: Date; endedAt: Date | null; lastPingAt: Date }) {
  const end = s.endedAt ?? s.lastPingAt;
  const ms = end.getTime() - s.startedAt.getTime();
  return Math.max(0, ms / 1000);
}

export type ChildSummary = {
  child: { id: string; name: string; email: string };
  timeSpent: {
    todaySec: number;
    last7DaysSec: number;
    last30DaysSec: number;
    allTimeSec: number;
  };
  timeBySubject: Record<Subject, number>;
  attempts: number;
  correctAttempts: number;
  accuracy: number | null;
  lastActive: Date | null;
};

export async function getChildSummary(childId: string): Promise<ChildSummary | null> {
  const child = await prisma.user.findUnique({
    where: { id: childId },
    select: { id: true, name: true, email: true, role: true },
  });
  if (!child || child.role !== "STUDENT") return null;

  const [sessions, attempts, correctAttempts, lastAttempt] = await Promise.all([
    prisma.studySession.findMany({
      where: { userId: childId },
      select: { subject: true, startedAt: true, endedAt: true, lastPingAt: true },
    }),
    prisma.attempt.count({ where: { userId: childId } }),
    prisma.attempt.count({ where: { userId: childId, isCorrect: true } }),
    prisma.attempt.findFirst({
      where: { userId: childId },
      orderBy: { createdAt: "desc" },
      select: { createdAt: true },
    }),
  ]);

  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const sevenAgo = now.getTime() - 7 * DAY_MS;
  const thirtyAgo = now.getTime() - 30 * DAY_MS;

  let todaySec = 0,
    last7DaysSec = 0,
    last30DaysSec = 0,
    allTimeSec = 0;
  const timeBySubject: Record<Subject, number> = {
    ENGLISH: 0,
    MATH: 0,
    READING: 0,
    SCIENCE: 0,
  };

  for (const s of sessions) {
    const dur = sessionDurationSec(s);
    allTimeSec += dur;
    if (s.startedAt.getTime() >= todayStart) todaySec += dur;
    if (s.startedAt.getTime() >= sevenAgo) last7DaysSec += dur;
    if (s.startedAt.getTime() >= thirtyAgo) last30DaysSec += dur;
    if (s.subject) timeBySubject[s.subject] += dur;
  }

  return {
    child: { id: child.id, name: child.name, email: child.email },
    timeSpent: { todaySec, last7DaysSec, last30DaysSec, allTimeSec },
    timeBySubject,
    attempts,
    correctAttempts,
    accuracy: attempts > 0 ? correctAttempts / attempts : null,
    lastActive: lastAttempt?.createdAt ?? null,
  };
}

export type WeakSubSkill = {
  subject: Subject;
  subSkill: string;
  masteryScore: number;
};

export async function getWeakestSubSkills(childId: string, limit = 5): Promise<WeakSubSkill[]> {
  const rows = await prisma.subSkillMastery.findMany({
    where: { userId: childId },
    orderBy: { masteryScore: "asc" },
    take: limit,
    select: { subject: true, subSkill: true, masteryScore: true },
  });
  return rows;
}

export function formatDuration(seconds: number): string {
  if (seconds < 60) return `${Math.round(seconds)}s`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  const rem = minutes % 60;
  return rem === 0 ? `${hours}h` : `${hours}h ${rem}m`;
}

export function formatRelative(d: Date | null): string {
  if (!d) return "never";
  const diffMs = Date.now() - d.getTime();
  if (diffMs < 60_000) return "just now";
  if (diffMs < 3600_000) return `${Math.floor(diffMs / 60_000)}m ago`;
  if (diffMs < 86400_000) return `${Math.floor(diffMs / 3600_000)}h ago`;
  const days = Math.floor(diffMs / 86400_000);
  if (days < 30) return `${days}d ago`;
  return d.toLocaleDateString();
}
