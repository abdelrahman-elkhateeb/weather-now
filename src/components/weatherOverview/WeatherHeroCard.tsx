import { useWeather } from "@/services/useWeather";
import { useSearchStore } from "@/stores/useSearchStore";
import { weatherIconMap } from "@/types/weatherIconMap";
import { mapWeatherCode } from "@/utils/weatherCodeMap";
import { format } from "date-fns";

export default function WeatherHeroCard() {
  const { selectedCoordinates, cityName } = useSearchStore();

  const { data, isPending } = useWeather(
    selectedCoordinates?.lat,
    selectedCoordinates?.lng
  );
  const rawDate = data?.current?.time;

  const formattedDate = rawDate
    ? format(new Date(rawDate), "EEEE, MMM d, yyyy")
    : "";

  const weatherCode = data?.current?.weather_code;
  const condition = mapWeatherCode(weatherCode);
  const icon = weatherIconMap[condition];
  const temperature = data?.current?.temperature_2m;

  return (
    <div className="flex justify-between">
      <div>
        <h2>
          {cityName}
        </h2>
        <p>{formattedDate}</p>
      </div>

      <div className="flex">
        <div>
          <img src={icon} alt="sun" />
        </div>
        <span>
          {temperature}
        </span>
      </div>
    </div>
  )
}
