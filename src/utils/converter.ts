import type { MeasurementUnit } from "@/types/searchStoreTypes";

export function convertTemperature(value: number, unit: MeasurementUnit) {
  return Math.round((unit === "imperial" ? (value * 9) / 5 + 32 : value) * 100) / 100;
}

export function convertWind(value: number, unit: MeasurementUnit) {
  return Math.round((unit === "imperial" ? value * 0.621371 : value) * 100) / 100;
}

export function convertPrecipitation(value: number, unit: MeasurementUnit) {
  return Math.round((unit === "imperial" ? value * 0.0393701 : value) * 100) / 100;
}