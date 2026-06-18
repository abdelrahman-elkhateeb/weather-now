import { useWeather } from "@/services/useWeather";
import { useSearchStore } from "@/stores/useSearchStore";
import { useWeatherUnits } from "./useWeatherUnits";

export function useWeatherViewModel() {
  const { searchedCity, cityName } = useSearchStore();
  const { formatTemperature, formatWind, formatPrecipitation } =
    useWeatherUnits();

  const { data, isPending } = useWeather(
    searchedCity?.latitude,
    searchedCity?.longitude
  );

  const current = data?.current
    ? {
      ...data.current,
      cityName,
      temperature: formatTemperature(data.current.temperature),
      feelsLike: formatTemperature(data.current.feelsLike),
      wind: formatWind(data.current.wind),
      precipitation: formatPrecipitation(data.current.precipitation),
    }
    : null;

  const daily = data?.daily
    ? data.daily.map((day) => ({
      ...day,
      minTemp: formatTemperature(day.minTemp),
      maxTemp: formatTemperature(day.maxTemp),
    }))
    : [];


  return {
    current,
    daily,
    hourlyByDay: data?.hourlyByDay ?? {},
    isLoading: isPending,
  };
}