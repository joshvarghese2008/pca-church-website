import styles from "./page.module.css";
import { motion } from "motion/react";
import GiveContent from "./giveContent";

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
    url: "https://pcachurchsydney.com/give",
    siteName: "PCA Church",
    images: [
      {
        url: "https://pcachurchsydney.com/images/churchlogo.png",
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
    <GiveContent />
    // <>
    //   <div className={styles.hero}>
    //     <div className={styles.herocentre}>
    //       <div />
    //       <div className={styles.herotitle}>
    //         <p className={styles.herotitletext}>Give</p>
    //       </div>
    //       <div />
    //     </div>
    //   </div>
    //   <div className={styles.giveContainer}>
    //     <div className={styles.giveCentre}>
    //       <div className={styles.blurbcontainer}>
    //         <p className={styles.verse}>
    //           <em>
    //             "Each of you should give what you have decided in your heart to
    //             give, not reluctantly or under compulsion, for God loves a
    //             cheerful giver." <br />
    //             <b>2 Corinthians 9:7 {"(NIV)"}</b>
    //           </em>
    //         </p>
    //         <p className={styles.blurbtext}>
    //           Your donations will help us to continue our mission and make a
    //           difference in the community. Every contribution, no matter the
    //           size, is greatly appreciated. The donations that we receive go
    //           towards supporting our church, and helping us to provide for those
    //           in need.
    //         </p>
    //       </div>
    //       <div className={styles.giveMethods}>
    //         <motion.div
    //           initial={{ opacity: 0 }}
    //           whileInView={{ opacity: 1 }}
    //           viewport={{ once: true }}
    //           transition={{
    //             delay: transition.delay + 1.2,
    //             duration: transition.duration,
    //           }}
    //           className={styles.giveMethodSection}
    //         >
    //           <p className={styles.giveMethodTitle}>In Person</p>
    //           <p className={styles.giveMethodText}>
    //             We currently only allow giving to be done in-person. You can
    //             give in person during our Sunday services, when the time comes
    //             for offerings to be collected.
    //           </p>
    //         </motion.div>
    //         {/* <div className={styles.giveMethodDivider} />
    //         <div className={styles.giveMethodSection}>
    //           <p className={styles.giveMethodTitle}>Bank Transfer</p>
    //           <p className={styles.giveMethodText} style={{ marginBottom: "1rem" }}>
    //             You can also donate through a bank transfer.<br />Please use the Bank Details below:
    //           </p>
    //           <p className={styles.giveMethodText}>
    //             <b>Bank Name:</b> To be updated...
    //           </p>
    //           <p className={styles.giveMethodText}>
    //             <b>Account Number:</b> To be updated...
    //           </p>
    //           <p className={styles.giveMethodText}>
    //             <b>BSB:</b> To be updated...
    //           </p>
    //         </div> */}
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}
