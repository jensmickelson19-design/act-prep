-- AlterTable
ALTER TABLE "TestAttempt" ADD COLUMN     "questionsBySection" JSONB NOT NULL DEFAULT '{}',
ADD COLUMN     "withScience" BOOLEAN NOT NULL DEFAULT true;
