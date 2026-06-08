import { ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import img from "@/assets/icon-fog.webp";


export default function HourlyForecast() {

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
        <Card className="flex">
          <CardHeader>
            <img src={img} alt="img" />
          </CardHeader>
          <CardContent> 3PM</CardContent>
          <CardFooter>20 </CardFooter>
        </Card>
        <Card className="flex items-center">
          <CardHeader>
            <img src={img} alt="img" />
          </CardHeader>
          <CardContent> 3PM</CardContent>
          <CardFooter>20 </CardFooter>
        </Card>
        <Card className="flex items-center">
          <CardHeader>
            <img src={img} alt="img" />
          </CardHeader>
          <CardContent> 3PM</CardContent>
          <CardFooter>20 </CardFooter>
        </Card>
        <Card className="flex items-center">
          <CardHeader>
            <img src={img} alt="img" />
          </CardHeader>
          <CardContent> 3PM</CardContent>
          <CardFooter>20 </CardFooter>
        </Card>
        <Card className="flex items-center">
          <CardHeader>
            <img src={img} alt="img" />
          </CardHeader>
          <CardContent> 3PM</CardContent>
          <CardFooter>20 </CardFooter>
        </Card>
        <Card className="flex items-center">
          <CardHeader>
            <img src={img} alt="img" />
          </CardHeader>
          <CardContent> 3PM</CardContent>
          <CardFooter>20 </CardFooter>
        </Card>
      </div>
    </div>
  )
}
