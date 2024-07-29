import { Logo } from "@/components/Logo";
import { NavToggle } from "@/components/NavToggle";

export function Header() {
  return (
    <div>
      <div className="p-5 flex items-center justify-between max-w-[1200px] mx-auto">
        <Logo />

        <div className=" max-h-5 pt-1">
          <NavToggle />
        </div>
      </div>
    </div>
  );
}
