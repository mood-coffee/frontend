import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

import { CartProvider } from "@/context/CartContext";
import { KvkkBanner } from "@/components/KvkkBanner";
import { ConditionalLayout } from "@/components/layout/ConditionalLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mood Coffee",
  description: "Crafting exceptional coffee experiences",
  icons: {
    icon: [
      { url: '/favicon/16x16.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/favicon/32x32.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon/120x120.ico', sizes: '120x120', type: 'image/x-icon' },
      { url: '/favicon/512x512.ico', sizes: '512x512', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <CartProvider>
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
          <KvkkBanner />
        </CartProvider>
      </body>
    </html>
  );
}
