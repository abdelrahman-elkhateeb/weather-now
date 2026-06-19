import { ChevronDown } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import { Card, CardContent } from "../ui/card";


export default function HourlyForecastLoading() {
  return (
    <div className="bg-neutral-700 rounded-lg p-5">
      <div className="flex justify-between">
        <h2>Hourly forecast</h2>

        <div className="flex gap-2 items-center ml-auto bg-neutral-800 border rounded-md p-1">
          <Skeleton className="h-5 w-16 bg-neutral-700" />
          <ChevronDown />
        </div>
      </div>

      <div className="flex flex-col gap-5 mt-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <Card key={i} className="bg-neutral-600 rounded-md py-1">
            <CardContent className="flex items-center justify-between">
              <Skeleton className="w-10 h-10 rounded-full bg-neutral-700" />
              <Skeleton className="h-5 w-16 bg-neutral-700" />
              <Skeleton className="h-5 w-14 bg-neutral-700" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}