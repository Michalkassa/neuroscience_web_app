"use client";
import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

const AdminHeader: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 text-white shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2">
        <div className="flex flex-row justify-between items-center">
          <span className="text-gray-400 font-semibold tracking-widest text-sm uppercase">
            Admin
          </span>
          <nav className="flex flex-row items-center gap-2">
            <Link
              href="/dashboard/feedback"
              className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg font-medium transition-all"
            >
              Feedback
            </Link>
            <Link
              href="/dashboard/assignments"
              className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg font-medium transition-all"
            >
              Assignments
            </Link>
            <Link
              href="/dashboard/readinglist"
              className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg font-medium transition-all"
            >
              Reading List
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="px-4 py-2 rounded-lg font-medium text-red-400
                         hover:text-white hover:bg-red-600/20
                         border border-red-500/30
                         transition-all"
            >
              Logout
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;