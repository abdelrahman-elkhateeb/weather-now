import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { ChevronDown, Settings } from "lucide-react";
import { Button } from "../ui/button";
import { useSearchStore } from "@/stores/useSearchStore";


export default function DropDownMenuNav() {
  const { unit, setUnit, setOverride } = useSearchStore();

  const toggleUnit = () => {
    setUnit(unit === "metric" ? "imperial" : "metric");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-2 items-center">
        <Settings size={16} strokeWidth={1} />
        <span>units</span>
        <ChevronDown size={16} strokeWidth={1} />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-neutral-700">
        <Button variant="ghost" onClick={toggleUnit}>
          Switch to {unit === "metric" ? "imperial" : "metric"}
        </Button>

        <DropdownMenuGroup>
          <DropdownMenuLabel>
            temperature
          </DropdownMenuLabel>

          <DropdownMenuItem onClick={() => setOverride("temperature", "metric")}>
            Celsius (°C)
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setOverride("temperature", "imperial")}>
            fahrenheit (°F)
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel>
            Wind Speed
          </DropdownMenuLabel>

          <DropdownMenuItem onClick={() => setOverride("wind", "metric")}>
            Km/h
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setOverride("wind", "imperial")}>
            Mph
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel>
            Precipitation
          </DropdownMenuLabel>

          <DropdownMenuItem onClick={() => setOverride("precipitation", "metric")}>
            Millimeters (mm)
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setOverride("precipitation", "imperial")}>
            Inches (in)
          </DropdownMenuItem>
        </DropdownMenuGroup>

      </DropdownMenuContent>

    </DropdownMenu>
  )
}
