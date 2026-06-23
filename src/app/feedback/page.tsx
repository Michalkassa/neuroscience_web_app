import React from "react";
import FeedbackForm from "@/components/FeedbackForm";
import Stickers from "@/components/Stickers";

const FeedbackPage: React.FC = () => {
  return (
    <main className="relative flex h-[calc(100vh-114px)] items-center justify-center overflow-hidden px-6 py-6 text-[#222b30]">
      <Stickers variant="feedback" />

      <div className="relative z-10 w-full max-w-lg text-center">
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
          Feedback
        </h1>
        <p className="mx-auto mt-3 max-w-md text-lg leading-relaxed text-[#46535a]">
          Set down your impressions of each lecture — your notes are anonymous.
        </p>
        <div className="mt-6">
          <FeedbackForm />
        </div>
      </div>
    </main>
  );
};

export default FeedbackPage;
