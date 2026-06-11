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
    "Feels Like": `${feelsLike}°C`,
    "Humidity": `${humidity}%`,
    "Wind": `${wind} km/h`,
    "Precipitation": `${precipitation} mm`
  };

  return (
    <div className="flex gap-3">
      {Object.entries(todayForecast).map(([key, value]) => (
        <Card key={key} className="">
          <CardHeader>
            <CardTitle className="">
              {key}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="">
              {value}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
