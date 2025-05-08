"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Package, Clock, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

export function DashboardCards() {
  const cards = [
    {
      title: "Total Orders",
      value: "12",
      description: "All time orders",
      icon: ShoppingBag,
      color: "text-blue-500",
    },
    {
      title: "Processing",
      value: "2",
      description: "Orders in progress",
      icon: Clock,
      color: "text-yellow-500",
    },
    {
      title: "Delivered",
      value: "10",
      description: "Completed orders",
      icon: Package,
      color: "text-green-500",
    },
    {
      title: "Total Spent",
      value: "$1,248.42",
      description: "All time spending",
      icon: CreditCard,
      color: "text-purple-500",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {card.title}
              </CardTitle>
              <card.icon className={`h-4 w-4 ${card.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              <p className="text-xs text-muted-foreground">
                {card.description}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
