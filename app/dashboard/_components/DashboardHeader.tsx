import { Logo } from "@/components/Logo";
import { NavToggle } from "@/components/NavToggle";

export function DashboardHeader() {
  return (
    <header className="fixed z-20 bg-primary w-full text-secondary lg:hidden p-5 flex items-center justify-between">
      <Logo />
      <div className="pt-1 max-h-5">
        <NavToggle />
      </div>
    </header>
  );
}
