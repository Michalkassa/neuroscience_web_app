import CountdownTimer from './CountdownTimer';
import { AssignmentType } from '@/app/api/types';
const AssignmentCard = ({ assignment }: { assignment: AssignmentType }) => {
  return (
    <div className="group relative p-6 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl shadow-lg hover:shadow-2xl hover:border-blue-500 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-xl transition-all duration-300" />

      <div className="relative">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {assignment.title}
          </h3>
          <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-md font-semibold rounded-full border border-blue-500/30">
            {assignment.moduleName}
          </span>
        </div>
        <div className="mb-4 p-3 bg-gray-800/50 rounded-lg border border-gray-700">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm text-gray-400 font-medium">Due Date</span>
          </div>
          <p className="text-gray-200 font-mono text-md">
            {assignment.dueDate.toLocaleString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
        </div>
        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg border border-gray-600">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-yellow-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm text-gray-300 font-semibold">Time Remaining</span>
          </div>
          <CountdownTimer dueDate={assignment.dueDate} />
        </div>
      </div>
    </div>
  );
};
export default AssignmentCard;