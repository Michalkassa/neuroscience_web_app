"use client";
import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { bookFont } from "@/app/theme";

const links = [
  { href: "/dashboard/feedback", label: "Feedback" },
  { href: "/dashboard/assignments", label: "Assignments" },
  { href: "/dashboard/readinglist", label: "Reading List" },
];

const AdminHeader: React.FC = () => {
  return (
    <header
      className="relative z-10 text-[#222b30]"
      style={{ fontFamily: bookFont }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-8">
        <span className="text-sm uppercase tracking-[0.3em] text-[#5d6a70]">
          Admin
        </span>
        <nav className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg text-[#46535a] underline decoration-[#46535a]/0 underline-offset-8 transition-colors duration-300 hover:text-[#222b30] hover:decoration-[#46535a]"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="border border-[#b89b97] px-3 py-1 text-[#9b4a44] transition-colors hover:bg-[#9b4a44] hover:text-[#eef1f1]"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;
