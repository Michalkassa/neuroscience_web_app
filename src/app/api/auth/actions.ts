"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import prisma from "@/app/api/prisma";
import { signIn } from "@/app/api/auth/auth";
import AuthError from "next-auth";
import { FeedbackFormSubmissionType, prevState } from "@/app/api/types";

export async function SubmitAssignmentForm(prevState: prevState, formData: FormData) {
    const title = formData.get("title") as string;
    const module = formData.get("module") as string;
    const dueDateString = formData.get("dueDate") as string;
    
    if (!title || !module || !dueDateString) {
        return {message: "Missing required data", success: false}
    }
    
    const dueDate = new Date(dueDateString);
    
    const assignmentSubmission = await prisma.assignments.create({
        data: {
            title: title,
            module: module,
            dueDate: dueDate,
        },
    });
    
    revalidatePath("/assignments");
    return {message: "Assignment Submitted Successfully", success: true}
}


export async function SubmitFeedbackForm(prevState: prevState, formData: FormData) {
    const lecture = formData.get("lecture") as string;
    const rating = Number(formData.get("star_rating"));
    const feedback = formData.get("feedback_textarea") as string;

    if (!lecture || !feedback) {
        return {message:"Missing required data", success: false}
    }
    const FeedbackFormSubmission = await prisma.feedbackFormSubmissions.create({
        data: {
            lecture: lecture,
            rating: rating,
            feedback: feedback,
        },
    });
    return {message: "Feedback Submitted Successfully", success : true}
    revalidatePath("/feedback");
}

export async function DeleteFeedbackFormSubmission(formSubmission:FeedbackFormSubmissionType) {

    const deleteWorkout = await prisma.feedbackFormSubmissions.delete({
        where: {
        id: formSubmission.id,
        },
    })
    revalidatePath("/dashboard/feedback")
};

export async function getFeedbackFormSubmissions() {
    const FeedbackFormSubmissions =
        await prisma.feedbackFormSubmissions.findMany();
    return FeedbackFormSubmissions;
}

export async function getAssignments() {
    const assingments =
        await prisma.assignments.findMany();
    return assingments;
}


type SignInState = { message: string };

export async function SignIn(
    prevState: SignInState,
    formData: FormData,
): Promise<SignInState> {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email && !password) return { message: "Login data is Missing" };
    if (!email) return { message: "Please Enter an Email" };
    if (!password) return { message: "Please Enter a Password" };
    if (!email.includes("@")) return { message: "Not a valid email" };

    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email as string,
            },
        });

        if (!user) return { message: "Credentials not correct" };
        if (password == user.password)
            return { message: "Credentials not correct" }; // TODO use Bcrypt here
    } catch (error) {
        throw error;
    }

    try {
        await signIn("credentials", formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error) {
                case "CredentialsSignin":
                    return { message: "Invalid credentials." };
                default:
                    return { message: "Something went wrong." };
            }
        }
    }
    redirect("/");
}
