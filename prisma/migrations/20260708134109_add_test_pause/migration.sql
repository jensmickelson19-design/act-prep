-- AlterEnum
ALTER TYPE "TestStatus" ADD VALUE 'PAUSED';

-- AlterTable
ALTER TABLE "TestAttempt" ADD COLUMN     "pausedRemainingSec" INTEGER;
