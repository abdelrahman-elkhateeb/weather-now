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
      <Field orientation="horizontal">
        <ComboboxInput
          name="cityName"
          value={cityName}
          onChange={(e) => {
            setCityName(e.target.value);
            setIsSelected(false);
          }}
          type="search"
          placeholder="Search for a place..."
        />

        <Button type="button" onClick={handleSearchSubmit}>
          Search
        </Button>
      </Field>

      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(city: ILocalCity) => {
            const itemLabel = `${city.name}, ${city.country}`;

            return (
              <ComboboxItem
                key={`${city.lat}-${city.lng}`}
                value={itemLabel}
                onClick={() => handleCitySelect(city)}
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