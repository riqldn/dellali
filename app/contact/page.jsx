"use client"

import { animate, AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from "react";
import Link from "next/link";
export default function Home() {

    const [isActive, setActive] = useState(false)








    useEffect(() => {


        const loader = document.querySelector('.loader')
        const home = document.querySelector('.home-nav')
        const homeMobile = document.querySelector('.home-m')
        const about = document.querySelector('.about-nav')
        const aboutMobile = document.querySelector('.about-m')
        const works = document.querySelector('.works-nav')
        const worksMobile = document.querySelector('.works-m')
        const contact = document.querySelector('.contact-nav')
        const contactMobile = document.querySelector('.contact-m')
        const sequence = [
            ['.home-header', { y: 0 }, { ease: "easeInOut", duration: 1 }],
            ['.home-bottom', { y: 0 }, { ease: "easeInOut", duration: 1, at: '<' }],
            ['.main-header', { y: 0 }, { ease: "easeInOut", duration: 1 }]


        ]

        animate(sequence)
        if (isActive) {
            if (window.location.pathname === '/') {
                home.classList.add("active")
                homeMobile.classList.add("active")
            }
            else if (window.location.pathname === '/about') {
                about.classList.add("active")
                aboutMobile.classList.add("active")
            }
            else if (window.location.pathname === '/portfolio') {
                works.classList.add("active")
                worksMobile.classList.add("active")
            }
            else if (window.location.pathname === '/contact') {
                contact.classList.add("active")
                contactMobile.classList.add("active")
            }

        }


        if (window.location.pathname === '/') {
            home.classList.add("active")
        }
        else if (window.location.pathname === '/about') {
            about.classList.add("active")

        }
        else if (window.location.pathname === '/portfolio') {
            works.classList.add("active")

        }
        else if (window.location.pathname === '/contact') {
            contact.classList.add("active")

        }

    }, [])

    return (

        <div>


            <nav className=" overflow-hidden  p-4 md:p-8 top-0 flex justify-between flex-row text-black fixed w-full z-50">
                <Link name="Home" className="z-50 overflow-hidden " href="/">
                    <motion.span className="origin-top-left max-h-[60px] max-w-[260px] md:max-h-max md:max-w-max overflow-hidden inline-block">

                        <motion.svg initial={{ y: -120 }} className="home-header relative origin-top-left scale-50 md:scale-88" width="540" height="113" viewBox="0 0 540 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M535.41 112.72H534.51V110.74C535.083 110.74 535.57 110.627 535.97 110.4C536.383 110.16 536.59 109.793 536.59 109.3L536.41 100.7C536.41 100.193 536.236 99.8267 535.89 99.6C535.543 99.3734 535.083 99.26 534.51 99.26V97.28H535.41C536.503 97.28 537.43 97.58 538.19 98.18C538.963 98.7667 539.35 99.6067 539.35 100.7V109.3C539.35 110.393 538.963 111.24 538.19 111.84C537.43 112.427 536.503 112.72 535.41 112.72Z" fill="#F10000" />
                            <path d="M533.857 112H529.837V105.9H528.357V112H524.337V98H528.357V103.56H529.837V98H533.857V112Z" fill="#F10000" />
                            <path d="M521.433 112H517.413V100.34H514.853V98H524.013V100.34H521.433V112Z" fill="#F10000" />
                            <path d="M513.519 112H509.759V109.48H504.539V107.16L508.239 98H513.519V107.16H514.959V109.48H513.519V112ZM509.759 107.16V102.16L507.839 107.16H509.759Z" fill="#F10000" />
                            <path d="M499.247 112H491.347V98H499.247V100.34H495.367V103.56H498.967V105.9H495.367V109.66H499.247V112Z" fill="#F10000" />
                            <path d="M490.154 112H486.134V105.9H484.654V112H480.634V98H484.654V103.56H486.134V98H490.154V112Z" fill="#F10000" />
                            <path d="M477.729 112H473.709V100.34H471.149V98H480.309V100.34H477.729V112Z" fill="#F10000" />
                            <path d="M471.331 112.72H470.431C469.351 112.72 468.425 112.427 467.651 111.84C466.878 111.24 466.491 110.393 466.491 109.3V100.7C466.491 99.6067 466.878 98.7667 467.651 98.18C468.425 97.58 469.351 97.28 470.431 97.28H471.331V99.26C470.771 99.26 470.311 99.3734 469.951 99.6C469.605 99.8267 469.431 100.193 469.431 100.7V109.3C469.431 109.793 469.605 110.16 469.951 110.4C470.311 110.627 470.771 110.74 471.331 110.74V112.72Z" fill="#F10000" />
                            <path d="M462.335 112H430.175V0H462.335V112Z" fill="#090909" />
                            <path d="M427.758 112H367.438V0H399.598V93.28H427.758V112Z" fill="#090909" />
                            <path d="M363.491 112H332.131L329.091 93.28H310.371L307.491 112H275.971L297.571 0H342.051L363.491 112ZM326.211 74.72L319.811 34.88L313.411 74.72H326.211Z" fill="#090909" />
                            <path d="M278.376 112H218.056V0H250.216V93.28H278.376V112Z" fill="#090909" />
                            <path d="M215.638 112H155.318V0H187.478V93.28H215.638V112Z" fill="#090909" />
                            <path d="M148.281 112H85.0811V0H148.281V18.72H117.241V44.48H146.041V63.2H117.241V93.28H148.281V112Z" fill="#090909" />
                            <path d="M56 112H0V0H56C61.5467 0 66.2933 1.76 70.24 5.28C74.1867 8.69333 76.16 13.1733 76.16 18.72V93.28C76.16 98.8267 74.1867 103.36 70.24 106.88C66.2933 110.293 61.5467 112 56 112ZM41.12 93.28C41.8667 93.28 42.5067 93.0133 43.04 92.48C43.68 91.9467 44 91.2533 44 90.4V21.6C44 20.7467 43.68 20.0533 43.04 19.52C42.5067 18.9867 41.8667 18.72 41.12 18.72H32.16V93.28H41.12Z" fill="#090909" />
                        </motion.svg>



                    </motion.span>
                </Link>

                {/*Desktop and Tablet Menu */}
                <div className="hidden md:flex md:w-1/2 lg:w-1/4 justify-between flex-row">
                    <p className="font-instrument font-medium">
                        Based In<br />
                        London, United Kingdom
                    </p>
                    <ul className="font-rockstar">
                        <li className="home-nav hover:opacity-60">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="about-nav hover:opacity-60">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="works-nav hover:opacity-60">
                            <Link href="/portfolio">Portfolio</Link>
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
                            className="pb-4 fixed flex flex-row w-full md:hidden min-h-screen top-0 left-0 z-[60] ">
                            <div className="flex flex-row w-full md:hidden min-h-svh z-[60] top-0 left-0 backdrop-blur-md">
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
                                        <Link href="/contacts">Contact</Link>
                                    </motion.span>

                                </div>
                            </div>

                        </motion.div>

                    )}

                </AnimatePresence>

            </nav>
            {/* Home Section */}


            <section className="fixed top-0  z-20 w-full min-h-svh md:min-h-screen ">

                <div className=" flex min-h-svh md:min-h-screen md:h-full w-full justify-center flex-col items-center absolute top-0 z-50 font-instrument">

                    <span className="overflow-hidden">

                        <motion.h1 initial={{ y: 100 }} className="text-center main-header font-rockstar text-2xl md:text-[4rem] text-black ">Lets Connect</motion.h1>
                    </span>
                    <ul className="flex flex-row gap-8">
                        <Link className="hover:opacity-50" href="mailto:Ddefor95@gmail.com">
                            <span className="text-secondary underline">
                                Email
                            </span>
                        </Link>
                        <Link className="hover:opacity-50" href="https://www.instagram.com/the__4th">
                            <li className=" text-secondary underline">
                                Instagram
                            </li>
                        </Link>
                        <Link className="hover:opacity-50" href="https://www.linkedin.com/in/dellali-defor-5a8159252/">
                            <li className=" text-secondary underline">
                                LinkedIn
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="p-4 md:p-8 pointer-events-none flex flex-row absolute bottom-0 justify-between w-full z-30 ">
                    <p className="text-xs md:text-base self-end text-secondary text-nowrap">
                        *Film Director<br />
                        *Documentary Filmmaker
                    </p>
                    <span className="relative md:max-w-max overflow-y-hidden justify-self-end  md:relative  inline-block  md:p-0  origin-bottom-left">
                        <motion.svg initial={{ y: 120 }} className="home-bottom overflow-visible h-full w-full   scale-88 relative  md:max-h-max max-w-max origin-bottom-right" width="388" height="112" viewBox="0 0 388 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M387.556 112H356.836L345.636 68.16H340.676V112H308.516V0H364.516C370.062 0 374.809 1.76 378.756 5.28C382.702 8.69333 384.676 13.1733 384.676 18.72V49.6C384.676 56.96 381.369 62.3467 374.756 65.76L387.556 112ZM349.636 49.6C350.382 49.6 351.022 49.3333 351.556 48.8C352.196 48.16 352.516 47.4667 352.516 46.72V21.6C352.516 20.7467 352.196 20.0533 351.556 19.52C351.022 18.9867 350.382 18.72 349.636 18.72H340.676V49.6H349.636Z" fill="#090909" />
                            <path d="M279.419 112H243.579C238.032 112 233.286 110.293 229.339 106.88C225.392 103.36 223.419 98.8267 223.419 93.28V18.72C223.419 13.1733 225.392 8.69333 229.339 5.28C233.286 1.76 238.032 0 243.579 0H279.419C284.966 0 289.712 1.76 293.659 5.28C297.606 8.69333 299.579 13.1733 299.579 18.72V93.28C299.579 98.8267 297.606 103.36 293.659 106.88C289.712 110.293 284.966 112 279.419 112ZM264.539 93.28C265.286 93.28 265.926 93.0133 266.459 92.48C267.099 91.9467 267.419 91.2533 267.419 90.4V21.6C267.419 20.7467 267.099 20.0533 266.459 19.52C265.926 18.9867 265.286 18.72 264.539 18.72H258.459C257.712 18.72 257.019 18.9867 256.379 19.52C255.846 20.0533 255.579 20.7467 255.579 21.6V90.4C255.579 91.2533 255.846 91.9467 256.379 92.48C257.019 93.0133 257.712 93.28 258.459 93.28H264.539Z" fill="#090909" />
                            <path d="M188.325 112H156.165V0H219.365V18.72H188.325V45.92H216.485V64.64H188.325V112Z" fill="#090909" />
                            <path d="M149.128 112H85.9277V0H149.128V18.72H118.088V44.48H146.888V63.2H118.088V93.28H149.128V112Z" fill="#090909" />
                            <path d="M56.8467 112H0.84668V0H56.8467C62.3933 0 67.14 1.76 71.0867 5.28C75.0334 8.69333 77.0067 13.1733 77.0067 18.72V93.28C77.0067 98.8267 75.0334 103.36 71.0867 106.88C67.14 110.293 62.3933 112 56.8467 112ZM41.9667 93.28C42.7133 93.28 43.3533 93.0133 43.8867 92.48C44.5267 91.9467 44.8467 91.2533 44.8467 90.4V21.6C44.8467 20.7467 44.5267 20.0533 43.8867 19.52C43.3533 18.9867 42.7133 18.72 41.9667 18.72H33.0067V93.28H41.9667Z" fill="#090909" />
                        </motion.svg>
                    </span>
                </div>

            </section>


        </div>


    );
}
