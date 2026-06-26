-- AlterTable
ALTER TABLE "Assignments" ADD COLUMN     "isSummative" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "weight" INTEGER,
ADD COLUMN     "topics" TEXT,
ADD COLUMN     "assessmentStyle" TEXT,
ADD COLUMN     "expectedFeedback" TEXT;
