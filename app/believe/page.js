import styles from "./page.module.css"

export default function Believe() {
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
        <div className={styles.aboutcontainer}>
          <p className={styles.slogantext}>
            A place where Faith, Community, and Love grow together in service of
            our Lord and Saviour Jesus Christ!
          </p>
          <p className={styles.abouttext}>
            The mission of PCA Church is to guide people to the Lord Jesus Christ,
            who is the only way to the Father. We want to be a place where
            individuals and families can come together to know Jesus, to grow in
            faith, and to deepen their knowledge of His Word. Our heart is to
            share the hope and love of Christ with all who come through our doors.
          </p>
        </div>
        <div className={styles.servicescontainer}>
          <div className={styles.servicescentre}>
            <div className={styles.servicesdescription}>
              <p className={styles.servicestitle}>Our Services</p>
              <p className={styles.servicesubtitle}>
                We believe in the power of Spirit-filled worship and that coming
                together seeking God in prayer is vital. Our services are designed
                to be a means of inspiration, uplifting, and strengthening your
                faith. Whether it's through music, the preached word, or in
                prayer, we work toward an atmosphere where the presence of God is
                felt and His peace reigns.
              </p>
            </div>
            <div className={styles.servicescontent}>
              <div className={styles.service}>
                <p className={styles.servicetitle}>Sunday Service</p>
                <p className={styles.servicetime}>9AM - 11:30AM</p>
              </div>
              <div className={styles.service}>
                <p className={styles.servicetitle}>Sunday School</p>
                <p className={styles.servicetime}>11:30AM - 12PM</p>
              </div>
              <div className={styles.service}>
                <p className={styles.servicetitle}>Friday Meeting</p>
                <p className={styles.servicetime}>7:30PM - 9PM</p>
              </div>
              <div className={styles.service}>
                <p className={styles.servicetitle}>Wednesday Prayer Meeting</p>
                <p className={styles.servicetime}>7:30PM - 9PM</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}