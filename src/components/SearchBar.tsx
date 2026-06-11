import { useSearchLocation } from "@/hooks/useSearchLocation";
import { useSearchStore } from "@/stores/useSearchStore";
import type { ILocalCity } from "@/types/cityTypes";
import { Button } from "./ui/button";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList
} from "./ui/combobox";
import { Field } from "./ui/field";
import { Search } from "lucide-react";

export default function SearchBar() {
  const {
    cityName,
    setCityName,
    citiesData,
    handleSearchSubmit,
    handleCitySelect,
  } = useSearchLocation();

  const setIsSelected = useSearchStore((s) => s.setIsSelected);

  return (
    <Combobox items={citiesData}>
      <Field orientation="horizontal" className="flex justify-center">
        <ComboboxInput
          name="cityName"
          value={cityName}
          onChange={(e) => {
            setCityName(e.target.value);
            setIsSelected(false);
          }}
          type="search"
          placeholder={` Search for a place...`}
          className="w-1/2 rounded-md bg-neutral-800 border-0"
        />

        <Button
          type="button"
          onClick={handleSearchSubmit}
          className="bg-blue-500 text-white rounded-md"
        >
          Search
        </Button>
      </Field>

      <ComboboxContent className="bg-neutral-700 rounded-md">
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(city: ILocalCity) => {
            const itemLabel = `${city.name}, ${city.country}`;

            return (
              <ComboboxItem
                key={`${city.lat}-${city.lng}`}
                value={itemLabel}
                onClick={() => handleCitySelect(city)}
                className="data-[highlighted]:bg-neutral-600 data-[highlighted]:outline data-[highlighted]:border-1 data-[highlighted]:border-neutral-500 rounded-md"
              >
                {itemLabel}
              </ComboboxItem>
            );
          }}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}