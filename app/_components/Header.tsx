import { Logo } from "@/components/Logo";
import { NavToggle } from "@/components/NavToggle";
import Link from "next/link";

export function Header() {
  return (
    <div>
      <div className="fixed bg-white left-0 w-full right-0 z-10 p-5 flex items-center justify-between max-w-[1200px] mx-auto">
        <Logo />

        {/* <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="py-2 px-4 rounded-md border border-transparent hover:border-emeraldGreen transition-all duration-300"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="capitalize bg-azure text-white py-2 px-4 rounded-md"
          >
            sign up
          </Link>
        </div> */}

        {/* <div className=" max-h-5 pt-1">
          <NavToggle />
        </div> */}
      </div>
    </div>
  );
}
