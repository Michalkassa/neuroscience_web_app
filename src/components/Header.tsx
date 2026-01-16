"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 text-white shadow-lg">
      {/* Main Header */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Logo"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <div className="absolute inset-0 rounded-lg bg-blue-500/20 blur-sm"></div>
            </div>
            <Link href="/" className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 transition-all">
              Neuroscience Helper
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <Link
              href="/"
              className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg font-medium transition-all"
            >
              Home
            </Link>
            <Link
              href="/feedback"
              className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg font-medium transition-all"
            >
              Feedback
            </Link>
            <Link
              href="/assignments"
              className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg font-medium transition-all"
            >
              Assignments
            </Link>
            <Link
              href="/reading-list"
              className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg font-medium transition-all"
            >
              Reading List
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
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



      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-gray-900 border-t border-gray-800 transition-all duration-300 overflow-hidden ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex flex-col gap-1">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block text-gray-300 hover:text-white py-2 px-3 rounded-lg hover:bg-gray-800 transition-all"
          >
            Home
          </Link>
          <Link
            href="/feedback"
            onClick={() => setOpen(false)}
            className="block text-gray-300 hover:text-white py-2 px-3 rounded-lg hover:bg-gray-800 transition-all"
          >
            Feedback
          </Link>
          <Link
            href="/assignments"
            onClick={() => setOpen(false)}
            className="block text-gray-300 hover:text-white py-2 px-3 rounded-lg hover:bg-gray-800 transition-all"
          >
            Assignments
          </Link>
          <Link
            href="/reading-list"
            onClick={() => setOpen(false)}
            className="block text-gray-300 hover:text-white py-2 px-3 rounded-lg hover:bg-gray-800 transition-all"
          >
            Reading List
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;