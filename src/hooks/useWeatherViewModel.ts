import { format } from "date-fns";

import { useWeather } from "@/services/useWeather";
import { useSearchStore } from "@/stores/useSearchStore";
import { weatherIconMap } from "@/types/weatherIconMapTypes";
import { mapWeatherCode } from "@/utils/weatherCodeMap";

export function useWeatherViewModel() {
  const { selectedCoordinates, cityName } = useSearchStore();

  const { data, isPending } = useWeather(
    selectedCoordinates?.lat,
    selectedCoordinates?.lng
  );

  const resolveWeather = (code?: number) => {
    const condition =
      code !== undefined ? mapWeatherCode(code) : "sunny";

    return {
      icon: weatherIconMap[condition],
    };
  };

  const current = data?.current
    ? (() => {
      const { icon } = resolveWeather(
        data.current.weather_code
      );

      return {
        cityName,
        date: format(
          new Date(data.current.time),
          "EEEE, MMM d, yyyy"
        ),

        temperature: Math.round(data.current.temperature_2m),
        feelsLike: Math.round(data.current.apparent_temperature),
        humidity: data.current.relative_humidity_2m,
        wind: data.current.wind_speed_10m,
        precipitation: data.current.precipitation,

        icon,
      };
    })()
    : null;

  const daily = data?.daily
    ? data.daily.time.map((time: string, index: number) => {
      const { icon } = resolveWeather(
        data.daily.weather_code[index]
      );

      return {
        dayName: format(new Date(time), "EEE"),
        minTemp: data.daily.temperature_2m_min[index],
        maxTemp: data.daily.temperature_2m_max[index],
        icon,
      };
    })
    : [];

  const hourly = data?.hourly
    ? data.hourly.time.slice(0, 7).map((time: string, index: number) => {
      const { icon } = resolveWeather(
        data.hourly.weather_code[index]
      );

      return {
        time: format(new Date(time), "HH:mm"),
        temperature:
          data.hourly.temperature_2m[index],
        icon,
      };
    })
    : [];

  return {
    current,
    daily,
    hourly,
    isLoading: isPending,
  };
}