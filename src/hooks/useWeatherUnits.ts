import { useSearchStore } from "@/stores/useSearchStore";
import { resolveUnit } from "@/utils/resolveUnits";
import {
  convertTemperature,
  convertWind,
  convertPrecipitation,
} from "@/utils/converter";

export function useWeatherUnits() {
  const { unit, overrides } = useSearchStore();

  const temperatureUnit = resolveUnit("temperature", unit, overrides);
  const windUnit = resolveUnit("wind", unit, overrides);
  const precipitationUnit = resolveUnit("precipitation", unit, overrides);

  return {
    formatTemperature: (v: number) =>
      convertTemperature(v, temperatureUnit),

    formatWind: (v: number) =>
      convertWind(v, windUnit),

    formatPrecipitation: (v: number) =>
      convertPrecipitation(v, precipitationUnit),

    units: {
      temperatureUnit,
      windUnit,
      precipitationUnit,
    },
  };
}