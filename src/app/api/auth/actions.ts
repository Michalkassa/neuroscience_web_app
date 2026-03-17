"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import prisma from "@/app/api/prisma";
import { auth, signIn } from "@/app/api/auth/auth";
import AuthError from "next-auth";
import {Filter } from 'bad-words'

import { AssignmentType, BookType, FeedbackFormSubmissionType, prevState } from "@/app/api/types";


function filterInputText(inputText : string): string {
    const badWordsFilter = new Filter({ replaceRegex: /[A-Za-z0-9가-힣_]/g });
    //const words = require("./filtered-bad-words.json");
    //badWordsFilter.addWords(...words);

    if (inputText.length == 0){
        return ""
    }
    
    return badWordsFilter.clean(inputText);
} 

export async function SubmitAssignmentForm(prevState: prevState, formData: FormData) {
    const title = formData.get("title") as string;
    const moduleName = formData.get("module") as string;
    const dueDateString = formData.get("dueDate") as string;
    
    if (!title || !moduleName || !dueDateString) {
        return {message: "Missing required data", success: false}
    }
    
    const dueDate = new Date(dueDateString);
    const assignmentSubmission = await prisma.assignments.create({
    
        data: {
            title: title,
            moduleName: moduleName,
            dueDate: dueDate,
        },
    });
    
    revalidatePath("/assignments");
    return {message: "Assignment Submitted Successfully", success: true}
}
export async function SubmitReadingListForm(prevState:prevState, formData: FormData){
    const title = formData.get("title") as string;
    const author = formData.get("author") as string;
    const moduleName = formData.get("module") as string;
    const url = formData.get('url') as string;

    if (!title || !author || !moduleName ) {
        return {message:"Missing required data", success: false}
    }
    const ReadinglistBooks = await prisma.books.create({
        data: {
            title: title,
            author: author,
            moduleName: moduleName,
            url:url
        },

    });
    revalidatePath("/dashboard/readinglist");
    return {message: "Book Submitted Successfully", success : true}
}


async function validateCaptcha(captchaToken: string): Promise<boolean> {
    const minimumCaptchaScore = 0.0;
    const secretKey = process.env.RECAPTCHA_SECRET_KEY || '';
    const data = new FormData();
    data.append('secret', secretKey);
    data.append('response', captchaToken);
    const captchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: "POST",
        body: data,
    });
    const res = await captchaResponse.json();
    console.log(`captcha score: ${res.score}`);
    return res.score && res.score >= minimumCaptchaScore;
}

export async function SubmitFeedbackForm(prevState: prevState, formData: FormData) {
    const lecture = filterInputText(formData.get("lecture") as string);
    const rating = Number(formData.get("star_rating"));
    const feedback = filterInputText(formData.get("feedback_textarea") as string);

    //const valid = await validateCaptcha(formData.get('captcha') as string)

    // if (!valid) {
    //     return {message:"Capctcha not valid", success: false}
    // }

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
}

export async function DeleteAssignment(assignment:AssignmentType) {

    const deletedAssignment = await prisma.assignments.delete({
        where: {
        id: assignment.id,
        },
    })
    revalidatePath("/dashboard/assignments")
};

export async function DeleteBook(bookId:string) {

    const deletedBook = await prisma.books.delete({
        where: {
        id: bookId
        },
    })
    revalidatePath("/dashboard/readinglist")
};



export async function DeleteFeedbackFormSubmission(formSubmission:FeedbackFormSubmissionType) {

    const deletedForm= await prisma.feedbackFormSubmissions.delete({
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

export async function getBooks(){
    const books = await prisma.books.findMany();
    return books
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
