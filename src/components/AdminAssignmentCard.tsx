'use client';

import { useState } from 'react';
import { DeleteAssignment } from '@/app/api/auth/actions';
import AssignmentMeta from './AssignmentMeta';
import EditAssignmentForm from './EditAssignmentForm';
import { AssignmentType } from '@/app/api/types';
import { ui } from '@/app/theme';

const AdminAssignmentCard = ({ assignment }: { assignment: AssignmentType }) => {
  const [isEditing, setIsEditing] = useState(false);

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
            onClick={() => setIsEditing((v) => !v)}
            className={ui.editButton}
            aria-label={isEditing ? 'Stop editing assignment' : 'Edit assignment'}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
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

      {isEditing ? (
        <EditAssignmentForm assignment={assignment} onDone={() => setIsEditing(false)} />
      ) : (
        <AssignmentMeta assignment={assignment} />
      )}
    </li>
  );
};

export default AdminAssignmentCard;
