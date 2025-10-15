import React from "react";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      <div>
        <Image src="/logo.png" alt="Logo" width={80} height={80} />
      </div>
      <nav className="flex items-center gap-6 ml-8">
        <a
          href="/info"
          className="text-gray-700 hover:text-blue-600 font-medium transition"
        >
          Info
        </a>
        <a
          href="/feedback"
          className="text-gray-700 hover:text-blue-600 font-medium transition"
        >
          Feedback
        </a>
        <a
          href="/assignments"
          className="text-gray-700 hover:text-blue-600 font-medium transition"
        >
          Assignments
        </a>
        <a
          href="/reading_list"
          className="text-gray-700 hover:text-blue-600 font-medium transition"
        >
          Reading List
        </a>
        <button className="ml-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Login as Admin
        </button>
      </nav>
    </header>
  );
};

export default Header;