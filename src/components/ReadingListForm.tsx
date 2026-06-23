'use client'
import { SubmitReadingListForm } from "@/app/api/auth/actions";
import { useActionState } from "react";
import { ui } from "@/app/theme";

const initialState = {
  message: "",
  success: false,
}

const ReadingListForm: React.FC = () => {
  const [state, formAction] = useActionState(SubmitReadingListForm, initialState)

  return (
    <div className={ui.panel}>
      <h2 className="mb-6 text-2xl font-medium text-[#222b30]">New Book</h2>
      <form className="space-y-5" action={formAction}>
        <div>
          <label htmlFor="title" className={ui.label}>Title</label>
          <input
            required
            type="text"
            id="title"
            name="title"
            className={ui.input}
            placeholder="Enter book title"
          />
        </div>

        <div>
          <label htmlFor="author" className={ui.label}>Author</label>
          <input
            required
            type="text"
            id="author"
            name="author"
            className={ui.input}
            placeholder="Enter author"
          />
        </div>

        <div>
          <label htmlFor="module" className={ui.label}>Module</label>
          <input
            required
            type="text"
            id="module"
            name="module"
            className={ui.input}
            placeholder="Enter module"
          />
        </div>

        <div>
          <label htmlFor="url" className={ui.label}>Book URL</label>
          <input
            type="text"
            id="url"
            name="url"
            className={ui.input}
            placeholder="Enter book URL"
          />
        </div>

        <button type="submit" className={ui.button}>Submit</button>

        {state.message && (
          <p className={`text-center ${state.success ? "text-[#566e4f]" : "text-[#9b4a44]"}`}>
            {state.message}
          </p>
        )}
      </form>
    </div>
  );
}

export default ReadingListForm;
