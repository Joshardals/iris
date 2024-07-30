"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { sidebarlinks } from "@/lib/data";
import { signOutUser } from "@/lib/actions/auth/auth.actions";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SidebarToggle } from "@/lib/store/store";

export function SidebarLinks() {
  const [loading, setLoading] = useState<boolean>(false);
  const pathname = usePathname();
  const { setSidebarOpen } = SidebarToggle();

  const handleClick = async () => {
    try {
      setLoading(true);
      await signOutUser();
    } catch (error: any) {
      console.log(`Error: ${error.message}`);
    } finally {
      setLoading(false);
      setSidebarOpen(false);
    }
  };
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
        <li>
          <Button
            className="w-full"
            variant={"iris"}
            disabled={loading}
            onClick={handleClick}
          >
            {loading ? "Logging Out..." : "Logout"}
          </Button>
        </li>
      </ul>
    </nav>
  );
}
