"use client";

import Link from "next/link";
import styles from "./components.module.css";
import { FacebookRounded, YouTube, Instagram, Email, Phone } from "@mui/icons-material";


export default function Footer() {

  const telHref = "tel:+61423358312";
  const emailHref = "mailto:pastor@pcachurchsydney.com";

  return (
    <div className={styles.footer}>
      <div className={styles.footercentre}>
        <div className={styles.footercontent}>
          <div className={styles.footerlinks}>
            <div className={styles.footerwebsitelinkscontainer}>
              <Link href={"/"} className={styles.footerwebsitelink}>
                Home
              </Link>
              <Link
                href={"/believe"}
                className={styles.footerwebsitelink}
              >
                What We Believe
              </Link>
              <Link
                href={"/give"}
                className={styles.footerwebsitelink}
              >
                Give
              </Link>
              <Link
                href={"/visit"}
                className={styles.footerwebsitelink}
              >
                Plan A Visit
              </Link>
            </div>
            <div className={styles.footerexternallinkscontainer}>
              <Link href={"https://www.facebook.com/pcasydney/"} className={styles.footericonlink}>
                <FacebookRounded sx={{ color: "var(--secondaryBrand1)" }} />
              </Link>
              <Link href={"https://www.youtube.com/@pcachurchsydney"} className={styles.footericonlink}>
                <YouTube sx={{ color: "var(--secondaryBrand1)" }} />
              </Link>
              <Link href={"https://www.instagram.com/pcachurchsydney"} className={styles.footericonlink}>
                <Instagram sx={{ color: "var(--secondaryBrand1)" }} />
              </Link>
            </div>
          </div>
          <hr className={styles.footerdivider} />
          <div className={styles.footerbottom}>
            <div className={styles.footercopyright}>
              <p>
                &copy; {new Date().getFullYear()} PCA Church. All rights reserved
              </p>
            </div>
            <div className={styles.footercontact}>
              <div className={styles.footercontactinfo}>
                <a href={emailHref} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Email sx={{ fontSize: "20px", color: "var(--secondaryBrand1)" }} />
                  <p style={{ fontSize: "14px"}}>pastor@pcachurchsydney.com</p>
                </a>
              </div>
              <div className={styles.footercontactinfo}>
                <a href={telHref} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Phone sx={{ fontSize: "20px", color: "var(--secondaryBrand1)" }} />
                  <p style={{ fontSize: "14px"}}>+61 423 358 312</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
