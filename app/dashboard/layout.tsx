import { getCurrentUser } from "@/lib/actions/auth/auth.actions";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { MobileSideBar, SideBar } from "./_components/SideBar";
import { DashboardHeader } from "./_components/DashboardHeader";

export const metadata: Metadata = {
  title: "Iris Investment | Dashboard",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();
  if (!user) redirect("/");

  return (
    <>
      <DashboardHeader />
      <main className="flex md:space-x-[20rem]">
        <SideBar />
        <MobileSideBar />
        <div className="flex-1 max-md:mt-[4.7rem] md:p-5 pb-5 px-5">
          {children}
        </div>
      </main>
    </>
  );
}
