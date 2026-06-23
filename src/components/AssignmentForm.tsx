'use client'
import { SubmitAssignmentForm } from "@/app/api/auth/actions";
import { useActionState } from "react";
import { ui } from "@/app/theme";

const initialState = {
  message: "",
  success: false,
}

const AssignmentForm: React.FC = () => {
  const [state, formAction] = useActionState(SubmitAssignmentForm, initialState)

  return (
    <div className={ui.panel}>
      <h2 className="mb-6 text-2xl font-medium text-[#222b30]">New Assignment</h2>
      <form className="space-y-5" action={formAction}>
        <div>
          <label htmlFor="title" className={ui.label}>Title</label>
          <input
            required
            type="text"
            id="title"
            name="title"
            className={ui.input}
            placeholder="Enter assignment title"
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
          <label htmlFor="dueDate" className={ui.label}>Due Date</label>
          <input
            required
            type="datetime-local"
            id="dueDate"
            name="dueDate"
            className={ui.input}
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

export default AssignmentForm;
