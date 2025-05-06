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


                    <motion.svg  className="home-header relative origin-top-left scale-50 md:scale-88" width="540" height="113" viewBox="0 0 540 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path initial={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} transition={{ ease: "easeInOut", duration: 0.5 }} animate={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} d="M535.41 112.72H534.51V110.74C535.083 110.74 535.57 110.627 535.97 110.4C536.383 110.16 536.59 109.793 536.59 109.3L536.41 100.7C536.41 100.193 536.236 99.8267 535.89 99.6C535.543 99.3734 535.083 99.26 534.51 99.26V97.28H535.41C536.503 97.28 537.43 97.58 538.19 98.18C538.963 98.7667 539.35 99.6067 539.35 100.7V109.3C539.35 110.393 538.963 111.24 538.19 111.84C537.43 112.427 536.503 112.72 535.41 112.72Z" />
                        <motion.path initial={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} transition={{ ease: "easeInOut", duration: 0.5 }} animate={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} d="M533.857 112H529.837V105.9H528.357V112H524.337V98H528.357V103.56H529.837V98H533.857V112Z" />
                        <motion.path initial={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} transition={{ ease: "easeInOut", duration: 0.5 }} animate={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} d="M521.433 112H517.413V100.34H514.853V98H524.013V100.34H521.433V112Z" />
                        <motion.path initial={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} transition={{ ease: "easeInOut", duration: 0.5 }} animate={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} d="M513.519 112H509.759V109.48H504.539V107.16L508.239 98H513.519V107.16H514.959V109.48H513.519V112ZM509.759 107.16V102.16L507.839 107.16H509.759Z" />
                        <motion.path initial={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} transition={{ ease: "easeInOut", duration: 0.5 }} animate={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} d="M499.247 112H491.347V98H499.247V100.34H495.367V103.56H498.967V105.9H495.367V109.66H499.247V112Z" />
                        <motion.path initial={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} transition={{ ease: "easeInOut", duration: 0.5 }} animate={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} d="M490.154 112H486.134V105.9H484.654V112H480.634V98H484.654V103.56H486.134V98H490.154V112Z" />
                        <motion.path initial={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} transition={{ ease: "easeInOut", duration: 0.5 }} animate={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} d="M477.729 112H473.709V100.34H471.149V98H480.309V100.34H477.729V112Z" />
                        <motion.path initial={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} transition={{ ease: "easeInOut", duration: 0.5 }} animate={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} d="M471.331 112.72H470.431C469.351 112.72 468.425 112.427 467.651 111.84C466.878 111.24 466.491 110.393 466.491 109.3V100.7C466.491 99.6067 466.878 98.7667 467.651 98.18C468.425 97.58 469.351 97.28 470.431 97.28H471.331V99.26C470.771 99.26 470.311 99.3734 469.951 99.6C469.605 99.8267 469.431 100.193 469.431 100.7V109.3C469.431 109.793 469.605 110.16 469.951 110.4C470.311 110.627 470.771 110.74 471.331 110.74V112.72Z" />
                        <motion.path initial={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} transition={{ ease: "easeInOut", duration: 0.5 }} animate={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} d="M462.335 112H430.175V0H462.335V112Z" />
                        <motion.path initial={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} transition={{ ease: "easeInOut", duration: 0.5 }} animate={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} d="M427.758 112H367.438V0H399.598V93.28H427.758V112Z" />
                        <motion.path initial={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} transition={{ ease: "easeInOut", duration: 0.5 }} animate={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} d="M363.491 112H332.131L329.091 93.28H310.371L307.491 112H275.971L297.571 0H342.051L363.491 112ZM326.211 74.72L319.811 34.88L313.411 74.72H326.211Z" />
                        <motion.path initial={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} transition={{ ease: "easeInOut", duration: 0.5 }} animate={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} d="M278.376 112H218.056V0H250.216V93.28H278.376V112Z" />
                        <motion.path initial={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} transition={{ ease: "easeInOut", duration: 0.5 }} animate={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} d="M215.638 112H155.318V0H187.478V93.28H215.638V112Z" />
                        <motion.path initial={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} transition={{ ease: "easeInOut", duration: 0.5 }} animate={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} d="M148.281 112H85.0811V0H148.281V18.72H117.241V44.48H146.041V63.2H117.241V93.28H148.281V112Z" />
                        <motion.path initial={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} transition={{ ease: "easeInOut", duration: 0.5 }} animate={props.isLight ? { fill: "#F9F9F9" } : { fill: "#090909" }} d="M56 112H0V0H56C61.5467 0 66.2933 1.76 70.24 5.28C74.1867 8.69333 76.16 13.1733 76.16 18.72V93.28C76.16 98.8267 74.1867 103.36 70.24 106.88C66.2933 110.293 61.5467 112 56 112ZM41.12 93.28C41.8667 93.28 42.5067 93.0133 43.04 92.48C43.68 91.9467 44 91.2533 44 90.4V21.6C44 20.7467 43.68 20.0533 43.04 19.52C42.5067 18.9867 41.8667 18.72 41.12 18.72H32.16V93.28H41.12Z" />
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
                        <Link href="/works">Works(4)</Link>
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
                        className="pb-4 fixed flex flex-row w-full md:hidden min-h-screen z-[60] top-0 left-0 backdrop-blur-md">
                        <div className='absolute pb-4 fixed flex flex-row w-full min-h-svh z-[60] top-0 left-0'>
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
                                    <Link href="/works">Works(4)</Link>
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
                        </div>

                    </motion.div>

                )}

            </AnimatePresence>

        </motion.nav>
    )
}
