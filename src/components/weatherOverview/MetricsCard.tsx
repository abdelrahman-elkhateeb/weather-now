import { useWeatherViewModel } from "@/hooks/useWeatherViewModel"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

export default function MetricsCard() {
  const { current, isLoading } = useWeatherViewModel();

  if (isLoading || !current) {
    return (
      <div className="flex gap-3">
        <p className="text-muted-foreground animate-pulse">Loading weather metrics...</p>
      </div>
    );
  }


  const { feelsLike, humidity, wind, precipitation } = current as {
    feelsLike: number;
    humidity: number;
    wind: number;
    precipitation: number;
  };;

  const todayForecast = {
    "Feels Like": `${feelsLike}°`,
    "Humidity": `${humidity}%`,
    "Wind": `${wind} km/h`,
    "Precipitation": `${precipitation} mm`
  };

  return (
    <div className="flex gap-4 mt-8">
      {Object.entries(todayForecast).map(([key, value]) => (
        <Card key={key} className="flex-1 bg-neutral-700 rounded-xl border">
          <CardHeader>
            <CardTitle className="-mt-2">
              {key}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">
              {value}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
