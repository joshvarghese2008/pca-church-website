import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import localFont from "next/font/local";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: '%s | Pentecostal Christian Assembly',
    default: 'Pentecostal Christian Assembly',
  },
  description:
    "PCA Church is a Malayalam church located in Ingleburn, New South Wales",
  keywords: [
    "PCA Church",
    "PCA Church Sydney",
    "Pentecostal Christian Assembly",
    "Malayalam Church",
    "Ingleburn",
    "New South Wales",
    "Christianity",
    "Faith",
    "Community",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "favicon.ico",
    },
  },
};

const monotypeCorsiva = localFont({
  src: "../public/customfonts/monotype-corsiva.ttf",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={monotypeCorsiva.className}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Toaster />
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
