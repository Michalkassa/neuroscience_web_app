import { auth } from "./api/auth/auth";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import AdminHeader from "@/components/AdminHeader";
import ReCaptchaProvider from "@/components/ReCaptchaProvider";
import { paperBackground } from "@/app/theme";

export const metadata: Metadata = {
  title: "Your number 1 neuroscience helper",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth();
  return (
    <html lang="en">
      <ReCaptchaProvider>
      <body className="text-[#222b30]" style={paperBackground}>
        {/* red margin line running the full height of the sheet, up through the navbar */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-y-0 left-10 z-0 w-px bg-[#b07d77]/45 sm:left-24"
        />
        <Header />
        {session && <AdminHeader />}
        {children}
      </body>
      </ReCaptchaProvider>
    </html>
  );
}
