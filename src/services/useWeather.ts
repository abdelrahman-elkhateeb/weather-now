import { useQuery } from "@tanstack/react-query";
import { getWeatherData } from "./weatherApi";

export function useWeather(lat?: number, lng?: number) {
  return useQuery({
    queryKey: ["weather", lat, lng],
    queryFn: () => getWeatherData(lat!, lng!),
    enabled: !!lat && !!lng,
    staleTime: 60000
  });
}