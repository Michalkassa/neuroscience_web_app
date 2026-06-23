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
    <>
      <h1 className="mb-8 text-center text-4xl font-medium tracking-tight">
        Reading List
      </h1>

      <ReadingListForm />

      <div className="mt-10">
        {ReadingListBooks.length === 0 ? (
          <p className="py-8 text-center text-lg italic text-[#67747a]">
            No books recorded yet.
          </p>
        ) : (
          <BookList books={ReadingListBooks} />
        )}
      </div>
    </>
  );
}
