import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "./fonts";

export const metadata: Metadata = {
  title: "Home | Iris Investment",
  description:
    "Iris Investment website offers a homepage that serves as a comprehensive guide to navigating the world of financial and emotional investments.",
  openGraph: {
    images: "https://i.ibb.co/9vsp0XZ/register-Online.jpg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: "0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>{children}</body>
    </html>
  );
}
