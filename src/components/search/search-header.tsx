"use client";

import type React from "react";

import { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function SearchHeader({ query }: { query: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(query);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams.toString());
    if (searchQuery) {
      params.set("q", searchQuery);
    } else {
      params.delete("q");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">
        {query ? `Search results for "${query}"` : "All Products"}
      </h1>

      <form onSubmit={handleSearch} className="flex w-full max-w-lg gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button type="submit">Search</Button>
      </form>
    </div>
  );
}
