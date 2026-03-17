'use client'
import { DeleteFeedbackFormSubmission } from "@/app/api/auth/actions";
import { FeedbackFormSubmissionType } from "@/app/api/types"
import React from "react";

const FeedbackFormSubmission: React.FC<FeedbackFormSubmissionType> = (props) => {
  const { id, lecture, rating, feedback } = props;

  async function handleDelete() {
    await DeleteFeedbackFormSubmission({ id, lecture, rating, feedback })
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-gray-900 border border-gray-800 rounded-lg shadow-md p-6 my-4 hover:shadow-lg transition-shadow duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">{lecture}</h2>
        <div className="flex items-center mt-2 sm:mt-0">
          {[...Array(rating)].map((_, i) => (
            <p key={i} className="h-5 w-5 text-yellow-400">★</p>
          ))}
          {[...Array(5 - rating)].map((_, i) => (
            <p key={i} className="h-5 w-5 text-gray-600">★</p>
          ))}
          <span className="ml-2 text-sm text-gray-400">{rating}/5</span>
        </div>
      </div>

      {/* Feedback */}
      <div className="bg-gray-800 p-4 rounded-md border border-gray-700 mb-4">
        <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
          {feedback}
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-end">
        <button
          onClick={handleDelete}
          className="px-4 py-2 rounded-lg font-medium text-sm text-red-400
                     hover:text-white hover:bg-red-600/20
                     border border-red-500/30
                     transition-all"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FeedbackFormSubmission;