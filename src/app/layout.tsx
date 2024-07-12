import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Script from 'next/script'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Langara Hacks! 2024",
  description: "Langara Hacks is a two day programming competition targeted towards beginners held in person at Langara College!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head> <Script defer data-domain="lhacks.langaracs.ca" src="https://plausible.langaracs.ca/js/script.js" /></head>
      <body className={inter.className + " bg-black text-white"}>{children}</body>
    </html>
  );
}
