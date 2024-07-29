"use client";

import { MouseEvent, useState } from "react";

export function NavToggle() {
  const [mobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const handleClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    setIsMobileNavOpen(!mobileNavOpen);
  };
  return (
    <button
      type="button"
      className="navToggle md:hidden"
      onClick={handleClick}
      aria-label="Toggle Navigation"
    >
      <span className={` bg-azure ${mobileNavOpen && "active"}`}></span>
      <span className={` bg-azure ${mobileNavOpen && "active"}`}></span>
      <span className={` bg-azure ${mobileNavOpen && "active"}`}></span>
    </button>
  );
}
