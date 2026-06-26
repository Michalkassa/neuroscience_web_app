'use client';

import { useState } from 'react';
import { AssignmentType } from '@/app/api/types';
import { ui } from '@/app/theme';

/**
 * Shared set of assessment-metadata inputs used by both the create and edit
 * assignment forms. All fields are optional. The Weight (%) input is only shown
 * for summative assessments, since formative work is not weighted.
 */
const AssignmentFields = ({ defaults }: { defaults?: AssignmentType }) => {
  const [isSummative, setIsSummative] = useState(defaults?.isSummative ?? false);

  return (
    <>
      <div>
        <label htmlFor="isSummative" className={ui.label}>
          Assessment Type
        </label>
        <select
          id="isSummative"
          name="isSummative"
          className={ui.input}
          value={isSummative ? 'true' : 'false'}
          onChange={(e) => setIsSummative(e.target.value === 'true')}
        >
          <option value="false">Formative</option>
          <option value="true">Summative</option>
        </select>
      </div>

      {isSummative && (
        <div>
          <label htmlFor="weight" className={ui.label}>
            Weight (%)
          </label>
          <input
            type="number"
            min={0}
            max={100}
            id="weight"
            name="weight"
            className={ui.input}
            placeholder="e.g. 40"
            defaultValue={defaults?.weight ?? ''}
          />
        </div>
      )}

      <div>
        <label htmlFor="topics" className={ui.label}>
          Topics Assessed
        </label>
        <input
          type="text"
          id="topics"
          name="topics"
          className={ui.input}
          placeholder="e.g. Action potentials, synaptic transmission"
          defaultValue={defaults?.topics ?? ''}
        />
      </div>

      <div>
        <label htmlFor="assessmentStyle" className={ui.label}>
          Assessment Style
        </label>
        <input
          type="text"
          id="assessmentStyle"
          name="assessmentStyle"
          className={ui.input}
          placeholder="e.g. Essay, MCQ, lab report"
          defaultValue={defaults?.assessmentStyle ?? ''}
        />
      </div>

      <div>
        <label htmlFor="expectedFeedback" className={ui.label}>
          Expected Feedback Date
        </label>
        <input
          type="text"
          id="expectedFeedback"
          name="expectedFeedback"
          className={ui.input}
          placeholder="e.g. 2 weeks after submission"
          defaultValue={defaults?.expectedFeedback ?? ''}
        />
      </div>
    </>
  );
};

export default AssignmentFields;
