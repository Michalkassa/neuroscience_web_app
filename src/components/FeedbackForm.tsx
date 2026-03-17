'use client'
import { SubmitFeedbackForm } from "@/app/api/auth/actions";
import { useActionState, useCallback, useEffect } from "react";
import StarRating from "./StarRating"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { prevState } from "@/app/api/types";


const initialState = {
  message: "",
  success: false,
}


const FeedbackForm: React.FC = () => {
 const [state, formAction] = useActionState(SubmitFeedbackForm, initialState) 
 const { executeRecaptcha } = useGoogleReCaptcha();

  // async function handleSubmit(prevState: prevState, formData: FormData) {
  //   let gRecaptchaToken = ''
  //   if (executeRecaptcha) {
  //       gRecaptchaToken = await executeRecaptcha('FeedbackForm');
  //   }
  //   formData.set('captcha', gRecaptchaToken);

  //   return SubmitFeedbackForm(prevState, formData)
  // }


  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 border border-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-white">Anonymous Feedback Form</h2>
      <form className="space-y-4" action={formAction}>
        <div>
          <label htmlFor="lecture" className="block text-sm font-medium text-gray-300">
            Lecture
          </label>
          <input
            required
            type="text"
            id="lecture"
            name="lecture"
            className="mt-1 block w-full border border-gray-700 bg-gray-900 text-white rounded-md shadow-sm p-2 placeholder-gray-400"
            placeholder="Enter lecture"
          />
        </div>
        <StarRating name="star_rating" />
        <div>
          <label htmlFor="feedback_textarea" className="block text-sm font-medium text-gray-300">
            Feedback
          </label>
          <textarea
            required
            maxLength={1500}
            id="feedback_textarea"
            name="feedback_textarea"
            rows={10}
            className="mt-1 block w-full border border-gray-700 bg-gray-900 text-white rounded-md shadow-sm p-2 placeholder-gray-400 resize-none"
            placeholder="(max 1500 characters)"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold"
        >
          Submit
        </button>
        {state.success ? <p className="text-green-600">{state?.message}</p> : <p className="text-red-600">{state?.message}</p>}
      </form>
    </div>
  );
}

export default FeedbackForm;