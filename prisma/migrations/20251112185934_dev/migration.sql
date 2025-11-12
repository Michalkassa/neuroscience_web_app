/*
  Warnings:

  - You are about to drop the column `Feedback` on the `FeedbackFormSubmissions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "FeedbackFormSubmissions" DROP COLUMN "Feedback",
ADD COLUMN     "feedback" TEXT NOT NULL DEFAULT '';
