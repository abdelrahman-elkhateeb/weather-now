export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type MeasurementUnit = "metric" | "imperial";

export type UnitOverrides = {
  temperature?: MeasurementUnit;
  wind?: MeasurementUnit;
  precipitation?: MeasurementUnit;
};

export type GeoCity = {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
};

export type SearchStore = {
  cityName: string;

  selectedCity: GeoCity | null;
  searchedCity: GeoCity | null;

  unit: MeasurementUnit;
  overrides: UnitOverrides;

  setCityName: (name: string) => void;

  setSelectedCity: (city: GeoCity | null) => void;
  setSearchedCity: (city: GeoCity | null) => void;

  setUnit: (unit: MeasurementUnit) => void;
  setOverride: (key: keyof UnitOverrides, value?: MeasurementUnit) => void;

  clearSearch: () => void;
  reset: () => void;
};