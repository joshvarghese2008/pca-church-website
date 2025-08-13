import styles from "./page.module.css";
import { motion } from "motion/react";
import GiveContent from "./giveContent";
import Head from "next/head";

export const metadata = {
  title: "Give",
  description:
    "Donation page of PCA Church | Currently we only allow giving in-person",
  keywords: [
    "PCA Church",
    "Pentecostal Christian Assembly",
    "Give",
    "Donation",
    "In Person Giving",
    "Church Donation",
    "Support Church",
  ],
  openGraph: {
    title: "Give",
    description:
      "Donation page of PCA Church | Currently we only allow giving in-person",
    url: "https://www.pcachurchsydney.com/give",
    siteName: "PCA Church",
    images: [
      {
        url: "https://www.pcachurchsydney.com/images/churchlogo.png",
        width: 800,
        height: 600,
        alt: "PCA Church Logo",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "favicon.ico",
  },
};

const transition = {
  duration: 0.5,
  delay: 1,
};

export default function Give() {
  return (
    <>
      <GiveContent />
    </>
  );
}
