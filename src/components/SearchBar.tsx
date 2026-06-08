import { Button } from "./ui/button";
import { Field } from "./ui/field";
import { Input } from "./ui/input";

export default function SearchBar() {
  return (
    <Field orientation="horizontal">
      <Input type="search" placeholder="Search for a place..." />
      <Button>Search</Button>
    </Field>
  )
}
