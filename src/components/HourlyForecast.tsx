import { useState } from "react";
import { useWeatherViewModel } from "@/hooks/useWeatherViewModel";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import HourlyForecastLoading from "./loading/HourlyForecastLoading";

export default function HourlyForecast() {
  const { hourlyByDay, isLoading } = useWeatherViewModel();

  const days = Object.entries(hourlyByDay);
  const [selectedDay, setSelectedDay] = useState("");

  const activeDay = selectedDay || days[0]?.[0];
  const activeHours =
    hourlyByDay[activeDay]?.hours.slice(0, 8) ?? [];
  const activeLabel = hourlyByDay[activeDay]?.label ?? "Select day";

  if (isLoading || !hourlyByDay) return <HourlyForecastLoading />;
  return (
    <div className="bg-neutral-700 rounded-lg p-5">
      <div className="flex justify-between">
        <h2>Hourly forecast</h2>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex gap-2 items-center ml-auto bg-neutral-600 border rounded-md p-1">
            <span>{activeLabel}</span>
            <ChevronDown />
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            {days.map(([dayKey, day]) => (
              <DropdownMenuItem
                key={dayKey}
                onClick={() => setSelectedDay(dayKey)}
              >
                {day.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex flex-col gap-5 mt-4">
        {activeHours.map((hour, i) => (
          <Card key={i} className="bg-neutral-600 rounded-md py-1">
            <CardContent className="flex items-center justify-between">
              <div className="w-10">
                <img src={hour.icon} alt="weather icon" className="w-full" />
              </div>

              <p>{hour.time}</p>

              <span>{hour.temperature} °C</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}