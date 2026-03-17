/*
  Warnings:

  - You are about to drop the column `module` on the `Assignments` table. All the data in the column will be lost.
  - Added the required column `moduleName` to the `Assignments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
UPDATE "Assignments" SET "module" = '' WHERE "module" IS NULL;
ALTER TABLE "Assignments" RENAME COLUMN "module" TO "moduleName";

-- CreateTable
CREATE TABLE "Books" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "moduleName" TEXT NOT NULL,
    "url" TEXT,
    "icon" TEXT,
    CONSTRAINT "Books_pkey" PRIMARY KEY ("id")
);
