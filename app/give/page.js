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
            <div className={styles.giveMethodSection}>
              <p className={styles.giveMethodTitle}>In Person</p>
              <p className={styles.giveMethodText}>
                You can give in person during our Sunday services, when the time
                comes for offerings to be collected.
              </p>
            </div>
            {/* <div className={styles.giveMethodDivider} />
            <div className={styles.giveMethodSection}>
              <p className={styles.giveMethodTitle}>Bank Transfer</p>
              <p className={styles.giveMethodText} style={{ marginBottom: "1rem" }}>
                You can also donate through a bank transfer.<br />Please use the Bank Details below:
              </p>
              <p className={styles.giveMethodText}>
                <b>Bank Name:</b> To be updated...
              </p>
              <p className={styles.giveMethodText}>
                <b>Account Number:</b> To be updated...
              </p>
              <p className={styles.giveMethodText}>
                <b>BSB:</b> To be updated...
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
