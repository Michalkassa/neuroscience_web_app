import { redirect } from "next/navigation";
import { auth } from "@/app/api/auth/auth";

export default async function Dashboard() {
  const session = await auth();

  if (!session) return redirect("/login");

  return <div>Dashboard Page</div>;
}
