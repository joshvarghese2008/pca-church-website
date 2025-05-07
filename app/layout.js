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
    "Malayalam Church near me",
    "Malayalam Church",
    "Malayalam",
    "Malayalam Worship",
    "Pentecostal Church near me",
    "Pentecostal Church",
    "Pentecostal",
    "Pentecost",
    "Holy Spirit",
    "Holy-Spirit Church near me",
    "Spirit-filled Church",
    "Spirit-filled Church near me",
    "Spiritual Church near me",
    "Christian",
    "Christian Church",
    "Christian Worship",
    "Church near me",
    "Church",

    "Christian Assembly Pentecostal Church",
    "Pentecostal Church Australia",
    "Pentecostal Church NSW",
    "Pentecostal Church Ingleburn",

    "Sydney Pentecostal Fellowship",
    "SPF Church",
    "Shalom Christian Assembly",
    "SCA Church",
    "Biju Meneth",
    "SPWC",
    "Padstow Church",
    "Sydney Pentecostal Worship Centre",

    "Independant Church",
    "Church of God",
    "Church of God near me",
    "COG",
    "Assemblies of God",
    "AG Church",
    "AG Church near me",
    "IPC",
    "IPC near me",
    "Indian Pentecostal Churches near me",
    "Indian Pentecostal Church near me",
    
    "Babu Varghese",
    "Pentecostal Christian Assembly",
    "PCA",
    "PCA Church",
    "pca church",
    "pca"
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
