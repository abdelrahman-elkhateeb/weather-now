import { useGeoCode } from "@/services/useGeoCode";
import { useSearchStore } from "@/stores/useSearchStore";
import type { GeoCity } from "@/types/searchStoreTypes";

export function useSearchLocation() {
  const {
    cityName,
    setCityName,
    selectedCity,
    setSelectedCity,
    setSearchedCity,
    reset,
  } = useSearchStore();

  const { data: location } = useGeoCode(cityName);

  const citiesData = location || [];

  function handleCitySelect(city: GeoCity) {
    setSelectedCity(city);
    setCityName(`${city.name}, ${city.country}`);
  }

  function handleSearchSubmit() {
    if (!selectedCity) return;
    setSearchedCity(selectedCity);
  }

  function handleReset() {
    reset();
  }

  return {
    cityName,
    citiesData,
    setCityName,
    handleCitySelect,
    handleSearchSubmit,
    handleReset,
  };
}