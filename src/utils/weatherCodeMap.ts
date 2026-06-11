import type { WeatherCondition } from "@/types/weatherIconMapTypes";

export function mapWeatherCode(code: number): WeatherCondition {
  if (code === 0) return "sunny";

  if (code === 1) return "sunny";
  if (code === 2) return "partlyCloud";
  if (code === 3) return "overcast";

  if (code >= 51 && code <= 67) return "drizzle";

  if (code >= 71 && code <= 77) return "snow";

  if (code >= 80 && code <= 82) return "rain";

  if (code >= 95) return "storm";

  return "fog";
}