import React from "react";
import AssignmentForm from "@/components/AssignmentForm";
import { getAssignments } from "@/app/api/auth/actions";
import { AssignmentType } from "@/app/api/types";
import AssignmentCard from "@/components/AssignmentCard";

const AssignmentsPage: React.FC = async () => {
  const assignments = await getAssignments();

  return (
    <div className="bg-gray-950 min-h-screen pt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <AssignmentForm />

        <div className="mt-8">
          {assignments.length === 0 ? (
            <div className="text-gray-400 text-center">
              No assignments found.
            </div>
          ) : (
            <ul className="space-y-4">
              {assignments.map((assignment: AssignmentType) => (
                <AssignmentCard
                  key={assignment.id}
                  assignment={assignment}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssignmentsPage;
