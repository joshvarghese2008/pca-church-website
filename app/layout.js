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
    "PCA Church is a Malayalam Pentecostal Church located in Ingleburn (south-west of Sydney), Australia. We are a community of believers who gather to worship, pray, and grow in faith together. Join us for services, Bible studies, and fellowship.",
  keywords: [
    "Church near me",
    "Malayalam Church",
    "PCA Church",
    "Pentecostal Christian Assembly",
    "PCA Church Ingleburn",
    "PCA Church Sydney",
    "Malayalam Church Ingleburn",
    "Malayalam Church Sydney",
    "Malayalam Church near me",
    "Pentecostal",
    "Faith",
    "Christianity",
    "Community",
    "Worship",
    "Prayer",
    "Bible Study",
    "Fellowship",
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
