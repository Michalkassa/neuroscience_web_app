
import Link from "next/link";

interface ReadingItem{
  id: string;
  title: string;
  author: string;
  module: string;
  bookIcon?: string;
  url: string; 
};

export default function ReadingPage() {

const ReadingList: ReadingItem[] = [
  {
    id: "r1",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    module: "PSY101",
    bookIcon: "📘",
    url: "https://example.com/thinking-fast-and-slow",
  },
  {
    id: "r2",
    title: "Clean Code",
    author: "Robert C. Martin",
    module: "CS320",
    bookIcon: "📗",
    url: "https://example.com/clean-code",
  },
  {
    id: "r3",
    title: "Introduction to Algorithms",
    author: "Cormen, Leiserson, Rivest, Stein",
    module: "CS204",
    bookIcon: "📙",
    url: "https://example.com/intro-to-algorithms",
  },
  {
    id: "r4",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    module: "ENG201",
    bookIcon: "📘",
    url: "https://example.com/the-great-gatsby",
  },
  {
    id: "r5",
    title: "Principles of Marketing",
    author: "Philip Kotler",
    module: "BUS150",
    bookIcon: "📕",
    url: "https://example.com/principles-of-marketing",
  },
];

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Reading List</h1>
      <p className="text-gray-400 mb-6">
        Browse required and recommended books by module. Click the link to access each resource.
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {ReadingList.map((book) => (
          <li
            key={book.id}
            className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900 p-5 hover:shadow-lg transition-shadow"
          >
            {/* Large Icon */}
            <div className="flex items-center gap-4">
              <span className="text-6xl leading-none select-none" aria-hidden="true">
                {book.bookIcon ?? "📚"}
              </span>

              <div className="min-w-0">
                <h2 className="text-lg font-semibold text-white truncate">{book.title}</h2>
                <p className="text-gray-400 text-sm truncate">Author: {book.author}</p>
                <p className="text-gray-500 text-xs mt-0.5">Module: {book.module}</p>
              </div>
            </div>

            {/* Link area */}
            <div className="mt-4">
              <Link
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-blue-700 bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label={`Open ${book.title}`}
              >
                Open Resource
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12.293 2.293a1 1 0 011.414 0l4 4a.997.997 0 01.083 1.32l-.083.094-4 4a1 1 0 01-1.497-1.32l.083-.094L14.586 8H9a5 5 0 00-4.995 4.783L4 13a1 1 0 11-2 0A7 7 0 019 6h5.586l-2.293-2.293a1 1 0 01-.083-1.32l.083-.094z" />
                  <path d="M6 9a1 1 0 011 1v5h5a1 1 0 110 2H6a1 1 0 01-1-1v-6a1 1 0 011-1z" />
                </svg>
              </Link>
            </div>

            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                 style={{ background: "radial-gradient(circle at 30% 20%, rgba(59,130,246,0.08), transparent 50%)" }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
