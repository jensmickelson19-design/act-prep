import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { englishQuestions } from "./seed-data/english";
import { englishExtraQuestions } from "./seed-data/english-extra";
import { mathQuestions } from "./seed-data/math";
import { mathExtraQuestions } from "./seed-data/math-extra";
import { readingPassages } from "./seed-data/reading";
import { readingExtraPassages } from "./seed-data/reading-extra";
import { sciencePassages } from "./seed-data/science";
import { scienceExtraPassages } from "./seed-data/science-extra";
import { englishLessons } from "./seed-data/lessons-english";
import { mathLessons } from "./seed-data/lessons-math";
import { readingLessons } from "./seed-data/lessons-reading";
import { scienceLessons } from "./seed-data/lessons-science";
import { synthesizeStudentHistory } from "./seed-data/synthesize";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding…");

  const studentHash = await bcrypt.hash("password123", 10);
  const parentHash = await bcrypt.hash("password123", 10);

  const student = await prisma.user.upsert({
    where: { email: "student@example.com" },
    update: {},
    create: {
      email: "student@example.com",
      passwordHash: studentHash,
      name: "Demo Student",
      role: "STUDENT",
    },
  });

  const parent = await prisma.user.upsert({
    where: { email: "parent@example.com" },
    update: {},
    create: {
      email: "parent@example.com",
      passwordHash: parentHash,
      name: "Demo Parent",
      role: "PARENT",
    },
  });

  await prisma.parentChildLink.upsert({
    where: { parentId_childId: { parentId: parent.id, childId: student.id } },
    create: { parentId: parent.id, childId: student.id },
    update: {},
  });

  // Wipe content tables so re-seeding produces a deterministic state.
  // Attempts/sessions/mastery cascade off questions and users, but we clear
  // them explicitly so a fresh seed always means a fresh student profile.
  await prisma.attempt.deleteMany({});
  await prisma.subSkillMastery.deleteMany({ where: { userId: { in: [student.id] } } });
  await prisma.studySession.deleteMany({ where: { userId: { in: [student.id] } } });
  await prisma.testAttempt.deleteMany({ where: { userId: { in: [student.id] } } });
  await prisma.question.deleteMany({});
  await prisma.passage.deleteMany({});

  let questionCount = 0;
  let passageCount = 0;

  // Subject-level (no passage) questions: English and Math.
  for (const qs of [englishQuestions, englishExtraQuestions, mathQuestions, mathExtraQuestions]) {
    for (const q of qs) {
      await prisma.question.create({
        data: {
          subject: q.subject,
          reportingCategory: q.reportingCategory,
          subSkill: q.subSkill,
          difficulty: q.difficulty,
          estimatedTimeSec: q.estimatedTimeSec,
          prompt: q.prompt,
          choices: q.choices,
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
          modeling: q.modeling ?? false,
          diagnosticForm: q.diagnosticForm,
          formOrder: q.formOrder,
        },
      });
      questionCount++;
    }
  }

  // Passage-grouped questions: Reading and Science.
  for (const ps of [readingPassages, readingExtraPassages, sciencePassages, scienceExtraPassages]) {
    for (const p of ps) {
      const passage = await prisma.passage.create({
        data: { subject: p.subject, title: p.title, body: p.body },
      });
      passageCount++;
      for (const q of p.questions) {
        await prisma.question.create({
          data: {
            subject: q.subject,
            reportingCategory: q.reportingCategory,
            subSkill: q.subSkill,
            difficulty: q.difficulty,
            estimatedTimeSec: q.estimatedTimeSec,
            prompt: q.prompt,
            choices: q.choices,
            correctAnswer: q.correctAnswer,
            explanation: q.explanation,
            modeling: q.modeling ?? false,
            diagnosticForm: q.diagnosticForm,
            formOrder: q.formOrder,
            passageId: passage.id,
          },
        });
        questionCount++;
      }
    }
  }

  console.log(`Seeded ${questionCount} questions across ${passageCount} passages.`);

  // Lessons — one per sub-skill (49 total). Wipe progress + lessons first so a
  // re-seed is deterministic.
  await prisma.lessonProgress.deleteMany({});
  await prisma.lesson.deleteMany({});
  let lessonCount = 0;
  for (const lessons of [englishLessons, mathLessons, readingLessons, scienceLessons]) {
    for (const l of lessons) {
      await prisma.lesson.create({
        data: {
          subject: l.subject,
          subSkill: l.subSkill,
          title: l.title,
          summary: l.summary,
          body: l.body,
          examples: l.examples,
          orderIndex: l.orderIndex,
        },
      });
      lessonCount++;
    }
  }
  if (lessonCount !== 49) {
    throw new Error(`Expected 49 lessons (one per sub-skill), seeded ${lessonCount}.`);
  }
  const distinctSubSkills = await prisma.lesson.findMany({ select: { subSkill: true } });
  if (new Set(distinctSubSkills.map((l) => l.subSkill)).size !== 49) {
    throw new Error("Lesson sub-skills are not 49 distinct values.");
  }
  console.log(`Seeded ${lessonCount} lessons (one per sub-skill).`);

  console.log("Synthesizing 30 days of practice history for the demo student…");
  const synth = await synthesizeStudentHistory(prisma, student.id);
  console.log(`  → ${synth.sessionsCreated} sessions, ${synth.attemptsCreated} attempts.`);

  console.log("  Student login: student@example.com / password123");
  console.log("  Parent  login: parent@example.com  / password123");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
