import type { MeasurementUnit } from "@/types/searchStoreTypes";

export function convertTemperature(value: number, unit: MeasurementUnit) {
  return unit === "imperial"
    ? (value * 9) / 5 + 32
    : value;
}

export function convertWind(value: number, unit: MeasurementUnit) {
  return unit === "imperial"
    ? value * 0.621371
    : value;
}

export function convertPrecipitation(value: number, unit: MeasurementUnit) {
  return unit === "imperial"
    ? value * 0.0393701
    : value;
}