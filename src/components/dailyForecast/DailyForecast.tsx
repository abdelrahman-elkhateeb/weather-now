import { useWeatherViewModel } from "@/hooks/useWeatherViewModel"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import type { IDaily } from "@/types/DailyTypes";


export default function DailyForecast() {
  const { daily } = useWeatherViewModel();

  return (
    <div>
      <h4>Daily forecast</h4>
      <div className="flex gap-3">
        {daily.map((card: IDaily, i: number) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>
                {card.dayName}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img src={card.icon} alt="img" />
            </CardContent>
            <CardFooter>
              <span>{`${card.minTemp}°C`}</span>
              <span>{`${card.maxTemp}°C`}</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}