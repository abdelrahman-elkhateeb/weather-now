import { format } from "date-fns";
import { mapWeatherCode } from "@/utils/weatherCodeMap";
import { weatherIconMap } from "@/types/weatherIconMapTypes";
import type { WeatherApiResponse } from "@/types/WeatherApiResponse";

export function normalizeWeather(data: WeatherApiResponse) {
  const resolveIcon = (code?: number) => {
    const condition = code !== undefined ? mapWeatherCode(code) : "sunny";
    return weatherIconMap[condition];
  };

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
      dayName: format(new Date(time), "EEE"),
      minTemp: data.daily.temperature_2m_min[i],
      maxTemp: data.daily.temperature_2m_max[i],
      icon: resolveIcon(data.daily.weather_code[i]),
    })),

    hourly: data.hourly.time.slice(0, 7).map((time: string, i: number) => ({
      time: format(new Date(time), "HH:mm"),
      temperature: data.hourly.temperature_2m[i],
      icon: resolveIcon(data.hourly.weather_code[i]),
    })),
  };
}