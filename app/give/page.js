import styles from "./page.module.css";

export default function Believe() {
  return (
    <>
      <div className={styles.hero}>
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
          <div className={styles.givingblurbsection}>
            <p className={styles.verse}>
              <em>
                "Each of you should give what you have decided in your heart to
                give, not reluctantly or under compulsion, for God loves a
                cheerful giver." ~ <b>2 Corinthians 9:7 {"(NIV)"}</b>
              </em>
            </p>
          </div>
          <button className={styles.donateButton}>Donate Now</button>
        </div>
      </div>
    </>
  );
}
