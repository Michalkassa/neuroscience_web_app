import type { Metadata } from "next";
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
      <div>
      {children}
      </div>
    </div>
  )
}