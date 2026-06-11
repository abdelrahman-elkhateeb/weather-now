import { useWeatherViewModel } from "@/hooks/useWeatherViewModel";

export default function WeatherHeroCard() {

  const { current, isLoading } = useWeatherViewModel();

  return (
    <div className="flex justify-between">
      <div>
        <h2>
          {current?.cityName}
        </h2>
        <p>{current?.date}</p>
      </div>

      <div className="flex">
        <div>
          <img src={current?.icon} alt="sun" />
        </div>
        <span>
          {current?.temperature}
        </span>
      </div>
    </div>
  )
}
