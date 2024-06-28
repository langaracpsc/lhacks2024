import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Langara Hacks! 2024",
  description: "Website for Langara Hacks! 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script defer data-domain="lhacks.langaracs.ca" src="https://plausible.langaracs.tech/js/script.js"></script>
      </head>
      <body className={inter.className + " bg-black text-white"}>{children}</body>
    </html>
  );
}
