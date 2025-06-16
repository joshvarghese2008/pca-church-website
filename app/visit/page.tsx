import VisitForm from "./form";
import styles from "./page.module.css";
import { Metadata } from "next";
import { motion } from "motion/react";
import VisitContent from "./visitContent";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Visit",
  description:
    "Please feel free this Sunday to visit our church and join us for worship. Our service starts at 9 AM",
  keywords: ["visit", "church", "worship", "service", "Sunday"],
  openGraph: {
    title: "Visit",
    description:
      "Please feel free this Sunday to visit our church and join us for worship. Our service starts at 9 AM",
    url: "https://www.churchwebsite.com/visit",
    images: [
      {
        url: "https://pcachurchsydney.com/images/churchlogo.png",
        width: 800,
        height: 600,
        alt: "Church Logo",
      },
    ],
    siteName: "Church Website",
  },
};

export default function Visit() {
  return (
    <>
    <Head>
      <link
          rel="canonical"
          href="https://pcachurchsydney.com/visit"
          key="canonical"
        />
    </Head>
      <VisitContent />
    </>
  );
}
