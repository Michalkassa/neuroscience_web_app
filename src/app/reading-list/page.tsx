import { BookType } from "@/app/api/types";
import { getBooks } from "../api/auth/actions";
import BookList from "@/components/BookList";
import NotebookPage from "@/components/NotebookPage";

export default async function ReadingPage() {
  const ReadingList: BookType[] = await getBooks();

  return (
    <NotebookPage title="Reading List" ornament={false}>
      <BookList books={ReadingList} />
    </NotebookPage>
  );
}
