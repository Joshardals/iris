import { getCurrentUser } from "@/lib/actions/auth/auth.actions";
import { Header } from "../_components/Header";
import { Metadata } from "next";
import { redirect } from "next/navigation";

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

  console.log(user);
  if (!user) redirect("/signup");
  return (
    <main className="relative">
      <div>{children}</div>
    </main>
  );
}
