"use server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation";
import prisma from '@/app/api/prisma'
import { signIn } from '@/app/api/auth/auth'
import  AuthError  from 'next-auth';

export async function SubmitFeedbackForm(formData: FormData) {
    const lecture = formData.get("lecture") as string;
    const rating = Number(formData.get("star_rating"));
    const feedback = formData.get("feedback_textarea") as string;

    if(!lecture || !feedback){
        throw new Error("Missing required Data")
    }
    const FeedbackFormSubmission = await prisma.feedbackFormSubmissions.create({
      data: {
          lecture: lecture,
          rating: rating,
          Feedback:feedback
      },
    })
    console.log("Feedback received:", { lecture, rating, feedback });
    //revalidatePath("/feedback");
    
}

export async function SignIn(state:any, formData: any){
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    if (!email && !password){
        return { message: "Login data is Missing"}
    } 
    if (!email){
        return { message: "Please Enter an Email"}
    } 
    if (!password){
        return { message: "Please Enter a Password"}
    } 

    let validEmail = false
    for(let i = 0; i <= email.length; i++){
        if(email[i] == '@'){
            validEmail = true
            break
        }
    }

    if(validEmail == false){
        return { message: "Not a valid email"}
    }



    try {
        const user = await prisma.user.findUnique({
          where: {
            email: email as string
          }
        })

        if (!user) {
          return { message: "credentials not correct"}
        }

        const isPasswordValid = (password == (user.password as string)) //TODO change to bcrypt compare

        if (!isPasswordValid) {
          return { message: "credentials not correct"}
        }

    }
    catch(error){
        throw error;
    }

    try {
      await signIn('credentials', formData);
    } catch (error) {
    if (error instanceof AuthError) {
      switch (error) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
        }
      }
    }
  redirect("/dashboard")
}
