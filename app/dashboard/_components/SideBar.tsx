"use client";
import { Logo } from "@/components/Logo";
import { NavToggle } from "@/components/NavToggle";
import { SidebarLinks } from "@/components/SidebarLinks";
import { SidebarToggle } from "@/lib/store/store";
import { useEffect } from "react";

export function SideBar() {
  return (
    <aside className="fixed bg-deepNavy text-white h-screen w-full md:w-[20rem] max-md:hidden">
      <div className="space-y-10">
        <div className="p-5 flex justify-center items-center">
          <Logo />
        </div>

        <SidebarLinks />
      </div>
    </aside>
  );
}

export function MobileSideBar() {
  const { sidebarOpen } = SidebarToggle();

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen]);

  return (
    <div
      className={`fixed top-0 left-0 min-h-screen bg-deepNavy text-snow md:hidden p-5 w-full
    transition-transform duration-700 z-30 space-y-8 ${
      sidebarOpen ? "-translate-x-0" : "translate-x-full"
    }`}
    >
      <div className="flex items-center justify-between">
        <Logo />
        <div className=" max-h-5 pt-1">
          <NavToggle />
        </div>
      </div>
      <div className={`${sidebarOpen ? "fadeIn" : "opacity-0"} `}>
        <SidebarLinks />
      </div>
    </div>
  );
}
