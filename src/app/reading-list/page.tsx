import { BookType } from "@/app/api/types";
import { getBooks } from "../api/auth/actions";
import BookList from "@/components/BookList";

export default async function ReadingPage() {
  const ReadingList: BookType[] = await getBooks();
  
  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Reading List
        </h1>
        <p className="text-gray-400">
          Explore recommended resources organized by module
        </p>
      </div>

      <BookList books={ReadingList} />
    </div>
  );
}