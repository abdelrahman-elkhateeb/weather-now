import type { MeasurementUnit } from "@/types/searchStoreTypes";

export function getTemperatureSymbol(
  unit: MeasurementUnit
) {
  return unit === "metric" ? "°C" : "°F";
}

export function getWindSymbol(
  unit: MeasurementUnit
) {
  return unit === "metric" ? "km/h" : "mph";
}

export function getPrecipitationSymbol(
  unit: MeasurementUnit
) {
  return unit === "metric" ? "mm" : "in";
}