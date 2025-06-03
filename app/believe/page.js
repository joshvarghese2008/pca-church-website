import styles from "./page.module.css";
import { getLocalData } from "./getdata";
import BelieveCard from "./believeCard";
import Head from "next/head";

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
    url: "https://pcachurchsydney.com/believe",
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
};

export default async function Believe() {
  const statements = await getLocalData();
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://pcachurchsydney.com/believe"
          key="canonical"
        />
      </Head>
      <div className={styles.hero}>
        <div className={styles.herocentre}>
          <div />
          <div className={styles.herotitle}>
            <p className={styles.herotitletext}>What We Believe</p>
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
