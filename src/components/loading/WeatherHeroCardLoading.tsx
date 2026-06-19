import { Skeleton } from "../ui/skeleton";

export default function WeatherHeroCardLoading() {
  return (
    <div className="bg-neutral-700 rounded-lg flex items-center justify-center md:justify-between md:flex-row px-15 min-h-65 flex-col">
      <div className="space-y-3">
        <Skeleton className="h-8 w-40 bg-neutral-600" />
        <Skeleton className="h-4 w-32 bg-neutral-600" />
      </div>

      <div className="flex items-center gap-4 mt-6 md:mt-0">
        <Skeleton className="h-24 w-24 rounded-full bg-neutral-600" />
        <Skeleton className="h-24 w-40 bg-neutral-600" />
      </div>
    </div>
  );
}