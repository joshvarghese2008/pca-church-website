import styles from "./page.module.css";
import { getLocalData } from "./getdata";
import BelieveCard from "./believeCard";
import Head from "next/head";
import Image from "next/image";
import { MotionImage } from "../components/MotionImage";

export const metadata = {
  title: "Believe",
  description: "This is the page where we share what we believe as a church.",
  keywords: [
    "PCA Church",
    "Pentecostal Christian Assembly",
    "Believe",
    "Faith",
    "Christianity",
    "What We Believe",
  ],
  openGraph: {
    title: "Believe",
    description: "This is the page where we share what we believe as a church.",
    url: "https://www.pcachurchsydney.com/believe",
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
};

export default async function Believe() {
  const statements = await getLocalData();

  const transition = {
    duration: 0.5,
    delay: 1,
  };

  return (
    <>
      <div className={styles.hero}>
        <MotionImage
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
            delay: transition.delay - 0.5
          }}
          src="/images/believehero.png"
          fill={true}
          alt="Image of PCA Church Worship"
          className={styles.heroimagebg}
        />
        <div className={styles.herocentre}>
          <div />
          <div className={styles.herotitle}>
            <p className={styles.herotitletext}>What we&nbsp;</p>
            <p className={[styles.herotitletext]}>Believe</p>
          </div>
          <div />
        </div>
      </div>
      <div className={styles.whatwebelievecontainer}>
        <div className={styles.whatwebelievecentre}>
          {/* <hr style={{
            width: "100%",
          }} /> */}
          {statements.map((statement) => {
            return (
              <BelieveCard
                key={statement.key}
                id={statement.key}
                title={statement.title}
                description={statement.description}
                verses={statement.verses}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
