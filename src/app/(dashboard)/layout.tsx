import type { Metadata } from "next";
import DashboardHeader from "@/components/DashboardHeader";
export const metadata: Metadata = {
    title: "Dashboard",
    description: "",
  };
  
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div> 
      <DashboardHeader></DashboardHeader>
      <div>
      {children}
      </div>
    </div>
  )
}