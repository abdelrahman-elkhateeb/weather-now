import DropDownMenuNav from "./DropDownMenuNav";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="flex justify-between pt-5">
      <Logo />
      <DropDownMenuNav />
    </nav>
  )
}
