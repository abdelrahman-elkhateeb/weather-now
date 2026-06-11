import { useWeatherViewModel } from "@/hooks/useWeatherViewModel";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

type IHour = {
  icon: string,
  time: Date,
  temperature: number
}

export default function HourlyForecast() {
  const { hourly } = useWeatherViewModel();

  return (
    <div>
      <div className="flex justify-between">
        <h2>Hourly forecast</h2>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex gap-2 items-center">
            <span>
              tuesday
            </span>
            <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuGroup>
            <DropdownMenuContent>
              <DropdownMenuItem>
                monday
              </DropdownMenuItem>
              <DropdownMenuItem>
                tuesday
              </DropdownMenuItem>
              <DropdownMenuItem>
                wednesday
              </DropdownMenuItem>
              <DropdownMenuItem>
                thursday
              </DropdownMenuItem>
              <DropdownMenuItem>
                friday
              </DropdownMenuItem>
              <DropdownMenuItem>
                sunday
              </DropdownMenuItem>
              <DropdownMenuItem>
                saturday
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenuGroup>
        </DropdownMenu>
      </div>

      <div>
        {hourly.map((hour: IHour, i: number) => (
          <Card key={i}>
            <CardContent className="flex items-center justify-between">
              <div className="w-10">
                <img src={hour.icon} alt="img" className="w-full" />
              </div>
              <p>{`${hour.time} PM`}</p>
              <span>{`${hour.temperature} °C`}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
