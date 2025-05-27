"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Script from "next/script";
import Head from "next/head";
import { motion } from "motion/react";

// import { supabase } from "./components/utils/supabase";

export default function Home() {
  // const { data: notes } = await supabase.from("sermons").select();

  // console.log(notes.at(-1).title);

  const organisationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": "https://pcachurchsydney.com/",
    "sameAs": ["https://www.pcachurchsydney.com/"],
    "logo": "https://pcachurchsydney.com/images/logo.png",
    "name": "Pentecostal Christian Assembly",
    "alternateName": "PCA Church",
    "description": "Pentecostal Christian Assembly (PCA Church) is a Malayalam church located in South-West Sydney, Ingleburn. We are a growing church that seeks to be a place where individuals and families can come together to grow in faith and deepen their understanding of Jesus Christ.",
    "email": "pastor@pcachurchsydney.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7/79 Williamson Rd",
      "addressLocality": "Ingleburn",
      "addressCountry": "AU",
      "addressRegion": "NSW",
      "postalCode": "2565"
    },
    "telephone": "+61423358312",
    "sameAs": [
      "https://www.facebook.com/pcasydney",
    ]
  }

  const transition = {
    duration: 0.5,
    delay: 1,
  };

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://pcachurchsydney.com/"
          key="canonical"
        />

        {/* Some other code may come here */}
        <script type="application/ld+json">
          {JSON.stringify(organisationStructuredData)}
        </script>
      </Head>
      <div className={styles.hero}>
        <Image
          src="/images/services.png"
          fill={true}
          alt="Image of PCA Church entrance"
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
                delay: transition.delay + 1.2,
                duration: transition.duration,
              }}
              className={styles.herotimingssundayservice}
            >
              <p className={styles.herotimingstitle}>Sunday Service:</p>
              <p className={styles.herotimingstime}>9am - 11:30am</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: transition.delay + 1.5,
                duration: transition.duration,
              }}
              viewport={{ once: true }}
              className={styles.herotimingssundayschool}
            >
              <p className={styles.herotimingstitle}>Sunday School:</p>
              <p className={styles.herotimingstime}>11:30am - 12pm</p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className={styles.aboutcontainer}>
        <p className={styles.slogantext}>
          A place where Faith, Community, and Love grow together in service of
          our Lord and Saviour Jesus Christ!
        </p>
        <p className={styles.abouttext}>
          PCA is a Malayalam Pentecostal Church located in Ingleburn, NSW. The
          mission of PCA Church is to guide people to the Lord Jesus Christ, who
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
                delay: transition.delay,
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
                delay: transition.delay + 0.2,
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
                delay: transition.delay + 0.4,
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
