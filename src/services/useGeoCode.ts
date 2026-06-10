import { useQuery } from "@tanstack/react-query";
import { getCoordinates } from "./weatherApi";
import { useDebounce } from "@/hooks/useDebounce";

export function useGeoCode(cityName: string, isSelected: boolean) {
  const debouncedCityName = useDebounce(cityName, 500);

  const enabled =
    debouncedCityName.trim().length >= 3 && !isSelected;

  return useQuery({
    queryKey: ["geocode", debouncedCityName],
    queryFn: () => getCoordinates(debouncedCityName),
    enabled,
  });
}