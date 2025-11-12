'use client'
import { useActionState } from "react";
import Image from "next/image";
import { SignIn } from "@/app/api/auth/actions";

const initialState = {
  message: "",
};

export default function LoginForm() {
  const [state, formAction] = useActionState(SignIn, initialState);

  return (
    <section className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="w-full max-w-md mx-4">
        <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-center mb-6">
              <Image src="/logo.png" alt="logo" width={48} height={48} className="rounded" />
            </div>

            <h1 className="text-xl font-bold text-white text-center mb-4">
              Sign in to your account
            </h1>

            <form className="space-y-4" action={formAction}>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">
                  Your email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@company.com"
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">
                  Password
                </label>
                <input
                  required
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition"
              >
                Sign in
              </button>

              <p className="text-center text-red-500 mt-2">{state?.message || ""}</p> 
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}