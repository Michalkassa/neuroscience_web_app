-- CreateTable
CREATE TABLE "FeedbackFormSubmissions" (
    "id" TEXT NOT NULL,
    "lecture" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "Feedback" TEXT NOT NULL,

    CONSTRAINT "FeedbackFormSubmissions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FeedbackFormSubmissions_rating_key" ON "FeedbackFormSubmissions"("rating");
