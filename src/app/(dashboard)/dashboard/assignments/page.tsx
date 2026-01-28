import React from "react";
import { redirect } from "next/navigation"
import AssignmentForm from "@/components/AssignmentForm";
import { getAssignments } from "@/app/api/auth/actions";
import { AssignmentType } from "@/app/api/types";
import AdminAssignmentCard from "@/components/AdminAssignmentCard";
import { auth } from "@/app/api/auth/auth";

const AssignmentsPage: React.FC = async () => {
  const assignments = await getAssignments();

  const session = await auth()

  if (!session) return redirect("/login")

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
                <AdminAssignmentCard
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
