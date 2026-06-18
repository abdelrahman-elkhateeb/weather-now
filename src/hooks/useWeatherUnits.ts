import { useSearchStore } from "@/stores/useSearchStore";
import {
  convertTemperature,
  convertWind,
  convertPrecipitation,
} from "@/utils/converter";

export function useWeatherUnits() {
  const units = useSearchStore((state) => state.units);

  return {
    formatTemperature: (value: number) =>
      convertTemperature(value, units.temperature),

    formatWind: (value: number) =>
      convertWind(value, units.wind),

    formatPrecipitation: (value: number) =>
      convertPrecipitation(value, units.precipitation),

    labels: {
      temperature: units.temperature === "imperial" ? "°F" : "°C",
      wind: units.wind === "imperial" ? "mph" : "km/h",
      precipitation: units.precipitation === "imperial" ? "in" : "mm",
    },

    units,
  };
}