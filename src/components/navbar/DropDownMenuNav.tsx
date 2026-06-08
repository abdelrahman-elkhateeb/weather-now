import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { ChevronDown, Settings } from "lucide-react";
import { Button } from "../ui/button";


export default function DropDownMenuNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-2 items-center">
        <Settings size={16} strokeWidth={1} />
        <span>units</span>
        <ChevronDown size={16} strokeWidth={1} />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <Button variant="ghost">
          switch to imperial
        </Button>

        <DropdownMenuGroup>
          <DropdownMenuLabel>
            temperature
          </DropdownMenuLabel>

          <DropdownMenuItem>
            Celsius (°C)
          </DropdownMenuItem>

          <DropdownMenuItem>
            fahrenheit (°F)
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel>
            Wind Speed
          </DropdownMenuLabel>

          <DropdownMenuItem>
            Km/h
          </DropdownMenuItem>

          <DropdownMenuItem>
            Mph
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel>
            Precipitation
          </DropdownMenuLabel>

          <DropdownMenuItem>
            Millimeters (mm)
          </DropdownMenuItem>

          <DropdownMenuItem>
            Inches (in)
          </DropdownMenuItem>
        </DropdownMenuGroup>

      </DropdownMenuContent>

    </DropdownMenu>
  )
}
