export const dynamic = "force-dynamic";


import { DashboardCards } from "@/components/dashboard/dashboard-cards";
import { RecentOrders } from "@/components/dashboard/recent-orders";
import { Suspense } from "react";
import { RecentOrdersSkeleton } from "@/components/dashboard/recent-orders-skeleton";

export default function DashboardPage() {
  
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <DashboardCards />

      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
        <Suspense fallback={<RecentOrdersSkeleton />}>
          <RecentOrders />
        </Suspense>
      </div>
    </div>
  );
}
