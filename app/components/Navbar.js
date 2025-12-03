"use client";

import Link from "next/link";
import styles from "./components.module.css";
import { useState, useEffect } from "react";
import { MenuRounded, CloseRounded } from "@mui/icons-material";
import Image from "next/image";
import Logo from "../../public/images/churchlogo.png";
import { motion } from "motion/react";
import { TransitionLink } from "./utils/TransitionLink";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [navbar, setNavbar] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 100) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", changeBackground);
  });

  const transition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    duration: 0,
  };

  return (
    <>
      <div
        className={styles.navbar}
        style={
          navbar
            ? { backgroundColor: "var(--primaryDark1)" }
            : { backgroundColor: "transparent" }
        }
      >
        <div className={styles.navbarcentre}>
          <div className={styles.navbarcontent}>
            <motion.div {...transition} transition={{ delay: 1 }}>
              <TransitionLink href={"/"}>
                <Image
                  src={Logo}
                  alt="Pentecostal Christian Assembly Logo"
                  height={70}
                />
              </TransitionLink>
            </motion.div>
            <div className="hidden md:flex">
              <ul className={styles.navbarlinks}>
                {/* <li><Link href={'/'} className={styles.navbarlink}>Our Services</Link></li> */}
                <motion.li {...transition} transition={{ delay: 1.5 }}>
                  <TransitionLink
                    href={"/believe"}
                    className={styles.navbarlink}
                  >
                    What We Believe
                  </TransitionLink>
                </motion.li>
                <motion.li {...transition} transition={{ delay: 1.9 }}>
                  <TransitionLink href={"/give"} className={styles.navbarlink}>
                    Give
                  </TransitionLink>
                </motion.li>
                <motion.li {...transition} transition={{ delay: 2.3 }}>
                  <TransitionLink
                    href={"/visit"}
                    className={styles.navbarlinkbutton}
                  >
                    Plan A Visit
                  </TransitionLink>
                </motion.li>
              </ul>
            </div>
            <div className="md:hidden">
              <button onClick={toggleNavbar}>
                {isOpen ? (
                  <CloseRounded className={styles.menuicons} />
                ) : (
                  <MenuRounded className={styles.menuicons} />
                )}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="flex flex-col items-center basis-full bg-church-blue rounded-3xl mx-5 mb-5 pt-4 pb-5">
            <TransitionLink
              href={"/believe"}
              className={styles.navbarlinkmenu}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              What We Believe
            </TransitionLink>
            <TransitionLink
              href={"/give"}
              className={styles.navbarlinkmenu}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Give
            </TransitionLink>
            <TransitionLink
              href={"/visit"}
              className={styles.navbarlinkbuttonmenu}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Plan A Visit
            </TransitionLink>
          </div>
        )}
      </div>
    </>
  );
}
