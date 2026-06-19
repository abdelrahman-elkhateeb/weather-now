import { Skeleton } from "../ui/skeleton";
import { Card, CardContent, CardHeader } from "../ui/card";

export default function MetricCardLoading() {
  return (
    <div className="grid grid-cols-2 md:flex gap-4 mt-8">
      {Array.from({ length: 4 }).map((_, i) => (
        <Card key={i} className="flex-1 bg-neutral-700 rounded-xl border">
          <CardHeader>
            <Skeleton className="h-5 w-24 bg-neutral-600" />
          </CardHeader>

          <CardContent>
            <Skeleton className="h-8 w-16 bg-neutral-600" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}