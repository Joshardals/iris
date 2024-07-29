"use client";

import { sidebarlinks } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SidebarLinks() {
  const pathname = usePathname();

  return (
    <nav>
      {/* ${adminMobileOpen && "px-0"} */}
      <ul className={`space-y-4 px-5 `}>
        {sidebarlinks?.map((link) => {
          const { label, href, icon } = link;
          return (
            <li
              key={label}
              className={`${
                pathname == href && "bg-snow text-onyx"
              } py-2 px-5 hover:bg-snow hover:text-onyx
          transition-all duration-300 ease-linear rounded-md`}
              //   onClick={() => {
              //     if (adminMobileOpen) {
              //       setAdminMobileOpen(false);
              //     }
              //   }}
            >
              <Link href={href} className={`uppercase font-light`}>
                <div className=" flex items-center space-x-2">
                  <p>{icon}</p>
                  <p> {label}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
