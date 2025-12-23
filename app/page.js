"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Script from "next/script";
import Head from "next/head";
import { useRef } from "react";
import { motion } from "motion/react";
import { MotionImage } from "./components/MotionImage";
import Link from "next/link";

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

  const transition = {
    duration: 0.5,
    delay: 1,
  };

  const aboutRef = useRef(null);

  const handleScrollToAbout = () => {
    if (!aboutRef.current) return;
    aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    // focus after a short delay so assistive tech lands on the section after scroll
    window.setTimeout(() => {
      aboutRef.current?.focus();
    }, 600);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationStructuredData),
        }}
      />
      <div className={styles.hero}>
        <MotionImage
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
            delay: transition.delay - 0.5
          }}
          src="/images/homehero.png"
          fill={true}
          alt="Image of PCA Church Worship"
          className={styles.herovideobg}
        />
        <div className={styles.herocentre}>
          <div />
          <div className={styles.herotitle}>
            <p className={styles.herowelcome}>Welcome to</p>
            <div className={styles.herochurchname}>
              <p className={styles.herochurchinitials}>PCA</p>
              <p className={styles.herochurch}>Church</p>
            </div>
          </div>
          <div className={styles.herotimings}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: transition.delay + 1.6,
                duration: transition.duration,
              }}
              className={styles.herotimingssundayservice}
            >
              <p className={styles.herotimingstitle}>Every Sunday at 9am</p>
              {/* <p className={styles.herotimingstime}>7/79 Williamson Road, Ingleburn, NSW 2565</p> */}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: transition.delay + 2,
                duration: transition.duration,
              }}
              viewport={{ once: true }}
              className={styles.herotimingssundayschool}
            >
              {/* <p className={styles.herotimingstitle}>Sunday School:</p> */}
              <Link className={styles.herotimingstime} href={'https://maps.google.com/maps/dir//Pentecostal+Christian+Assembly+(PCA+Church)+7%2F79+Williamson+Rd+Ingleburn+NSW+2565/@-33.9898947,150.8569674,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x1b4f1f06a6157f5:0x9d36ddade8924711'}>7/79 Williamson Road, Ingleburn, NSW 2565</Link>
            </motion.div>
          </div>
          <motion.button
            className={styles.heroscrollbutton}
            onClick={handleScrollToAbout}
            aria-label="Scroll to about section"
            initial={{ y: 0 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, repeatDelay: 2, duration: 0.5, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className={styles.heroscrolllabel}>Explore</span>
            <svg className={styles.heroscrollicon} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
              <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </div> 
      </div>
      {/* <section
        className={styles.addressSection}
        itemScope
        itemType="https://schema.org/Church"
      >
        <address
          className={styles.address}
          itemProp="address"
          itemScope
          itemType="https://schema.org/PostalAddress"
        >
          <span itemProp="streetAddress">7/79 Williamson Rd</span>,{" "}
          <span itemProp="addressLocality">Ingleburn</span>,{" "}
          <span itemProp="addressRegion">NSW</span>{" "}
          <span itemProp="postalCode">2565</span>,{" "}
          <span itemProp="addressCountry">Australia</span>
        </address>
      </section> */}
      <div ref={aboutRef} tabIndex={-1} className={styles.aboutcontainer}>
        <p className={styles.slogantext}>
          A place where Faith, Community, and Love grow together in service of
          our Lord and Saviour Jesus Christ!
        </p>
        <p className={styles.abouttext}>
          PCA is a Malayalam Pentecostal Church located in Ingleburn, NSW. Our
          mission is to guide people to the Lord Jesus Christ, who
          is the only way to the Father. We want to be a place where individuals
          and families can come together to know Jesus, to grow in faith, and to
          deepen their knowledge of His Word. Our heart is to share the hope and
          love of Christ with all who come through our doors.
        </p>
      </div>
      <div className={styles.servicescontainer}>
        <div className={styles.servicescentre}>
          <div className={styles.servicesdescription}>
            <p className={styles.servicestitle}>Our Services</p>
            <p className={styles.servicesubtitle}>
              We believe in the power of Spirit-filled worship and that coming
              together seeking God in prayer is vital. Our services are designed
              to be a means of inspiration, uplifting, and strengthening your
              faith. Whether it's through music, the preached word, or in
              prayer, we work toward an atmosphere where the presence of God is
              felt and His peace reigns.
            </p>
          </div>
          <div className={styles.servicescontent}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: transition.delay - 0.2,
                duration: transition.duration,
              }}
              viewport={{ once: true }}
              className={styles.service}
            >
              <p className={styles.servicetitle}>Sunday Service</p>
              <p className={styles.servicetime}>9am - 11:30am</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: transition.delay + 0.2,
                duration: transition.duration,
              }}
              viewport={{ once: true }}
              className={styles.service}
            >
              <p className={styles.servicetitle}>Sunday School</p>
              <p className={styles.servicetime}>11:30am - 12pm</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: transition.delay + 0.6,
                duration: transition.duration,
              }}
              viewport={{ once: true }}
              className={styles.service}
            >
              <p className={styles.servicetitle}>Friday Meeting</p>
              <p className={styles.servicetime}>7:30pm - 9pm</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: transition.delay + 1,
                duration: transition.duration,
              }}
              viewport={{ once: true }}
              className={styles.service}
            >
              <p className={styles.servicetitle}>Wednesday Prayer Meeting</p>
              <p className={styles.servicetime}>7:30pm - 9pm</p>
            </motion.div>
          </div>
        </div>
      </div>
      {/* <div className={styles.sermonVideoContainer}>
        <div className={styles.sermonVideoCentre}>
          <h2 className={styles.sermonVideoTitle}>Latest Sermon</h2>
          <div className={styles.sermonVideoWrapper}>
            <iframe
              className={styles.sermonVideo}
              src="https://www.youtube.com/embed/your-video-id"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>{notes.at(-1).title}</p>
          </div>
        </div>
      </div> */}
    </>
  );
}
