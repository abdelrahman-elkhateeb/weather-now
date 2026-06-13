import type { MeasurementUnit, UnitOverrides } from "@/types/searchStoreTypes";

export function resolveUnit(
  type: keyof UnitOverrides,
  global: MeasurementUnit,
  overrides: UnitOverrides
): MeasurementUnit {
  return overrides[type] ?? global;
}