import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { HeaderClient } from "@/components/layout/HeaderClient";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";
import { KvkkBanner } from "@/components/KvkkBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mood Coffee",
  description: "Crafting exceptional coffee experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <HeaderClient />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <KvkkBanner />
        </CartProvider>
      </body>
    </html>
  );
}
