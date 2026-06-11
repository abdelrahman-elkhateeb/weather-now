import { useWeatherViewModel } from "@/hooks/useWeatherViewModel";

export default function WeatherHeroCard() {

  const { current, isLoading } = useWeatherViewModel();

  return (
    <div className={`bg-[url(@/assets/bg-today-large.svg)] bg-cover bg-no-repeat rounded-lg flex items-center justify-between px-15 min-h-65 `}>
      <div>
        <h2 className="font-bold text-3xl">
          {current?.cityName}
        </h2>
        <p className="text-neutral-200 mt-3">{current?.date}</p>
      </div>

      <div className="flex">
        <div className="w-25">
          <img src={current?.icon} alt="sun" />
        </div>
        <span className="block text-9xl">
          {`${current?.temperature}°`}
        </span>
      </div>
    </div>
  )
}
