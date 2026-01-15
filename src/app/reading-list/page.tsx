
import Link from "next/link";
import { BookType } from "@/app/api/types";

function groupByModule(items: BookType[]){
  const collection: { [key: string]: BookType[] } = {};
  for (const item of items) {
    let mod:string = item.module;
    if (!collection[mod]) {
      collection[mod] = [item];
    }else{
      collection[mod].push(item)
    }
  }
  return collection;
}

export default function ReadingPage() {

const ReadingList: BookType[] = [
  {
    id: "1",
    title: "Academic Writing Essentials",
    author: "Jane Smith",
    module: "ENG0001",
    url: "https://example.com/academic-writing-essentials",
    bookIcon: "📘",
  },
  {
    id: "2",
    title: "Introduction to Literary Theory",
    author: "T. Eagleton",
    module: "ENG0001",
    url: "https://example.com/literary-theory",
    bookIcon: "📙",
  },
  {
    id: "3",
    title: "Research Methods for English Studies",
    author: "G. Griffith",
    module: "ENG0001",
    url: "https://example.com/research-methods-english",
    bookIcon: "📗",
  },
  {
    id: "4",
    title: "Shakespeare: The Complete Works",
    author: "William Shakespeare",
    module: "ENG0045",
    url: "https://example.com/shakespeare-complete",
    bookIcon: "📕",
  },
  {
    id: "5",
    title: "The Modernist Reader",
    author: "Various",
    module: "ENG0045",
    url: "https://example.com/modernist-reader",
    bookIcon: "📘",
  },
  {
    id: "6",
    title: "Critical Approaches to Literature",
    author: "D. Peck",
    module: "ENG0045",
    url: "https://example.com/critical-approaches",
    bookIcon: "📚",
  },
];
  
  const grouped = groupByModule(ReadingList);
  console.log(grouped);
  
    return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Reading List</h1>
      <p className="text-gray-400 mb-6">
        Displaying all modules on one page, sectioned by module name.
      </p>

      {Object.keys(grouped).length == 0 ? (
        <p className="text-gray-500">No reading items.</p>
      ) : (
        Object.keys(grouped).map((mod:string) => (
          <section key={mod} className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">
              Module: <span className="text-blue-300">{mod}</span>
            </h2>

            <ul className="space-y-3">
              {grouped[mod].map((book:BookType) => (
                <li
                  key={book.id}
                  className="group flex items-start gap-4 rounded-lg border border-gray-800 bg-gray-900 p-4 hover:shadow-lg transition-shadow"
                >
                  {/* Large Icon */}
                  <span className="text-5xl leading-none select-none mt-0.5" aria-hidden="true">
                    {book.bookIcon ?? "📚"}
                  </span>

                  {/* Text + Link */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold text-white">{book.title}</h3>
                    <p className="text-gray-400 text-sm">Author: {book.author}</p>
                    <p className="text-gray-500 text-xs">Module: {book.module}</p>

                    <div className="mt-3">
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
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))
      )}
    </div>
  );
}
