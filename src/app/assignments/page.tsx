import { AssignmentType } from "@/app/api/types";
import { getAssignments } from "@/app/api/auth/actions";
import AssignmentCard from "@/components/AssignmentCard";
import NotebookPage from "@/components/NotebookPage";
import { ui } from "@/app/theme";

function groupByModule(items: AssignmentType[]) {
  const collection: { [key: string]: AssignmentType[] } = {};
  for (const item of items) {
    const mod: string = item.moduleName;
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
    <NotebookPage title="Assignments" ornament={false}>
      {Object.keys(grouped).length === 0 ? (
        <p className="py-12 text-center text-lg italic text-[#67747a]">
          No assignments recorded yet.
        </p>
      ) : (
        <div className="mx-auto max-w-3xl space-y-12">
          {Object.keys(grouped).map((mod: string) => (
            <section key={mod}>
              <h2 className={ui.sectionHeading}>{mod}</h2>
              <ul className="space-y-4">
                {grouped[mod].map((assignment: AssignmentType) => (
                  <AssignmentCard key={assignment.id} assignment={assignment} />
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </NotebookPage>
  );
}
