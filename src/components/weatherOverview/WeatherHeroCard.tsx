import { useWeatherViewModel } from "@/hooks/useWeatherViewModel";
import WeatherHeroCardLoading from "../loading/WeatherHeroCardLoading";

export default function WeatherHeroCard() {
  const { current, isLoading } = useWeatherViewModel();

  if (isLoading || !current) {
    return <WeatherHeroCardLoading />;
  }

  return (
    <div className={`bg-[url(@/assets/bg-today-large.svg)] bg-cover bg-no-repeat rounded-lg flex items-center justify-center md:justify-between md:flex-row px-15 min-h-65 flex-col`}>
      <div>
        <h2 className="font-bold mt-5 md:mt-0 text-3xl">
          {current?.cityName}
        </h2>
        <p className="text-neutral-200 mt-3">{current?.time}</p>
      </div>

      <div className="flex items-center">
        <div className="w-25">
          <img src={current?.icon} alt="sun" />
        </div>
        <span className="block text-6xl font-bold md:text-9xl">
          {`${current?.temperature}°`}
        </span>
      </div>
    </div>
  )
}
