/*
  Warnings:

  - Added the required column `reportingCategory` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "diagnosticForm" INTEGER,
ADD COLUMN     "formOrder" INTEGER,
ADD COLUMN     "modeling" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "reportingCategory" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Question_diagnosticForm_subject_formOrder_idx" ON "Question"("diagnosticForm", "subject", "formOrder");
