import { AssignmentType } from "@/app/api/types";
import { getAssignments } from "@/app/api/auth/actions";
import AssignmentCard from "@/components/AssignmentCard";

function groupByModule(items: AssignmentType[]) {
  const collection: { [key: string]: AssignmentType[] } = {};
  for (const item of items) {
    let mod: string = item.module;
    if (!collection[mod]) {
      collection[mod] = [item];
    } else {
      collection[mod].push(item);
    }
  }
  return collection;
}

export default async function AssignmentsPage() {
  const assignments = await getAssignments();
  const grouped: { [key: string]: AssignmentType[] } = groupByModule(assignments);

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Assignments
        </h1>
        <p className="text-gray-400">
          A list of all assignments, their due dates, and the module they are for.
        </p>
      </div>

      {Object.keys(grouped).length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No assignments found.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {Object.keys(grouped).map((mod: string) => (
            <section key={mod}>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                  <h2 className="text-xl font-bold text-white">
                    {mod}
                  </h2>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent"></div>
              </div>

              <ul className="space-y-4">
                {grouped[mod].map((assignment: AssignmentType) => (
                  <AssignmentCard key={assignment.id} assignment={assignment} />
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}