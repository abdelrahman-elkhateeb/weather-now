import type { SearchStore } from "@/types/searchStoreTypes";
import { create } from "zustand";

const metricUnits = {
  temperature: "metric",
  wind: "metric",
  precipitation: "metric",
} as const;

const imperialUnits = {
  temperature: "imperial",
  wind: "imperial",
  precipitation: "imperial",
} as const;

export const useSearchStore = create<SearchStore>((set, get) => ({
  cityName: "",

  selectedCity: null,
  searchedCity: null,

  units: metricUnits,

  setCityName: (name) => set({ cityName: name }),
  setSelectedCity: (city) => set({ selectedCity: city }),
  setSearchedCity: (city) => set({ searchedCity: city }),

  setAllUnits: (unit) =>
    set({
      units: unit === "metric" ? metricUnits : imperialUnits,
    }),
  toggleAllUnits: () => {
    const { units } = get();

    const isAllMetric = Object.values(units).every(
      (unit) => unit === "metric"
    );

    set({
      units: isAllMetric ? imperialUnits : metricUnits,
    });
  },

  setUnit: (key, unit) =>
    set((state) => ({
      units: {
        ...state.units,
        [key]: unit,
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
      units: metricUnits,
    }),
}));