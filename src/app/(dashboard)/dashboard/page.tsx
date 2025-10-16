import { redirect } from "next/navigation"
import { auth } from "@/app/api/auth/auth";

export default async function Dashboard() {
  const session = await auth()

  if (!session) return redirect("/login")

  return (  
    <div className="flex flex-col h-full md:grid md:grid-rows-2 md:grid-cols-dashboard_elements md:gap-5 gap-3 p-1 md:p7 justify-between pb-28">
        Dashboard Page
    </div>
  )
}