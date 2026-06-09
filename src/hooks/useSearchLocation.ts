import { useGeoCode } from "@/services/useGeoCode";
import { useWeather } from "@/services/useWeather";
import type { ICity, ILocalCity } from "@/types/cityTypes";
import { useState } from "react";

export function useSearchLocation() {
  const [cityName, setCityName] = useState("");
  const [coordinates, setCoordinates] = useState<{ lat: number, lng: number } | null>(null);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const { data: location } = useGeoCode(cityName, isSelected);
  const { fetchWeatherData } = useWeather();


  function handleSearchSubmit() {
    if (coordinates) {
      fetchWeatherData({ lat: coordinates.lat, lng: coordinates.lng });
    }
  }

  function handleCitySelect(city: ILocalCity) {
    const itemLabel = `${city.name}, ${city.country}`;
    setCoordinates({ lat: city.lat, lng: city.lng });
    setCityName(itemLabel);
    setIsSelected(true);
  }


  const citiesData: ILocalCity[] = location?.map((city: ICity) => ({
    name: city.name,
    country: city.country,
    lat: city.latitude,
    lng: city.longitude
  })) || [];


  return {
    cityName,
    setCityName,
    setIsSelected,
    citiesData,
    handleSearchSubmit,
    handleCitySelect,
  };
}