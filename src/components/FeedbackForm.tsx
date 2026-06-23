'use client'
import { SubmitFeedbackForm } from "@/app/api/auth/actions";
import { useActionState } from "react";
import StarRating from "./StarRating"
import { ui } from "@/app/theme";

const initialState = {
  message: "",
  success: false,
}

const FeedbackForm: React.FC = () => {
  const [state, formAction] = useActionState(SubmitFeedbackForm, initialState)

  return (
    <div className="border border-[#8b989c] bg-[#e6eaea]/90 p-6 text-left shadow-[0_1px_0_#f1f4f4] backdrop-blur-sm">
      <form className="space-y-4" action={formAction}>
        <input
          required
          type="text"
          id="lecture"
          name="lecture"
          className={ui.input}
          placeholder="Which lecture?"
        />

        <div className="flex items-center justify-between">
          <span className="text-[#5d6a70]">Rating</span>
          <StarRating name="star_rating" />
        </div>

        <textarea
          required
          maxLength={1500}
          id="feedback_textarea"
          name="feedback_textarea"
          rows={4}
          className={ui.textarea}
          placeholder="Your feedback…"
        />

        <button type="submit" className={ui.button}>
          Submit
        </button>

        {state.message && (
          <p
            className={`text-center ${
              state.success ? "text-[#566e4f]" : "text-[#9b4a44]"
            }`}
          >
            {state.message}
          </p>
        )}
      </form>
    </div>
  );
}

export default FeedbackForm;
