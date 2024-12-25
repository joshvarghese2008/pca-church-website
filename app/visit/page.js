import styles from "./page.module.css";

export default function Visit() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.herocentre}>
          <div />
          <div className={styles.herotitle}>
            <p className={styles.herotitletext}>Plan A Visit</p>
          </div>
          <div />
        </div>
      </div>
      <div className={styles.visitContainer}>
        <div className={styles.visitCentre}>
          <div className={styles.blurbcontainer}>
            <p>
              We are excited to have you join us. We are a church that is
              passionate about seeing people come to know Jesus and grow in
              their relationship with Him. We believe that church is more than
              just a place to attend, but a community that helps you grow in
              your faith.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
