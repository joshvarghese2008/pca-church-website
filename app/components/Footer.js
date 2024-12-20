'use client'

import Link from "next/link"
import styles from "./components.module.css"
import { FacebookRounded } from "@mui/icons-material"
import { YouTube } from "@mui/icons-material"

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footercentre}>
                <div className={styles.footercontent}>
                    <div className={styles.footerlinks}>
                        <div className={styles.footerwebsitelinkscontainer}>
                            <Link href={'/'} className={styles.footerwebsitelink}>Home</Link>
                            {/* <Link href={'/'} className={styles.footerwebsitelink}>Our Services</Link> */}
                            <Link href={'/'} className={styles.footerwebsitelink}>What We Believe</Link>
                            <Link href={'/'} className={styles.footerwebsitelink}>Give</Link>
                            <Link href={'/'} className={styles.footerwebsitelink}>Plan A Visit</Link>
                        </div>
                        <div className={styles.footerexternallinkscontainer}>
                            <Link href={'/'}>
                                <FacebookRounded />
                            </Link>
                            <Link href={'/'}>
                                <YouTube />
                            </Link>
                        </div>
                    </div>
                    <hr className={styles.footerdivider} />
                    <div className={styles.footercopyright}>
                        <p>&copy; 2025 PCA Church. All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}