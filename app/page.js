import Image from "next/image";
import styles from "./page.module.css";
// import { supabase } from "./components/utils/supabase";

export default async function Home() {
  // const { data: notes } = await supabase.from("sermons").select();

  // console.log(notes.at(-1).title);

  return (
    <>
      <div className={styles.hero}>
        <img src="../images/services.png" className={styles.herovideobg} />
        <div className={styles.herocentre}>
          <div />
          <div className={styles.herotitle}>
            <p className={styles.herowelcome}>Welcome to</p>
            <div className={styles.herochurchname}>
              <p className={styles.herochurchinitials}>PCA</p>
              <p className={styles.herochurch}>Church</p>
            </div>
          </div>
          <div className={styles.herotimings}>
            <div className={styles.herotimingssundayservice}>
              <p className={styles.herotimingstitle}>Sunday Service:</p>
              <p className={styles.herotimingstime}>9am - 11:30am</p>
            </div>
            <div className={styles.herotimingssundayschool}>
              <p className={styles.herotimingstitle}>Sunday School:</p>
              <p className={styles.herotimingstime}>11:30am - 12pm</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutcontainer}>
        <p className={styles.slogantext}>
          A place where Faith, Community, and Love grow together in service of
          our Lord and Saviour Jesus Christ!
        </p>
        <p className={styles.abouttext}>
          PCA is a Malayalam Pentecostal Church located in Ingleburn, NSW. The mission of
          PCA Church is to guide people to the Lord Jesus Christ, who is the
          only way to the Father. We want to be a place where individuals and
          families can come together to know Jesus, to grow in faith, and to
          deepen their knowledge of His Word. Our heart is to share the hope and
          love of Christ with all who come through our doors.
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
              <p className={styles.servicetime}>9am - 11:30am</p>
            </div>
            <div className={styles.service}>
              <p className={styles.servicetitle}>Sunday School</p>
              <p className={styles.servicetime}>11:30am - 12pm</p>
            </div>
            <div className={styles.service}>
              <p className={styles.servicetitle}>Friday Meeting</p>
              <p className={styles.servicetime}>7:30pm - 9pm</p>
            </div>
            <div className={styles.service}>
              <p className={styles.servicetitle}>Wednesday Prayer Meeting</p>
              <p className={styles.servicetime}>7:30pm - 9pm</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.sermonVideoContainer}>
        <div className={styles.sermonVideoCentre}>
          <h2 className={styles.sermonVideoTitle}>Latest Sermon</h2>
          <div className={styles.sermonVideoWrapper}>
            <iframe
              className={styles.sermonVideo}
              src="https://www.youtube.com/embed/your-video-id"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>{notes.at(-1).title}</p>
          </div>
        </div>
      </div> */}
    </>
  );
}
