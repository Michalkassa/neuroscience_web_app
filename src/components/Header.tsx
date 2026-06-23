"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { bookFont } from "@/app/theme";

const links = [
  { href: "/", label: "Home" },
  { href: "/feedback", label: "Feedback" },
  { href: "/assignments", label: "Assignments" },
  { href: "/reading-list", label: "Reading List" },
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="relative z-10 text-[#222b30]"
      style={{ fontFamily: bookFont }}
    >
      <div className="mx-auto flex h-[114px] max-w-7xl items-end justify-between px-4 pb-1 sm:px-8">
        <Link href="/" className="flex items-center" aria-label="Home">
          <Image
            src="/logo.png"
            alt="Neuroscience Helper"
            width={64}
            height={64}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xl text-[#46535a] underline decoration-[#46535a]/0 underline-offset-8 transition-colors duration-300 hover:text-[#222b30] hover:decoration-[#46535a]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen((s) => !s)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="rounded-sm p-2 transition-colors hover:bg-[#bcc5c6] focus:outline-none focus:ring-1 focus:ring-[#8b989c] md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`overflow-hidden border-t border-[#8b989c] transition-all duration-300 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-[#b6c0c1] py-3 text-lg text-[#46535a] transition-colors last:border-b-0 hover:text-[#222b30]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
