import React from 'react'
import { animate, AnimatePresence, motion, useInView, useMotionTemplate, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
export default function NavBar(props) {


    const [isActive, setActive] = useState(false)





    useEffect(() => {

        let previousScroll = window.scrollY;
        const nav = document.querySelector(".nav")

        window.addEventListener('scroll', () => {
            let current = window.scrollY;
            if (window.innerWidth > 768) {



                if (current < previousScroll)
                    nav.classList.remove("hide")
                else if (current > previousScroll && current >= window.innerHeight)
                    nav.classList.add("hide")

                previousScroll = window.scrollY;
            }
        })
        const home = document.querySelector('.home-nav')

        const about = document.querySelector('.about-nav')

        const works = document.querySelector('.works-nav')

        const contact = document.querySelector('.contact-nav')


        if (window.location.pathname === '/') {
            home.classList.add("active")

        }
        else if (window.location.pathname === '/about') {
            about.classList.add("active")

        }
        else if (window.location.pathname === '/works') {
            works.classList.add("active")

        }
        else if (window.location.pathname === '/contact') {
            contact.classList.add("active")

        }
    }, [])
    return (
        <motion.nav initial={props.isLight ? { color: "#F9F9F9" } : { color: "#090909" }} transition={{ ease: "easeInOut", duration: 0.5 }} animate={props.isLight ? { color: "#F9F9F9" } : { color: "#090909" }} className="overflow-hidden nav p-4 md:p-8 top-0 flex justify-between flex-row text-white fixed w-full z-50">
            <Link name="Home" className="z-50 overflow-hidden " href="/">
                <motion.span className="scale-50 origin-top-left max-h-[60px] max-w-[260px] md:max-h-max md:max-w-max overflow-hidden inline-block">


                    <motion.svg className=" home-header relative origin-top-left scale-50 md:scale-88" width="460" height="112" viewBox="0 0 460 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path initial={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} transition={{ ease: "easeInOut", duration: 0.5 }} animate={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} d="M463.069 112H430.909V0H463.069V112Z" />
                        <motion.path initial={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} transition={{ ease: "easeInOut", duration: 0.5 }} animate={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} d="M428.492 112H368.172V0H400.332V93.28H428.492V112Z" />
                        <motion.path initial={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} transition={{ ease: "easeInOut", duration: 0.5 }} animate={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} d="M365.755 112H305.435V0H337.595V93.28H365.755V112Z" />
                        <motion.path initial={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} transition={{ ease: "easeInOut", duration: 0.5 }} animate={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} d="M301.488 112H270.128L267.088 93.28H248.368L245.488 112H213.968L235.568 0H280.048L301.488 112ZM264.208 74.72L257.808 34.88L251.408 74.72H264.208Z" />
                        <motion.path initial={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} transition={{ ease: "easeInOut", duration: 0.5 }} animate={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} d="M216.373 112H156.053V0H188.213V93.28H216.373V112Z" fill={!props.isLight ? "#090909" : "#F9F9F9"} />
                        <motion.path initial={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} transition={{ ease: "easeInOut", duration: 0.5 }} animate={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} d="M149.015 112H85.8154V0H149.015V18.72H117.975V44.48H146.775V63.2H117.975V93.28H149.015V112Z" />
                        <motion.path initial={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} transition={{ ease: "easeInOut", duration: 0.5 }} animate={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} d="M56.7344 112H0.734375V0H56.7344C62.281 0 67.0277 1.76 70.9744 5.28C74.921 8.69333 76.8944 13.1733 76.8944 18.72V93.28C76.8944 98.8267 74.921 103.36 70.9744 106.88C67.0277 110.293 62.281 112 56.7344 112ZM41.8544 93.28C42.601 93.28 43.241 93.0133 43.7744 92.48C44.4144 91.9467 44.7344 91.2533 44.7344 90.4V21.6C44.7344 20.7467 44.4144 20.0533 43.7744 19.52C43.241 18.9867 42.601 18.72 41.8544 18.72H32.8944V93.28H41.8544Z" />
                    </motion.svg>

                </motion.span>
            </Link>

            {/*Desktop and Tablet Menu */}
            <div className="hidden md:flex md:w-1/2 lg:w-1/4 justify-between flex-row">
                <p className=" font-instrument font-medium">
                    Based In<br />
                    London, United Kingdom
                </p>
                <ul className="font-rockstar">
                    <li className=" home-nav hover:opacity-60">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="about-nav hover:opacity-60">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="works-nav hover:opacity-60">
                        <Link href="/works">Works(6)</Link>
                    </li>
                    <li className="contact-nav hover:opacity-60">
                        <Link href="/contact">Contact</Link>
                    </li>

                </ul>

            </div>

            <span onClick={() => setActive(!isActive)} className="relative z-[61] md:hidden text-md font-rockstar">
                <span className={isActive ? "hidden" : "inline-block"}>
                    Menu
                </span>
                <span className={isActive ? "inline-block" : "hidden"}>
                    Close
                </span>
            </span>
            <AnimatePresence>
                {isActive && (
                    <motion.div initial="initial" animate="animate" exit="exit" transition="transition"
                        variants={{
                            initial: { opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } },
                            animate: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.2, duration: 1, ease: "easeInOut" } },
                            exit: {
                                opacity: 0,
                                transition: {
                                    when: "afterChildren",
                                    staggerChildren: "0.3",
                                    duration: 1
                                }
                            },




                        }}
                        className="pb-4 fixed flex flex-row w-full md:hidden min-h-svh z-[60] top-0 left-0 backdrop-blur-md">

                        <div className=" self-end flex flex-col w-11/12 mx-auto text-xl font-rockstar">
                            <motion.span variants={{ initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 0.4 } }, exit: { opacity: 0 } }}
                                className="home-m mix-blend-difference hover:opacity-60">
                                <Link href="/">Home</Link>
                            </motion.span>
                            <motion.span variants={{ initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 0.4 } }, exit: { opacity: 0 } }}
                                className="about-m mix-blend-difference hover:opacity-60">
                                <Link href="/about">About</Link>
                            </motion.span>
                            <motion.span
                                variants={{ initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 0.4 } }, exit: { opacity: 0 } }}
                                className="works-m mix-blend-difference hover:opacity-60">
                                <Link href="/works">Works(6)</Link>
                            </motion.span>
                            <motion.span className="contact-m mix-blend-difference hover:opacity-60"
                                variants={{
                                    initial: { opacity: 0 },
                                    animate: { opacity: 1, transition: { duration: 0.4 } },
                                    exit: { opacity: 0 }
                                }}
                            >
                                <Link href="/contact">Contact</Link>
                            </motion.span>

                        </div>
                    </motion.div>

                )}

            </AnimatePresence>

        </motion.nav>
    )
}
