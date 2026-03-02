"use client";
import { MotionImage } from "../components/MotionImage";
import styles from "./page.module.css";
import { motion } from "motion/react";

const transition = {
  duration: 0.5,
  delay: 1,
};

export default function GiveContent() {
  const telHref = "tel:+61423358312";
  const emailHref = "mailto:pastor@pcachurchsydney.com";

  return (
    <>
      <div className={styles.hero}>
        <MotionImage
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
            delay: transition.delay - 0.5,
          }}
          src="/images/givehero.png"
          fill={true}
          alt="Image of PCA Church Worship"
          className={styles.heroimagebg}
        />
        <div className={styles.herocentre}>
          <div />
          <div className={styles.herotitle}>
            <p className={styles.herotitletext}>Give</p>
          </div>
          <div />
        </div>
      </div>
      <div className={styles.giveContainer}>
        <div className={styles.giveCentre}>
          <div className={styles.blurbcontainer}>
            <p className={styles.verse}>
              <em>
                "Each of you should give what you have decided in your heart to
                give, not reluctantly or under compulsion, for God loves a
                cheerful giver." <br />
                <b>2 Corinthians 9:7 {"(NIV)"}</b>
              </em>
            </p>
            <p className={styles.blurbtext}>
              Your donations will help us to continue our mission and make a
              difference in the community. Every contribution, no matter the
              size, is greatly appreciated. The donations that we receive go
              towards supporting our church, and helping us to provide for those
              in need.
            </p>
          </div>
          <div className={styles.giveMethods}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: transition.delay + 1.2,
                duration: transition.duration,
              }}
              className={styles.giveMethodSection}
            >
              <p className={styles.giveMethodTitle}>In Person</p>
              <p className={styles.giveMethodText}>
                We currently only allow giving to be done in-person. You can
                give in person during our Sunday services, when the time comes
                for offerings to be collected.
              </p>
            </motion.div>
            <div className={styles.giveMethodDivider} />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: transition.delay + 1.4,
                duration: transition.duration,
              }}
              className={styles.giveMethodSection}
            >
              <p className={styles.giveMethodTitle}>Bank Transfer</p>
              <p
                className={styles.giveMethodText}
                style={{ marginBottom: "1rem" }}
              >
                If you would like to donate through an online transfer, please
                contact the church.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
