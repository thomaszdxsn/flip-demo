import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FLIP Demo",
  description: "Explaining the FLIP/Framer-Motion/View-Transition technique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="p-[20px]">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
