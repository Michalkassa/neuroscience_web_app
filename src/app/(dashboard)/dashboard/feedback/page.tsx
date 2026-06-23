import { redirect } from "next/navigation"
import { auth } from "@/app/api/auth/auth";
import { getFeedbackFormSubmissions } from "@/app/api/auth/actions";
import FeedbackFormSubmission from "@/components/FeedbackFormSubmission";
import { FeedbackFormSubmissionType } from "@/app/api/types"

export default async function FeedbackPage() {
  const session = await auth()

  if (!session) return redirect("/login")

  const FeedbackFormSubmissions = await getFeedbackFormSubmissions()

  return (
    <>
      <h1 className="mb-8 text-center text-4xl font-medium tracking-tight">
        Submissions
      </h1>

      {FeedbackFormSubmissions.length === 0 ? (
        <p className="py-8 text-center text-lg italic text-[#67747a]">
          No feedback recorded yet.
        </p>
      ) : (
        FeedbackFormSubmissions.map((Submission: FeedbackFormSubmissionType) => (
          <FeedbackFormSubmission
            key={Submission.id}
            id={Submission.id}
            lecture={Submission.lecture}
            rating={Submission.rating}
            feedback={Submission.feedback ? Submission.feedback : "No Feedback Submitted"}
          />
        ))
      )}
    </>
  )
}
