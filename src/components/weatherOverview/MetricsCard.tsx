import { useWeatherViewModel } from "@/hooks/useWeatherViewModel";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useSearchStore } from "@/stores/useSearchStore";

export default function MetricsCard() {
  const { current, isLoading } = useWeatherViewModel();
  const { unit } = useSearchStore();

  if (isLoading || !current) {
    return (
      <p className="text-muted-foreground animate-pulse">
        Loading weather metrics...
      </p>
    );
  }

  const { feelsLike, humidity, wind, precipitation } = current;

  const labels = {
    metric: {
      temp: "°C",
      wind: "km/h",
      precipitation: "mm",
    },
    imperial: {
      temp: "°F",
      wind: "mph",
      precipitation: "in",
    },
  };

  const todayForecast = {
    "Feels Like": `${feelsLike}${labels[unit].temp}`,
    Humidity: `${humidity}%`,
    Wind: `${wind} ${labels[unit].wind}`,
    Precipitation: `${precipitation} ${labels[unit].precipitation}`,
  };

  return (
    <div className="flex gap-4 mt-8">
      {Object.entries(todayForecast).map(([key, value]) => (
        <Card key={key} className="flex-1 bg-neutral-700 rounded-xl border">
          <CardHeader>
            <CardTitle className="-mt-2">{key}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">{value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}