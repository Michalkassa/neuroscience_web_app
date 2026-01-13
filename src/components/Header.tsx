"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-950 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Logo"
            width={48}
            height={48}
            className="rounded"
            
          />
          <Link href="/" className="text-lg sm:text-xl font-semibold">
            Neuroscience Helper
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-white hover:text-blue-400 font-medium transition"
          >
            Home
          </Link>
          <Link
            href="/feedback"
            className="text-white hover:text-blue-400 font-medium transition"
          >
            Feedback
          </Link>
          <Link
            href="/assignments"
            className="text-white hover:text-blue-400 font-medium transition"
          >
            Assignments
          </Link>
          <Link
            href="/reading_list"
            className="text-white hover:text-blue-400 font-medium transition"
          >
            Reading List
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {open ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-gray-900 border-t border-gray-800 transition-all duration-200 overflow-hidden ${
          open ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3 flex flex-col gap-2">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block text-white py-2 px-2 rounded hover:bg-gray-800"
          >
            Home
          </Link>
          <Link
            href="/feedback"
            onClick={() => setOpen(false)}
            className="block text-white py-2 px-2 rounded hover:bg-gray-800"
          >
            Feedback
          </Link>
          <Link
            href="/assignments"
            onClick={() => setOpen(false)}
            className="block text-white py-2 px-2 rounded hover:bg-gray-800"
          >
            Assignments
          </Link>
          <Link
            href="/reading_list"
            onClick={() => setOpen(false)}
            className="block text-white py-2 px-2 rounded hover:bg-gray-800"
          >
            Reading List
          </Link>
       </div>
      </div>
    </header>
  );
};

export default Header;