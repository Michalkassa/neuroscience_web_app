import { redirect } from "next/navigation"
import { auth } from "@/app/api/auth/auth";
import { getBooks } from "@/app/api/auth/actions";
import ReadingListForm from "@/components/ReadingListForm";
import BookList from "@/components/BookList";

export default async function ReadingListPage() {
  const session = await auth()

  if (!session) return redirect("/login")

  const ReadingListBooks = await getBooks();

  return (
    <div className="bg-gray-950 min-h-screen pt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <ReadingListForm />

        <div className="mt-8">
          {ReadingListBooks.length === 0 ? (
            <div className="text-gray-400 text-center">
              No Books found.
            </div>
          ) : (
            <BookList books={ReadingListBooks}></BookList>
          )}
        </div>
      </div>
    </div>
  );
}