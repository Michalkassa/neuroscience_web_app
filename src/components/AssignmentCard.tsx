import CountdownTimer from './CountdownTimer';
import { AssignmentType } from '@/app/api/types';
import { ui } from '@/app/theme';

const AssignmentCard = ({ assignment }: { assignment: AssignmentType }) => {
  return (
    <li className={ui.card}>
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-2xl font-medium leading-snug text-[#222b30]">
          {assignment.title}
        </h3>
        <span className={ui.chip}>
          {assignment.moduleName}
        </span>
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

export default AssignmentCard;
