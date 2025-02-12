import styles from "./page.module.css";
import { getLocalData } from "./getdata";

export const metadata = {
  title: 'Believe',
}

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
          <hr style={{
            width: "100%",
          }} />
          {statements.map((statement) => {
            return (
              <div
                style={{
                  width: "100%",
                }}
                key={statement.key}
              >
                <div className={styles.whatwebelievecontent}>
                  <div className={styles.believecontent}>
                    <p>
                      <b>
                        {statement.title}
                        {"..."}
                      </b>{" "}
                      {statement.description}
                    </p>
                  </div>
                  <p className={styles.believeverses}>{statement.verses}</p>
                </div>
                <hr style={{
                  marginTop: "15px"
                }} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
