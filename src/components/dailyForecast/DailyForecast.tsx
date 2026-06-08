import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"

const data = [
  {
    "day": "Tue",
    "met1": "68°",
    "img": "../../assets/icon-overcast.webp",
    "met2": "57°"
  },
  {
    "day": "Tue",
    "met1": "68°",
    "img": "@/assets/icon-overcast.webp",
    "met2": "57°"
  },
  {
    "day": "Tue",
    "met1": "68°",
    "img": "@/assets/icon-overcast.webp",
    "met2": "57°"
  },
  {
    "day": "Tue",
    "met1": "68°",
    "img": "@/assets/icon-overcast.webp",
    "met2": "57°"
  },
  {
    "day": "Tue",
    "met1": "68°",
    "img": "@/assets/icon-overcast.webp",
    "met2": "57°"
  },
  {
    "day": "Tue",
    "met1": "68°",
    "img": "@/assets/icon-overcast.webp",
    "met2": "57°"
  },
  {
    "day": "Tue",
    "met1": "68°",
    "img": "@/assets/icon-overcast.webp",
    "met2": "57°"
  },
]

export default function DailyForecast() {
  return (
    <div>
      <h4>Daily forecast</h4>
      <div className="flex gap-3">
        {data.map((card, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>
                {card.day}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img src={card.img} alt="img" />
            </CardContent>
            <CardFooter>
              <span>{card.met1}</span>
              <span>{card.met2}</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
