'use client'

import Link from "next/link"
import styles from "./components.module.css"
import { useState, useEffect } from "react"
import { MenuRounded, CloseRounded } from "@mui/icons-material"
import Image from "next/image"
import Logo from "../../public/images/churchlogo.png"
import { TransitionLink } from "./utils/TransitionLink"

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const [navbar, setNavbar] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const changeBackground = () => {
            if (window.scrollY >= 100) {
                setNavbar(true)
            } else {
                setNavbar(false);
            }
        }

        window.addEventListener('scroll', changeBackground)
    })

    return (
        <>
            <div className={styles.navbar} style={navbar ? {backgroundColor: '#061941'} : {backgroundColor: 'transparent'}}>
                <div className={styles.navbarcentre}>
                    <div className={styles.navbarcontent}>
                        <div>
                            <TransitionLink href={'/'}>
                                <Image src={Logo} alt="Pentecostal Christian Assembly Logo" height={70} />
                            </TransitionLink>
                        </div>
                        <div className="hidden md:flex">
                            <ul className={styles.navbarlinks}>
                                {/* <li><Link href={'/'} className={styles.navbarlink}>Our Services</Link></li> */}
                                <li><TransitionLink href={'/believe'} className={styles.navbarlink}>What We Believe</TransitionLink></li>
                                <li><TransitionLink href={'/'} className={styles.navbarlink}>Give</TransitionLink></li>
                                <li><TransitionLink href={'/'} className={styles.navbarlinkbutton}>Plan A Visit</TransitionLink></li>
                            </ul>
                        </div>
                        <div className="md:hidden">
                            <button onClick={toggleNavbar}>
                                {isOpen ? <CloseRounded className={styles.menuicons} /> : <MenuRounded className={styles.menuicons} />}
                            </button>
                        </div>
                    </div>
                </div>
                {isOpen && (
                <div className="flex flex-col items-center basis-full bg-church-blue rounded-3xl mx-5 mb-5 pt-4 pb-5">
                    {/* <Link href={'/'} className={styles.navbarlinkmenu}>Our Services</Link> */}
                    <TransitionLink href={'/believe'} className={styles.navbarlinkmenu}>What We Believe</TransitionLink>
                    <TransitionLink href={'/'} className={styles.navbarlinkmenu}>Give</TransitionLink>
                    <TransitionLink href={'/'} className={styles.navbarlinkbuttonmenu}>Plan A Visit</TransitionLink>
                </div>
            )}
            </div>
        </>
    )
}