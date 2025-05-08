import type React from "react";
import { DashboardNav } from "@/components/dashboard/dashboard-nav";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { redirect } from "next/navigation";
import { getMockUser } from "@/lib/data";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This would be replaced with actual auth check
  const user = await getMockUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader user={user} />
      <div className="container mx-auto px-4 py-6 flex-1 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
        <DashboardNav />
        <main>{children}</main>
      </div>
    </div>
  );
}
