import { useSearchStore } from "@/stores/useSearchStore";
import { useWeather } from "@/services/useWeather";
import { mapWeatherCode } from "@/utils/weatherCodeMap";
import { weatherIconMap } from "@/types/weatherIconMap";
import { format } from "date-fns";
import { useMemo } from "react";

export function useWeatherViewModel() {
  const { selectedCoordinates, cityName } = useSearchStore();

  const { data, isPending } = useWeather(
    selectedCoordinates?.lat,
    selectedCoordinates?.lng
  );

  const resolveWeather = (code?: number) => {
    if (code === undefined) return { condition: "sunny", icon: "" };

    const condition = mapWeatherCode(code);
    return {
      condition,
      icon: weatherIconMap[condition],
    };
  };

  const current = useMemo(() => {
    if (!data?.current) return null;

    const { condition, icon } = resolveWeather(
      data.current.weather_code
    );

    return {
      cityName,
      date: data.current.time
        ? format(new Date(data.current.time), "EEEE, MMM d, yyyy")
        : "",

      temperature: Math.round(data.current.temperature_2m),
      feelsLike: Math.round(data.current.apparent_temperature),
      humidity: data.current.relative_humidity_2m,
      wind: data.current.wind_speed_10m,
      precipitation: data.current.precipitation,

      condition,
      icon,
    };
  }, [data, cityName]);

  const daily = useMemo(() => {
    if (!data?.daily) return [];

    return data.daily.time.map((time: Date, index: number) => {
      const { condition, icon } = resolveWeather(
        data.daily.weather_code[index]
      );

      return {
        dayName: format(new Date(time), "EEE"),
        minTemp: data.daily.temperature_2m_min[index],
        maxTemp: data.daily.temperature_2m_max[index],
        condition,
        icon,
      };
    });
  }, [data]);

  const hourly = useMemo(() => {
    if (!data?.hourly) return [];

    return data.hourly.time.map((time: Date, index: number) => {
      const { condition, icon } = resolveWeather(
        data.hourly.weather_code[index]
      );

      return {
        time: format(new Date(time), "HH:mm"),
        temperature: Math.round(data.hourly.temperature_2m[index]),
        condition,
        icon,
      };
    });
  }, [data]);

  return {
    current,
    daily,
    hourly,
    isLoading: isPending,
  };
}