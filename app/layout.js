import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import localFont from 'next/font/local'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Footer from "./components/Footer";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next'

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
    default: "Malayalam - Pentecostal Christian Assembly, Ingleburn",
  },
  description: "Malaylam Pentecostal Church in Ingleburn, NSW",

};

const monotypeCorsiva = localFont({
  src: '../public/customfonts/monotype-corsiva.ttf'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={monotypeCorsiva.className}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar/>
        {children}
        <Toaster />
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
