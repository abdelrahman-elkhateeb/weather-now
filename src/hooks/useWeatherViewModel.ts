import { useWeather } from "@/services/useWeather";
import { useSearchStore } from "@/stores/useSearchStore";
import {
  convertPrecipitation,
  convertTemperature,
  convertWind,
} from "@/utils/converter";
import { resolveUnit } from "@/utils/resolveUnits";

export function useWeatherViewModel() {
  const { searchedCity, unit, overrides, cityName } = useSearchStore();

  const { data, isPending } = useWeather(
    searchedCity?.latitude,
    searchedCity?.longitude
  );

  const temperatureUnit = resolveUnit("temperature", unit, overrides);
  const windUnit = resolveUnit("wind", unit, overrides);
  const precipitationUnit = resolveUnit("precipitation", unit, overrides);

  const current = data?.current
    ? {
      ...data.current,
      cityName,
      temperature: convertTemperature(data.current.temperature, temperatureUnit),
      feelsLike: convertTemperature(data.current.feelsLike, temperatureUnit),
      wind: convertWind(data.current.wind, windUnit),
      precipitation: convertPrecipitation(data.current.precipitation, precipitationUnit),
    }
    : null;

  return {
    current,
    daily: data?.daily ?? [],
    hourly: data?.hourly ?? [],
    isLoading: isPending,
  };
}