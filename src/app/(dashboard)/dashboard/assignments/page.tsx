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
    <>
      <h1 className="mb-8 text-center text-4xl font-medium tracking-tight">
        Assignments
      </h1>

      <AssignmentForm />

      <div className="mt-10">
        {assignments.length === 0 ? (
          <p className="py-8 text-center text-lg italic text-[#67747a]">
            No assignments recorded yet.
          </p>
        ) : (
          <ul className="space-y-4">
            {assignments.map((assignment: AssignmentType) => (
              <AdminAssignmentCard key={assignment.id} assignment={assignment} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default AssignmentsPage;
