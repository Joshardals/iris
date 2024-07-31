"use client";
import { ButtonInput } from "@/app/_components/FormInput";
import Link from "next/link";
import { sidebarlinks } from "@/lib/data";
import { SidebarToggle } from "@/lib/store/store";
import { signOutUser } from "@/lib/actions/auth/auth.actions";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function SidebarLinks() {
  const [loading, setLoading] = useState<boolean>(false);
  const pathname = usePathname();
  const { sidebarOpen, setSidebarOpen } = SidebarToggle();

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

  const closeSidebar = () => {
    if (sidebarOpen) {
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
              onClick={closeSidebar}
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
          <div onClick={handleClick}>
            <ButtonInput loading={loading} label="Logout" />
          </div>
        </li>
      </ul>
    </nav>
  );
}
