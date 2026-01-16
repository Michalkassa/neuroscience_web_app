import { AssignmentType, BookType } from "@/app/api/types";
import { getAssignments } from "@/app/api/auth/actions"
import { redirect } from "next/navigation"
import { auth } from "@/app/api/auth/auth";
import AssignmentCard from "@/components/AssignmentCard";
// function groupByModule(items: AssignmentType[]){
//   const collection: { [key: string]: BookType[] } = {};
//   for (const item of items) {
//     let mod:string = item.module;
//     if (!collection[mod]) {
//       collection[mod] = [item];
//     }else{
//       collection[mod].push(item)
//     }
//   }
//   return collection;
// }

export default async function AssignmentsPage() {

  const session = await auth()

  if (!session) return redirect("/login")

  const assignments = await getAssignments()


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
          {assignments.map((assignment:AssignmentType) => (
          <AssignmentCard key={assignment.id} assignment={assignment}/>
          ))}
        </ul>
      )}
    </div>
  );
}
