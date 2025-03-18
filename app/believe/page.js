import styles from "./page.module.css";
import { getLocalData } from "./getdata";
import BelieveCard from "./believeCard";

export const metadata = {
  title: "Believe",
  description: "PCA Church's statement of Belief",
};

export default async function Believe() {
  const statements = await getLocalData();
  return (
    <>
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
