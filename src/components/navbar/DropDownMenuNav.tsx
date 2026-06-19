import { useSearchStore } from "@/stores/useSearchStore";
import { ChevronDown, Settings } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";


export default function DropDownMenuNav() {
  const { units, setAllUnits, setUnit } = useSearchStore();

  const isAllMetric = Object.values(units).every(
    (unit) => unit === "metric"
  );

  const nextGlobalUnit = isAllMetric ? "imperial" : "metric";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-2 items-center bg-neutral-800 p-1 rounded-md">
        <Settings size={16} strokeWidth={1} />
        <span>units</span>
        <ChevronDown size={16} strokeWidth={1} />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-neutral-700">
        <DropdownMenuItem onClick={() => setAllUnits(nextGlobalUnit)}>
          Switch to {nextGlobalUnit}
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel>temperature</DropdownMenuLabel>

          <DropdownMenuItem onClick={() => setUnit("temperature", "metric")}>
            Celsius (°C)
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setUnit("temperature", "imperial")}>
            Fahrenheit (°F)
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel>Wind Speed</DropdownMenuLabel>

          <DropdownMenuItem onClick={() => setUnit("wind", "metric")}>
            Km/h
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setUnit("wind", "imperial")}>
            Mph
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel>Precipitation</DropdownMenuLabel>

          <DropdownMenuItem onClick={() => setUnit("precipitation", "metric")}>
            Millimeters (mm)
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setUnit("precipitation", "imperial")}>
            Inches (in)
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}