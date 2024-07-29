"use client";

import { SidebarToggle } from "@/lib/store/store";
import { MouseEvent } from "react";

export function NavToggle() {
  const { sidebarOpen, setSidebarOpen } = SidebarToggle();
  const handleClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <button
      type="button"
      className="navToggle md:hidden"
      onClick={handleClick}
      aria-label="Toggle Navigation"
    >
      <span className={` bg-azure ${sidebarOpen && "active"}`}></span>
      <span className={` bg-azure ${sidebarOpen && "active"}`}></span>
      <span className={` bg-azure ${sidebarOpen && "active"}`}></span>
    </button>
  );
}
