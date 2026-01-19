import { redirect } from "next/navigation"
import { auth } from "@/app/api/auth/auth";
import { getFeedbackFormSubmissions } from "@/app/api/auth/actions";
import FeedbackFormSubmission from "@/components/FeedbackFormSubmission";
import {FeedbackFormSubmissionType} from "@/app/api/types"

export default async function ReadingListPage() {
  const session = await auth()

  if (!session) return redirect("/login")

  const FeedbackFormSubmissions = await getFeedbackFormSubmissions()

  return (  
    <div className="flex flex-col h-full w-full">
        WORK IN PROGRESS
    </div>
  )
}