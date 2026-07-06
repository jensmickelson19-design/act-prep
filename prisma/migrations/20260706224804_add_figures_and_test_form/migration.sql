-- AlterTable
ALTER TABLE "Passage" ADD COLUMN     "figures" JSONB;

-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "figures" JSONB;

-- AlterTable
ALTER TABLE "TestAttempt" ADD COLUMN     "form" INTEGER NOT NULL DEFAULT 1;
