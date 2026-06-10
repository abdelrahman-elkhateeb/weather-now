import { create } from "zustand";

type Coordinates = { lat: number; lng: number } | null;

type SearchStore = {
  cityName: string;
  isSelected: boolean;

  selectedCoordinates: Coordinates;

  setCityName: (name: string) => void;
  setIsSelected: (value: boolean) => void;
  setSelectedCoordinates: (coords: Coordinates) => void;

  reset: () => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  cityName: "",
  isSelected: false,
  selectedCoordinates: null,

  setCityName: (name) => set({ cityName: name }),
  setIsSelected: (value) => set({ isSelected: value }),
  setSelectedCoordinates: (coords) => set({ selectedCoordinates: coords }),

  reset: () =>
    set({
      cityName: "",
      isSelected: false,
      selectedCoordinates: null,
    }),
}));