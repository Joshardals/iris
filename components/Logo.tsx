"use client";
import Image from "next/image";
import { SidebarToggle } from "@/lib/store/store";

export function Logo() {
  const { sidebarOpen } = SidebarToggle();
  return (
    <div className="flex items-center space-x-2 cursor-pointer select-none">
      <Image
        alt="Logo"
        className=" size-8"
        height={50}
        src="/assets/Logo.png"
        width={50}
      />
      <h2
        className={`font-semibold text-lg font-sans ${
          sidebarOpen && "text-snow"
        }`}
      >
        Iris Investment
      </h2>
    </div>
  );
}
