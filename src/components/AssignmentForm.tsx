'use client'
import { SubmitAssignmentForm } from "@/app/api/auth/actions";
import { useActionState } from "react";

const initialState = {
  message: "",
  success: false,
}

const AssignmentForm: React.FC = () => {
  const [state, formAction] = useActionState(SubmitAssignmentForm, initialState)
  
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 border border-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-white">Assignment Form</h2>
      <form className="space-y-4" action={formAction}>
        
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-300">
            Title
          </label>
          <input
            required
            type="text"
            id="title"
            name="title"
            className="mt-1 block w-full border border-gray-700 bg-gray-900 text-white rounded-md shadow-sm p-2 placeholder-gray-400"
            placeholder="Enter assignment title"
          />
        </div>

        <div>
          <label htmlFor="module" className="block text-sm font-medium text-gray-300">
            Module
          </label>
          <input
            required
            type="text"
            id="module"
            name="module"
            className="mt-1 block w-full border border-gray-700 bg-gray-900 text-white rounded-md shadow-sm p-2 placeholder-gray-400"
            placeholder="Enter module"
          />
        </div>

        <div>
          <label htmlFor="dueDate" className="block text-sm font-medium text-gray-300">
            Due Date
          </label>
          <input
            required
            type="datetime-local"
            id="dueDate"
            name="dueDate"
            className="mt-1 block w-full border border-gray-700 bg-gray-900 text-white rounded-md shadow-sm p-2 placeholder-gray-400"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold"
        >
          Submit
        </button>
        {state.success ? (
          <p className="text-green-600">{state?.message}</p>
        ) : (
          <p className="text-red-600">{state?.message}</p>
        )}
      </form>
    </div>
  );
}

export default AssignmentForm;