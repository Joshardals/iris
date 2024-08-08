import { Logo } from "@/components/Logo";
import { NavToggle } from "@/components/NavToggle";

export function DashboardHeader() {
  return (
    <header
      className={`fixed z-30 w-full md:hidden p-5 flex items-center justify-between bg-white`}
    >
      <Logo />
      <div className="pt-1 max-h-5">
        <NavToggle />
      </div>
    </header>
  );
}
