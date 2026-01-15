import { AssignmentType, BookType } from "@/app/api/types";

function groupByModule(items: AssignmentType[]){
  const collection: { [key: string]: BookType[] } = {};
  for (const item of items) {
    let mod:string = item.module;
    if (!collection[mod]) {
      collection[mod] = [item];
    }else{
      collection[mod].push(item)
    }
  }
  return collection;
}

export default async function AssignmentsPage() {
     const assignments = [
  {
    id: "a1",
    title: "Essay: Research Methods",
    module: "PSY101",
    dueDate: new Date("2026-01-28T23:59:00Z"),
  },
  {
    id: "a2",
    title: "Problem Set 3",
    module: "MATH204",
    dueDate: new Date("2026-01-20T17:00:00Z"),
  },
  {
    id: "a3",
    title: "Networking Lab Report",
    module: "CS320",
    dueDate: new Date("2026-02-02T10:00:00Z"),
  },
  {
    id: "a4",
    title: "Group Presentation",
    module: "BUS150",
    dueDate: new Date("2026-01-25T12:00:00Z"),
  },
  {
    id: "a5",
    title: "Reading Reflection",
    module: "ENG201",
    dueDate: new Date("2026-01-22T09:00:00Z"),
  },
];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-white mb-4">Assignments</h1>
      <p className="text-gray-400 mb-6">
        A list of all assignments, their due dates, and the module they are for.
      </p>

      {assignments.length === 0 ? (
        <div className="text-gray-400">No assignments found.</div>
      ) : (
        <ul className="space-y-4">
          {assignments.map((a) => (
            <li
              key={a.id}
              className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-white">{a.title}</h2>
                  <p className="text-sm text-gray-400">Module: {a.module}</p>
                </div>
                <div className="mt-2 sm:mt-0">
                  <span className="inline-flex items-center rounded-md bg-gray-800 px-3 py-1 text-sm text-gray-200 border border-gray-700">
                    Due:
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
