"use server"
import { revalidatePath } from "next/cache"

export async function SubmitFeedbackForm(formData: FormData) {
    const lecture = formData.get("lecture") as string;
    const rating = Number(formData.get("star_rating"));
    const feedback = formData.get("feedback_textarea") as string;

    if(!lecture || !feedback){
        throw new Error("Missing required Data")
    }
    console.log("Feedback received:", { lecture, rating, feedback });
    revalidatePath("/feedback");
    
}
