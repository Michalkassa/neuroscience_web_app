'use client';

import { DeleteAssignment } from '@/app/api/auth/actions';
import CountdownTimer from './CountdownTimer';
import { AssignmentType } from '@/app/api/types';
import { ui } from '@/app/theme';

const AdminAssignmentCard = ({ assignment }: { assignment: AssignmentType }) => {
  async function handleDelete() {
    await DeleteAssignment(assignment);
  }

  return (
    <li className={ui.card}>
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-2xl font-medium leading-snug text-[#222b30]">
          {assignment.title}
        </h3>
        <div className="flex items-center gap-2">
          <span className={ui.chip}>{assignment.moduleName}</span>
          <button
            onClick={handleDelete}
            className={ui.deleteButton}
            aria-label="Delete assignment"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <p className="italic text-[#67747a]">
          Due{' '}
          {assignment.dueDate.toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
        <CountdownTimer dueDate={assignment.dueDate} />
      </div>
    </li>
  );
};

export default AdminAssignmentCard;
