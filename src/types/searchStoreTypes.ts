export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type GeoCity = {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
};

export type MeasurementUnit = "metric" | "imperial";

export type WeatherUnits = {
  temperature: MeasurementUnit;
  wind: MeasurementUnit;
  precipitation: MeasurementUnit;
};

export type SearchStore = {
  cityName: string;

  selectedCity: GeoCity | null;
  searchedCity: GeoCity | null;

  units: WeatherUnits;

  setCityName: (name: string) => void;

  setSelectedCity: (city: GeoCity | null) => void;
  setSearchedCity: (city: GeoCity | null) => void;

  setAllUnits: (unit: MeasurementUnit) => void;
  setUnit: (key: keyof WeatherUnits, unit: MeasurementUnit) => void;
  toggleAllUnits: () => void;

  clearSearch: () => void;
  reset: () => void;
};