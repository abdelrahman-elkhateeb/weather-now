import { useWeatherViewModel } from "@/hooks/useWeatherViewModel";
import type { IDaily } from "@/types/DailyTypes";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";


export default function DailyForecast() {
  const { daily } = useWeatherViewModel();

  return (
    <div className="mt-10">
      <h4 className="font-bold mb-7">Daily forecast</h4>
      <div className="flex gap-3 text-center">
        {daily.map((card: IDaily, i: number) => (
          <Card key={i} className="flex-1 border bg-neutral-700">
            <CardHeader className="-m-2">
              <CardTitle>
                {card.dayName}
              </CardTitle>
            </CardHeader>
            <CardContent className="w-30">
              <img src={card.icon} alt="img" />
            </CardContent>
            <CardFooter className="flex justify-between">
              <span>{`${card.minTemp}°`}</span>
              <span>{`${card.maxTemp}°`}</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}