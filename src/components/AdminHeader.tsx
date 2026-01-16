"use client";
import React from "react";
import Link from "next/link";

const AdminHeader: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 text-white shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2">
        <nav className="flex flex-row justify-evenly items-center gap-2">
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
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;
