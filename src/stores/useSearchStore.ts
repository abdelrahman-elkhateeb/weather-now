import type { SearchStore } from "@/types/searchStoreTypes";
import { create } from "zustand";

export const useSearchStore = create<SearchStore>((set) => ({
  cityName: "",
  isSelected: false,
  selectedCoordinates: null,

  unit: "metric",
  overrides: {},

  setCityName: (name) => set({ cityName: name }),
  setIsSelected: (value) => set({ isSelected: value }),
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
      isSelected: false,
      selectedCoordinates: null,
      unit: "metric",
      overrides: {},
    }),
}));