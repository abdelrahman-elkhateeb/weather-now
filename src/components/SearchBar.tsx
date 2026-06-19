import { useSearchLocation } from "@/hooks/useSearchLocation";
import type { GeoCity } from "@/types/searchStoreTypes";
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

export default function SearchBar() {
  const {
    cityName,
    setCityName,
    citiesData,
    handleSearchSubmit,
    handleCitySelect,
  } = useSearchLocation();


  return (
    <Combobox items={citiesData}>
      <Field orientation="horizontal" className="flex flex-col md:flex-row md:justify-center">
        <ComboboxInput
          name="cityName"
          value={cityName}
          onChange={(e) => {
            setCityName(e.target.value);
          }}
          type="search"
          placeholder={` Search for a place...`}
          className="md:w-1/2 w-full rounded-md bg-neutral-800 border-0"
        />

        <Button
          type="button"
          onClick={handleSearchSubmit}
          className="bg-blue-500 text-white rounded-md w-full md:w-fit"
        >
          Search
        </Button>
      </Field>

      <ComboboxContent className="bg-neutral-700 rounded-md">
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(city: GeoCity) => {
            const itemLabel = `${city.name}, ${city.country}`;
            
            return (
              <ComboboxItem
                key={`${city.latitude}-${city.longitude}`}
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