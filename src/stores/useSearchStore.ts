import type { SearchStore } from "@/types/searchStoreTypes";
import { create } from "zustand";

export const useSearchStore = create<SearchStore>((set) => ({
  cityName: "",

  selectedCity: null,
  searchedCity: null,

  unit: "metric",
  overrides: {},

  setCityName: (name) => set({ cityName: name }),

  setSelectedCity: (city) =>
    set({ selectedCity: city }),

  setSearchedCity: (city) =>
    set({ searchedCity: city }),

  setUnit: (unit) => set({ unit }),

  setOverride: (key, value) =>
    set((state) => ({
      overrides: {
        ...state.overrides,
        [key]: value,
      },
    })),


  clearSearch: () =>
    set({
      cityName: "",
      selectedCity: null,
      searchedCity: null,
    }),


  reset: () =>
    set({
      cityName: "",
      selectedCity: null,
      searchedCity: null,
      unit: "metric",
      overrides: {},
    }),
}));