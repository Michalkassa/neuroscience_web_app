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
    <div className="relative z-10 min-h-screen text-[#222b30]">
      <div className="mx-auto max-w-3xl px-6 py-12">{children}</div>
    </div>
  );
}
