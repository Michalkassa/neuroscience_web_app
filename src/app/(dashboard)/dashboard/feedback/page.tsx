import { redirect } from "next/navigation"
import { auth } from "@/app/api/auth/auth";
import { getFeedbackFormSubmissions } from "@/app/api/auth/actions";
import FeedbackFormSubmission from "@/components/FeedbackFormSubmission";

interface Submission { 
    id: string;
    lecture: string;
    rating: number;
    feedback: string;
}
export default async function Feedback() {
  const session = await auth()

  if (!session) return redirect("/login")

  const FeedbackFormSubmissions = await getFeedbackFormSubmissions()

  return (  
    <div className="flex flex-col h-full w-full">
        {FeedbackFormSubmissions.map((Submission:Submission) => (
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