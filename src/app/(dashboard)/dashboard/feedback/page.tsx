import { redirect } from "next/navigation"
import { auth } from "@/app/api/auth/auth";
import { getFeedbackFormSubmissions } from "@/app/api/auth/actions";
import FeedbackFormSubmission from "@/components/FeedbackFormSubmission";


export default async function Feedback() {
  const session = await auth()

  if (!session) return redirect("/login")

  const FeedbackFormSubmissions = await getFeedbackFormSubmissions()

  return (  
    <div className="flex flex-col h-full w-full">
        {FeedbackFormSubmissions.map((Submission:any) => (
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