"use client";
import styles from "./page.module.css";
import React from "react";
import { motion } from "motion/react";

export default function BelieveCard({ key, id, title, description, verses }) {
  const transition = {
    duration: 1,
    delay: 0.3,
  };
  const statements = {
    key,
    id,
    title,
    description,
    verses,
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: transition.delay * statements.id,
        duration: transition.duration,
      }}
      style={{
        width: "100%",
      }}
      className={styles.believeContainer}
      key={statements.id}
    >
      <div className={styles.whatwebelievecontent}>
        <div className={styles.believecontent}>
          <h1 className={styles.believetitle}>{statements.title}</h1>
          <p>
            {statements.description}
          </p>
        </div>
        <p className={styles.believeverses}>{statements.verses}</p>
      </div>
      <hr
        style={{
          marginTop: "15px",
        }}
      />
    </motion.div>
  );
}
