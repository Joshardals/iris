import { Header } from "../_components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iris Investment | Sign Up",
  description: "Create your login for Iris Investment",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative">
      <Header />
      <div>{children}</div>
    </main>
  );
}
