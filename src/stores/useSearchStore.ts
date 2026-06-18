import type { SearchStore } from "@/types/searchStoreTypes";
import { create } from "zustand";

export const useSearchStore = create<SearchStore>((set) => ({
  cityName: "",
  selectedCoordinates: null,

  unit: "metric",
  overrides: {},

  setCityName: (name) => set({ cityName: name }),
  setSelectedCoordinates: (coords) => set({ selectedCoordinates: coords }),

  setUnit: (unit) => set({ unit }),
  setOverride: (key, value) =>
    set((state) => ({
      overrides: {
        ...state.overrides,
        [key]: value,
      },
    })),


  reset: () =>
    set({
      cityName: "",
      selectedCoordinates: null,
      unit: "metric",
      overrides: {},
    }),
}));