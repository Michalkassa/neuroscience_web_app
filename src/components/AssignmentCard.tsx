import AssignmentMeta from './AssignmentMeta';
import { AssignmentType } from '@/app/api/types';
import { ui } from '@/app/theme';

const AssignmentCard = ({ assignment }: { assignment: AssignmentType }) => {
  return (
    <li className={ui.card}>
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-2xl font-medium leading-snug text-[#222b30]">
          {assignment.title}
        </h3>
        <span className={ui.chip}>{assignment.moduleName}</span>
      </div>

      <AssignmentMeta assignment={assignment} />
    </li>
  );
};

export default AssignmentCard;
