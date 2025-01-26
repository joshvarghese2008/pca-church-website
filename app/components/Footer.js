"use client";

import Link from "next/link";
import styles from "./components.module.css";
import { FacebookRounded } from "@mui/icons-material";
import { YouTube } from "@mui/icons-material";
import { TransitionLink } from "./utils/TransitionLink";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footercentre}>
        <div className={styles.footercontent}>
          <div className={styles.footerlinks}>
            <div className={styles.footerwebsitelinkscontainer}>
              <TransitionLink href={"/"} className={styles.footerwebsitelink}>
                Home
              </TransitionLink>
              {/* <Link href={'/'} className={styles.footerwebsitelink}>Our Services</Link> */}
              <TransitionLink
                href={"/believe"}
                className={styles.footerwebsitelink}
              >
                What We Believe
              </TransitionLink>
              <TransitionLink
                href={"/give"}
                className={styles.footerwebsitelink}
              >
                Give
              </TransitionLink>
              <TransitionLink
                href={"/visit"}
                className={styles.footerwebsitelink}
              >
                Plan A Visit
              </TransitionLink>
            </div>
            <div className={styles.footerexternallinkscontainer}>
              {/* <Link href={'/'}>
                                <FacebookRounded />
                            </Link>
                            <Link href={'/'}>
                                <YouTube />
                            </Link> */}
            </div>
          </div>
          <hr className={styles.footerdivider} />
          <div className={styles.footercopyright}>
            <p style={{ color: "black" }}>
              &copy; {new Date().getFullYear()} PCA Church. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
