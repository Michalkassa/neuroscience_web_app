import { redirect } from "next/navigation"
import { auth } from "@/app/api/auth/auth";
import { getFeedbackFormSubmissions } from "@/app/api/auth/actions";
import FeedbackFormSubmission from "@/components/FeedbackFormSubmission";
import {FeedbackFormSubmissionType} from "@/app/api/types"

export default async function FeedbackPage() {
  const session = await auth()

  if (!session) return redirect("/login")

  const FeedbackFormSubmissions = await getFeedbackFormSubmissions()

  return (  
    <div className="flex flex-col h-full w-full">
        <div className="mt-8">
          {FeedbackFormSubmissions.length == 0 ? (
            <div className="text-gray-400 text-center">
              No feedback found.
            </div>) : <div></div>}
        </div>
        {FeedbackFormSubmissions.map((Submission:FeedbackFormSubmissionType) => (
            <FeedbackFormSubmission 
            key={Submission.id} 
            id={Submission.id} 
            lecture={Submission.lecture} 
            rating={Submission.rating} 
            feedback={Submission.feedback ? Submission.feedback : "No Feedback Submitted"}
            />
        ))}
    </div>
  )
}