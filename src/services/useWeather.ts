import { useQuery } from "@tanstack/react-query";
import { getWeatherData } from "./weatherApi";

export function useWeather(latitude?: number, longitude?: number) {
  return useQuery({
    queryKey: ["weather", latitude, longitude],
    queryFn: () => getWeatherData(latitude!, longitude!),
    enabled: !!latitude && !!longitude,
    staleTime: 60000,
  });
}