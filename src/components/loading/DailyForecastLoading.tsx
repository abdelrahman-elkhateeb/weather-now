import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export default function DailyForecastLoading() {
  return (
    <div className="mt-10">
      <h4 className="font-bold mb-7">Daily forecast</h4>

      <div className="grid grid-cols-3 md:flex gap-3 text-center mb-4 md:mb-0">
        {Array.from({ length: 7 }).map((_, i) => (
          <Card
            key={i}
            className="flex-1 border bg-neutral-700"
          >
            <CardHeader className="-m-2 flex items-center">
              <Skeleton className="h-5 w-12 bg-neutral-600" />
            </CardHeader>

            <CardContent className="flex justify-center">
              <Skeleton className="w-16 h-16 rounded-full bg-neutral-600" />
            </CardContent>

            <CardFooter className="flex justify-between">
              <Skeleton className="h-5 w-8 bg-neutral-600" />
              <Skeleton className="h-5 w-8 bg-neutral-600" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}