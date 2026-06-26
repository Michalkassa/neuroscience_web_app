'use client';

import { useActionState, useEffect } from 'react';
import { UpdateAssignment } from '@/app/api/auth/actions';
import AssignmentFields from './AssignmentFields';
import { AssignmentType } from '@/app/api/types';
import { ui } from '@/app/theme';

const initialState = {
  message: '',
  success: false,
};

/** Format a Date for a `datetime-local` input (local time, no seconds). */
function toLocalInputValue(date: Date) {
  const pad = (n: number) => String(n).padStart(2, '0');
  return (
    `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}` +
    `T${pad(date.getHours())}:${pad(date.getMinutes())}`
  );
}

const EditAssignmentForm = ({
  assignment,
  onDone,
}: {
  assignment: AssignmentType;
  onDone: () => void;
}) => {
  const [state, formAction] = useActionState(UpdateAssignment, initialState);

  useEffect(() => {
    if (state.success) onDone();
  }, [state.success, onDone]);

  return (
    <form className="mt-4 space-y-5" action={formAction}>
      <input type="hidden" name="id" value={assignment.id} />

      <div>
        <label htmlFor="title" className={ui.label}>Title</label>
        <input
          required
          type="text"
          id="title"
          name="title"
          className={ui.input}
          defaultValue={assignment.title}
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
          defaultValue={assignment.moduleName}
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
          defaultValue={toLocalInputValue(assignment.dueDate)}
        />
      </div>

      <AssignmentFields defaults={assignment} />

      <div className="flex gap-3">
        <button type="submit" className={ui.button}>Save Changes</button>
        <button
          type="button"
          onClick={onDone}
          className="w-full border border-[#8b989c] bg-transparent py-2.5 text-lg tracking-wide text-[#46535a] transition-colors hover:bg-[#dfe5e5]"
        >
          Cancel
        </button>
      </div>

      {state.message && (
        <p className={`text-center ${state.success ? 'text-[#566e4f]' : 'text-[#9b4a44]'}`}>
          {state.message}
        </p>
      )}
    </form>
  );
};

export default EditAssignmentForm;
