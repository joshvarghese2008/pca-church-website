"use client";

import { Email } from "@mui/icons-material";
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
          <div className={styles.visitblurb}>
            <div className={styles.blurbcontainer}>
              <p>
                We are excited to have you join us. We are a church that is
                passionate about seeing people come to know Jesus and grow in
                their relationship with Him. We believe that church is more than
                just a place to attend, but a community that helps you grow in
                your faith.
              </p>
            </div>
            <div className={styles.addresscontainer}>
              <div className={styles.addresscontentleft}>
                <div className={styles.addresscontentlefttitle}>
                  <p>Service Times</p>
                </div>
                <div className={styles.addresscontentlefttext}>
                  <p>Sunday Service: 9am - 11:30am</p>
                  <p>Sunday School: 11:30am - 12pm</p>
                </div>
              </div>
              <div className={styles.addresscontentright}>
                <div className={styles.addresscontentrighttitle}>
                  <p>Location</p>
                </div>
                <div className={styles.addresscontentrighttext}>
                  <p>7/79 Williamson Road</p>
                  <p>Ingleburn, NSW, 2565</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.visitcontent}>
            <div className={styles.visitcontenttitle}>
              <p>What to Expect</p>
            </div>
            <div className={styles.visitcontenttext}>
              <p>
                Our Sunday Service is about two and a half hours long. The
                service includes worship, prayer, and messages from the Bible.
                We also have a Sunday School for children that runs after the
                Sunday Service which is about 30 minutes long, catering to all
                children and youth.
                <br />
                <br />
                The service including the sermon is in Malayalam, but if you are
                unable to understand the language, please feel free to ask for a
                translator, who will translate the sermon into English for you.
                <br />
                <br />
                There is a section in the service dedicated to children, where
                they will receieve a short message <b>{"(in English)"}</b> and
                will given the opportunity to say their memory verses and sing a
                song. If your child is shy, they are welcome to sit with you
                during this time.
                <br />
                <br />
              </p>

              <button
                style={{ width: "100%" }}
                onClick={async () => {
                  await fetch("../api/emails", {
                    method: "POST",
                    body: JSON.stringify({
                      email: "joshvarghese2008@icloud.com",
                      firstName: "Josh",
                    }),
                  });
                }}
              >
                Send Email to Plan a Visit
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
