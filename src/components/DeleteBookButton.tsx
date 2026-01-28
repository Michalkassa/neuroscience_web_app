'use client';
import { DeleteBook } from '@/app/api/auth/actions';
import { BookType } from '@/app/api/types';

interface DeleteBookButtonProps{
    bookId : string
}
function DeleteBookButton({bookId} : DeleteBookButtonProps) {

    async function HandleClick(){
        return await DeleteBook(bookId)
    }
  return (
    <button
      onClick={HandleClick}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 hover:border-red-500/50 text-red-400 hover:text-red-300 text-xs font-semibold rounded-lg transition-all duration-200 mt-3"
    >
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
      Delete
    </button>
  );
}

export default DeleteBookButton;
