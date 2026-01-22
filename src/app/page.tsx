import Header from "@/components/Header";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Neuroscience Helper
          </h1>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <article className="bg-gray-900 border border-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">Feedback Form</h2>
                <p className="mt-2 text-gray-400 text-sm">
                  text text text
                </p>
              </div>
              <svg
                className="w-10 h-10 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 8h10M7 12h6m-6 4h4"
                />
              </svg>
            </div>
            <div className="mt-6">
              <Link
                href="/feedback"
                className="inline-block px-4 py-2 bg-green-600 text-black font-semibold rounded hover:bg-green-500 transition"
              >
                Go to Feedback
              </Link>
            </div>
          </article>

          <article className="bg-gray-900 border border-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">Reading List</h2>
                <p className="mt-2 text-gray-400 text-sm">
                  text text text text
                  text text text text text 

                </p>
              </div>
              <svg
                className="w-10 h-10 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 20l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 12l9-5-9-5-9 5 9 5z"
                />
              </svg>
            </div>
            <div className="mt-6">
              <Link
                href="/reading-list"
                className="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-500 transition"
              >
                View Reading List
              </Link>
            </div>
          </article>

          <article className="bg-gray-900 border border-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">Assignments</h2>
                <p className="mt-2 text-gray-400 text-sm">
                  text text text text text 
                </p>
              </div>
              <svg
                className="w-10 h-10 text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7"
                />
              </svg>
            </div>
            <div className="mt-6">
              <Link
                href="/assignments"
                className="inline-block px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-400 transition"
              >
                See Assignments
              </Link>
            </div>
          </article>
        </div>

      </section>
    </main>
  );
}
