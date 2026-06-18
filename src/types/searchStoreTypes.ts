export type Coordinates = { lat: number; lng: number } | null;

export type MeasurementUnit = "metric" | "imperial";

export type UnitOverrides = {
  temperature?: MeasurementUnit;
  wind?: MeasurementUnit;
  precipitation?: MeasurementUnit;
};

export type SearchStore = {
  cityName: string;

  selectedCoordinates: Coordinates;

  unit: MeasurementUnit;
  overrides: UnitOverrides;

  setCityName: (name: string) => void;
  setSelectedCoordinates: (coords: Coordinates) => void;

  setUnit: (unit: MeasurementUnit) => void;
  setOverride: (key: keyof UnitOverrides, value?: MeasurementUnit) => void;


  reset: () => void;
}