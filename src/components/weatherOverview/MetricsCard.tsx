import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

const data = [
  {
    "title": "feels like",
    "metric": "18°"
  },
  {
    "title": "humidity",
    "metric": "46%"
  },
  {
    "title": "wind",
    "metric": "14 km/h"
  },
  {
    "title": "precipitation",
    "metric": "0 mm"
  }
]

export default function MetricsCard() {
  return (
    <div className="flex gap-3">
      {
        data.map((card, i) => (
          <Card key={i} className="">
            <CardHeader>
              <CardTitle>
                {card.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {card.metric}
            </CardContent>
          </Card>
        ))
      }
    </div>
  )
}
