import { useMutation } from "@tanstack/react-query";
import { getWeatherData } from "./weatherApi";

export function useWeather() {

  const { mutate, data, isPending, error } = useMutation({
    mutationFn: ({ lat, lng }: { lat: number; lng: number }) => getWeatherData(lat, lng),
  })

  return { fetchWeatherData: mutate, isPending, data, error }
}