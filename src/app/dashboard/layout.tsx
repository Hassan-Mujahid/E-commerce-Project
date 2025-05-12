export const dynamic = "force-dynamic";

import type React from "react";
// import { DashboardNav } from "@/components/dashboard/dashboard-nav";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { redirect } from "next/navigation";
// import { getMockUser } from "@/lib/data";
import { getServerAuthUser } from "@/lib/getServerAuthUser";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This would be replaced with actual auth check

  const user = await getServerAuthUser();
  const currentUser = {
    name: user.name,
    id: user._id.toString(),
    email: user.email,
    role: user.email,
  };

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader user={currentUser} />
      {/* md:grid-cols-[240px_1fr] */}
      <div className="container mx-auto px-4 py-6 flex-1 grid grid-cols-1  gap-8">
        {/* <DashboardNav /> */}
        <main>{children}</main>
      </div>
    </div>
  );
}
