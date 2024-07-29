import { getCurrentUser } from "@/lib/actions/auth/auth.actions";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { MobileSideBar, SideBar } from "./_components/SideBar";
import { DashboardHeader } from "./_components/DashboardHeader";

export const metadata: Metadata = {
  title: "Iris Investment | Dashboard",
  //   description: "Create your login for Iris Investment",
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
      <main className="flex lg:space-x-[20rem]">
        <SideBar />
        <MobileSideBar />
        <div className="p-5 flex-1 max-lg:mt-[4.7rem]">{children}</div>
      </main>
    </>
  );
}
