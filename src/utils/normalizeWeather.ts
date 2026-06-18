import { format } from "date-fns";
import { mapWeatherCode } from "@/utils/weatherCodeMap";
import { weatherIconMap } from "@/types/weatherIconMapTypes";
import type { WeatherApiResponse } from "@/types/WeatherApiResponse";

export function normalizeWeather(data: WeatherApiResponse) {
  const resolveIcon = (code?: number) => {
    const condition = code !== undefined ? mapWeatherCode(code) : "sunny";
    return weatherIconMap[condition];
  };

  const hourlyByDay = data.hourly.time.reduce((acc, time, i) => {
    const date = new Date(time);

    const dayKey = format(date, "EEEE").toLowerCase();
    const dayLabel = format(date, "EEEE");

    if (!acc[dayKey]) {
      acc[dayKey] = {
        label: dayLabel,
        hours: [],
      };
    }

    acc[dayKey].hours.push({
      time: format(date, "hh:mm a"),
      temperature: data.hourly.temperature_2m[i],
      icon: resolveIcon(data.hourly.weather_code[i]),
    });

    return acc;
  }, {} as Record<string, {
    label: string;
    hours: {
      time: string;
      temperature: number;
      icon: string;
    }[];
  }>);

  return {
    current: {
      time: data.current.time,
      temperature: data.current.temperature_2m,
      feelsLike: data.current.apparent_temperature,
      humidity: data.current.relative_humidity_2m,
      wind: data.current.wind_speed_10m,
      precipitation: data.current.precipitation,
      icon: resolveIcon(data.current.weather_code),
    },

    daily: data.daily.time.map((time: string, i: number) => ({
      dayKey: format(new Date(time), "EEEE").toLowerCase(),
      dayName: format(new Date(time), "EEE"),
      fullDayName: format(new Date(time), "EEEE"),
      minTemp: data.daily.temperature_2m_min[i],
      maxTemp: data.daily.temperature_2m_max[i],
      icon: resolveIcon(data.daily.weather_code[i]),
    })),

    hourlyByDay,
  };
}