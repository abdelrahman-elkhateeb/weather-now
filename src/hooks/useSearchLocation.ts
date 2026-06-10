import { useGeoCode } from "@/services/useGeoCode";
import { useWeather } from "@/services/useWeather";
import type { ICity, ILocalCity } from "@/types/cityTypes";
import { useSearchStore } from "@/stores/useSearchStore";
import { useMemo } from "react";

export function useSearchLocation() {
  const {
    cityName,
    setCityName,
    isSelected,
    setIsSelected,
    selectedCoordinates,
    setSelectedCoordinates,
    reset,
  } = useSearchStore();

  // GEO API
  const { data: location } = useGeoCode(cityName, isSelected);

  // WEATHER API (server state)
  const { data: cityData, isPending: isCityDataLoading } = useWeather(
    selectedCoordinates?.lat,
    selectedCoordinates?.lng
  );

  // normalize geo results
  const citiesData: ILocalCity[] = useMemo(() => {
    return (
      location?.map((city: ICity) => ({
        name: city.name,
        country: city.country,
        lat: city.latitude,
        lng: city.longitude,
      })) || []
    );
  }, [location]);

  function handleSearchSubmit() {
    if (!selectedCoordinates) return;
    setIsSelected(true);
  }

  function handleCitySelect(city: ILocalCity) {
    setSelectedCoordinates({ lat: city.lat, lng: city.lng });
    setCityName(`${city.name}, ${city.country}`);
    setIsSelected(true);
  }

  function handleReset() {
    reset();
  }

  return {
    // state
    cityName,
    isSelected,
    citiesData,

    // actions
    setCityName,
    handleSearchSubmit,
    handleCitySelect,
    handleReset,

    // server state
    cityData,
    isCityDataLoading,
  };
}