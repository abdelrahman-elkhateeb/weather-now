import { useQuery } from "@tanstack/react-query";
import { getWeatherData } from "./weatherApi";

export function useWeather(lat: number | undefined, lng: number | undefined) {

  const { isPending, data, error } = useQuery({
    queryKey: ["weather", lat, lng],
    queryFn: () => getWeatherData(lat!, lng!),
    enabled: lat !== undefined && lng !== undefined
  })

  return { isPending, data, error }
}