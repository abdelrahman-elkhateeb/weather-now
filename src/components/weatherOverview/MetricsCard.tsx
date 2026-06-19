import { useWeatherViewModel } from "@/hooks/useWeatherViewModel";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useWeatherUnits } from "@/hooks/useWeatherUnits";
import MetricCardLoading from "../loading/MetricCardLoading";

export default function MetricsCard() {
  const { current, isLoading } = useWeatherViewModel();
  const { labels } = useWeatherUnits();

  if (isLoading || !current) {
    return <MetricCardLoading />;
  }

  const { feelsLike, humidity, wind, precipitation } = current;

  const todayForecast = {
    "Feels Like": `${feelsLike}${labels.temperature}`,
    Humidity: `${humidity}%`,
    Wind: `${wind} ${labels.wind}`,
    Precipitation: `${precipitation} ${labels.precipitation}`,
  };

  return (
    <div className="grid grid-cols-2 md:flex gap-4 mt-8">
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