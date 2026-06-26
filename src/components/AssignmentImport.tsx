'use client';

import { useActionState } from 'react';
import { ImportAssignmentsCSV } from '@/app/api/auth/actions';
import { ui } from '@/app/theme';

const initialState = {
  message: '',
  success: false,
};

const AssignmentImport: React.FC = () => {
  const [state, formAction] = useActionState(ImportAssignmentsCSV, initialState);

  return (
    <div className={ui.panel}>
      <h2 className="mb-2 text-2xl font-medium text-[#222b30]">Import from CSV</h2>
      <p className="mb-5 text-sm text-[#5d6a70]">
        Upload an Excel/CSV export to add many assignments at once.
      </p>

      <form className="space-y-5" action={formAction}>
        <input
          required
          type="file"
          name="file"
          accept=".csv,text/csv"
          className="block w-full text-sm text-[#37434a] file:mr-4 file:cursor-pointer file:border file:border-[#46535a] file:bg-[#46535a] file:px-4 file:py-2 file:text-[#e6eaea] hover:file:bg-[#333d43]"
        />

        <button type="submit" className={ui.button}>Import Assignments</button>

        {state.message && (
          <p className={`text-center ${state.success ? 'text-[#566e4f]' : 'text-[#9b4a44]'}`}>
            {state.message}
          </p>
        )}
      </form>

      <div className="mt-6 border-t border-[#8b989c]/60 pt-4 text-sm text-[#5d6a70]">
        <p className="mb-2">
          Header row (required: <span className="text-[#37434a]">title, module, dueDate</span>):
        </p>
        <code className="block overflow-x-auto whitespace-pre rounded-sm bg-[#dfe5e5] px-3 py-2 text-xs text-[#37434a]">
          title,module,dueDate,type,weight,topics,assessmentStyle,expectedFeedback
        </code>
        <a
          href="/assignment-import-template.csv"
          download
          className="mt-3 inline-block underline hover:text-[#46535a]"
        >
          Download template CSV
        </a>
      </div>
    </div>
  );
};

export default AssignmentImport;
