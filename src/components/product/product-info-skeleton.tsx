import { Skeleton } from "@/components/ui/skeleton";

export function ProductInfoSkeleton() {
  return (
    <div className="space-y-6">
      <div>
        <Skeleton className="h-10 w-4/5" />
        <div className="flex items-center gap-2 mt-2">
          <Skeleton className="h-4 w-24" />
        </div>
      </div>

      <Skeleton className="h-8 w-24" />

      <Skeleton className="h-20 w-full" />

      <div className="space-y-4">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
      </div>

      <div className="flex items-center gap-4">
        <Skeleton className="h-10 w-32" />
        <Skeleton className="h-10 flex-1" />
        <Skeleton className="h-10 w-10" />
      </div>

      <div>
        <div className="flex border-b">
          <Skeleton className="h-10 w-1/3" />
          <Skeleton className="h-10 w-1/3" />
          <Skeleton className="h-10 w-1/3" />
        </div>
        <div className="pt-4">
          <Skeleton className="h-24 w-full" />
        </div>
      </div>
    </div>
  );
}
