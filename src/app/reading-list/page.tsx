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
  
  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Reading List
        </h1>
        <p className="text-gray-400">
          Explore recommended resources organized by module
        </p>
      </div>

      {Object.keys(grouped).length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No reading items available.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {Object.keys(grouped).map((mod: string) => (
            <section key={mod}>
              {/* Module Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <h2 className="text-xl font-bold text-white">
                    {mod}
                  </h2>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent"></div>
              </div>

              {/* Books Grid */}
              <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                {grouped[mod].map((book: BookType) => (
                  <div
                    key={book.id}
                    className="group relative p-6 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl shadow-lg hover:shadow-2xl hover:border-blue-500 transition-all duration-300"
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-xl transition-all duration-300" />
                    
                    <div className="relative flex items-start gap-4">
                      {/* Book Icon */}
                      <div className="flex-shrink-0">
                        <span className="text-5xl leading-none select-none group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                          {book.bookIcon ?? "📚"}
                        </span>
                      </div>

                      {/* Book Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                          {book.title}
                        </h3>
                        
                        <div className="space-y-1 mb-3">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <p className="text-gray-400 text-sm">{book.author}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                            </svg>
                            <p className="text-gray-500 text-sm">{book.module}</p>
                          </div>
                        </div>

                        {/* Open Resource Button */}
                        <Link
                          href={book.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-sm font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg group-hover:scale-105"
                          aria-label={`Open ${book.title}`}
                        >
                          Open Resource
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 transition-transform group-hover:translate-x-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}