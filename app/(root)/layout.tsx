import { Header } from "../_components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iris Investment | Login",
  description: "Create your login for Iris Investment",
  openGraph: {
    images: "https://i.ibb.co/qyxDtDN/localhost-3000.png",
  },
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="relative">{children}</main>
    </>
  );
}
