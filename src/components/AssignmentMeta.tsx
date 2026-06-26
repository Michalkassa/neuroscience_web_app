import CountdownTimer from './CountdownTimer';
import { AssignmentType } from '@/app/api/types';
import { ui } from '@/app/theme';

/**
 * Read-only metadata banner shared by the public and admin assignment cards so
 * both surfaces present identical information. Optional fields are only rendered
 * when present.
 */
const AssignmentMeta = ({ assignment }: { assignment: AssignmentType }) => {
  const details: { label: string; value: string }[] = [];

  if (assignment.isSummative && assignment.weight != null) {
    details.push({ label: 'Weight', value: `${assignment.weight}%` });
  }
  if (assignment.topics) {
    details.push({ label: 'Topics Assessed', value: assignment.topics });
  }
  if (assignment.assessmentStyle) {
    details.push({ label: 'Assessment Style', value: assignment.assessmentStyle });
  }
  if (assignment.expectedFeedback) {
    details.push({ label: 'Feedback Expected', value: assignment.expectedFeedback });
  }

  return (
    <div className="mt-3 space-y-4">
      <span className={assignment.isSummative ? ui.badgeSummative : ui.badgeFormative}>
        {assignment.isSummative ? 'Summative' : 'Formative'}
      </span>

      {details.length > 0 && (
        <dl className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
          {details.map((detail) => (
            <div key={detail.label}>
              <dt className={ui.metaLabel}>{detail.label}</dt>
              <dd className={ui.metaValue}>{detail.value}</dd>
            </div>
          ))}
        </dl>
      )}

      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-[#46535a]/15 pt-3">
        <p className="text-[#67747a]">
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
    </div>
  );
};

export default AssignmentMeta;
