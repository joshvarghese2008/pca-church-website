// "use client";

// import Image from "next/image";
// import styles from "./page.module.css";
// import Script from "next/script";
// import Head from "next/head";
// import { useRef } from "react";
// import { motion } from "motion/react";
// import { MotionImage } from "./components/MotionImage";
// import Link from "next/link";
// import { OpenInNew, OpenInNewOffRounded, OpenInNewOutlined, OpenInNewRounded } from "@mui/icons-material";

import LatestPost from './components/LatestPost'
import HomeContent from './HomeContent'

// import { supabase } from "./components/utils/supabase";

export default function Home() {
  // const { data: notes } = await supabase.from("sermons").select();

  // console.log(notes.at(-1).title);

  const organisationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: "https://www.pcachurchsydney.com/",
    sameAs: [
      `https://www.facebook.com/pcasydney`,
    ],
    logo: "https://www.pcachurchsydney.com/images/churchlogo.png",
    name: "Pentecostal Christian Assembly",
    alternateName: "PCA Church",
    description:
      "Pentecostal Christian Assembly (PCA Church) is a Malayalam church located in Ingleburn (south-west of Sydney), Australia. We are a growing church that seeks to be a place where individuals and families can come together to grow in faith and deepen their understanding of Jesus Christ.",
    email: "pastor@pcachurchsydney.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7/79 Williamson Rd",
      addressLocality: "Ingleburn",
      addressCountry: "AU",
      addressRegion: "NSW",
      postalCode: "2565",
    },
    telephone: "+61423358312",
  };

  // const transition = {
  //   duration: 0.5,
  //   delay: 1,
  // };

  // const aboutRef = useRef(null);

  // const handleScrollToAbout = () => {
  //   if (!aboutRef.current) return;
  //   aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  //   // focus after a short delay so assistive tech lands on the section after scroll
  //   window.setTimeout(() => {
  //     aboutRef.current?.focus();
  //   }, 600);
  // };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationStructuredData),
        }}
      />
      <HomeContent />
      <LatestPost />
    </>
  );
}
