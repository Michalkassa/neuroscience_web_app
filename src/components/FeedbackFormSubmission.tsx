'use client'
import { DeleteFeedbackFormSubmission } from "@/app/api/auth/actions";
import { FeedbackFormSubmissionType } from "@/app/api/types"
import { ui } from "@/app/theme";
import React from "react";

const FeedbackFormSubmission: React.FC<FeedbackFormSubmissionType> = (props) => {
  const { id, lecture, rating, feedback } = props;

  async function handleDelete() {
    await DeleteFeedbackFormSubmission({ id, lecture, rating, feedback })
  }

  return (
    <div className={`${ui.card} my-4`}>
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <h2 className="text-2xl font-medium leading-snug text-[#222b30]">{lecture}</h2>
        <div className="flex shrink-0 items-center gap-2">
          <span className="text-xl tracking-widest">
            <span className="text-[#4d6580]">{"★".repeat(rating)}</span>
            <span className="text-[#b3bcbd]">{"★".repeat(5 - rating)}</span>
          </span>
          <span className="text-sm text-[#67747a]">{rating}/5</span>
        </div>
      </div>

      {/* Feedback */}
      <p className="mt-4 whitespace-pre-wrap leading-relaxed text-[#46535a]">
        {feedback}
      </p>

      {/* Footer */}
      <div className="mt-4 flex justify-end">
        <button
          onClick={handleDelete}
          className="border border-[#b89b97] px-4 py-1.5 text-[#9b4a44] transition-colors hover:bg-[#9b4a44] hover:text-[#eef1f1]"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FeedbackFormSubmission;
