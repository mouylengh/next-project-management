import type { Metadata } from "next";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarLayout } from "@/components/SidebarLayout";
import "./globals.css";
import { poppins } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Product Managment System",
  description: "In-house system for managing product",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-regular antialiased`}
      >
        <SidebarProvider>
          <SidebarLayout />
          <main className="w-full h-screen">
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
