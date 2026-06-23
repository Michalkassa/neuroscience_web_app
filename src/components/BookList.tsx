import Link from "next/link";
import { BookType } from "@/app/api/types";
import { auth } from "@/app/api/auth/auth";
import DeleteBookButton from "@/components/DeleteBookButton";
import { ui } from "@/app/theme";

function groupByModule(items: BookType[]) {
  const collection: { [key: string]: BookType[] } = {};
  for (const item of items) {
    const mod: string = item.moduleName;
    if (!collection[mod]) {
      collection[mod] = [item];
    } else {
      collection[mod].push(item);
    }
  }
  return collection;
}

interface BookListProps {
  books: BookType[];
}

export default async function BookList({ books }: BookListProps) {
  const grouped: { [key: string]: BookType[] } = groupByModule(books);
  const session = await auth();

  if (Object.keys(grouped).length === 0) {
    return (
      <p className="py-12 text-center text-lg italic text-[#67747a]">
        No reading items recorded yet.
      </p>
    );
  }

  return (
    <div className="space-y-12">
      {Object.keys(grouped).map((mod: string) => (
        <section key={mod}>
          {/* Module Header */}
          <h2 className={ui.sectionHeading}>{mod}</h2>

          {/* Book Cards Grid */}
          <div className="grid gap-4 md:grid-cols-2">
            {grouped[mod].map((book: BookType) => (
              <div key={book.id} className={`flex flex-col ${ui.card}`}>
                {/* Header: title + author + delete */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="select-none text-3xl leading-none" aria-hidden="true">
                      {book.icon ?? "📖"}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-2xl font-medium leading-snug text-[#222b30]">
                        {book.title}
                      </h3>
                      <p className="italic text-[#67747a]">by {book.author}</p>
                    </div>
                  </div>
                  {session && <DeleteBookButton bookId={book.id} />}
                </div>

                {/* Footer: open resource */}
                <div className="mt-4">
                  {book.url ? (
                    <Link
                      href={book.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-[#46535a] px-4 py-2 text-base tracking-wide text-[#46535a] transition-colors hover:bg-[#46535a] hover:text-[#eef1f1]"
                      aria-label={`Open ${book.title}`}
                    >
                      Open resource
                      <span aria-hidden>→</span>
                    </Link>
                  ) : (
                    <span className="text-base italic text-[#90999b]">
                      No link available
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
