import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { SidebarProvider } from "./_components/ui/sidebar";
import SidebarDashboard from "./_components/sidebar";

const mulish = Mulish({
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Finance.ai - SyncUp",
  description: "Controle das suas finanças sem complicação, com auxílio de inteligência artificial para apoiar sua gestão.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${mulish.className} antialiased`} >
          <SidebarProvider>
            <SidebarDashboard />

            <main className="bg-gray-100 w-full p-8">{children}</main>
          </SidebarProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
