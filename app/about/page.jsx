"use client"
import React from 'react'
import { animate, AnimatePresence, motion, useInView, useMotionTemplate, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import NavBar from "../component/NavBar";
import { useLenis } from "../utils/lenis";
import Image from 'next/image';
import Delalli from '../assets/delalli.png'
import grain from '../assets/grain.png'
import SlidingText from '../component/SlidingText';

export default function about() {
    const [isInView, setInView] = useState(false)
    const lenis = useLenis();
    const spacer = useRef()
    const scaleText = useScroll({ target: spacer, offset: ['start end', 'end start'] }).scrollYProgress
    const isScrolled = useInView(spacer, { margin: "0px 0px 0px 0px", amount: 0.4, once: false })


    useEffect(() => {
        window.scrollTo(0,0)


        const sequence = [
            ['.scrollDown', { opacity: 1 }, { ease: "easeInOut", duration: 1 }],
            ['.navBar', { opacity: 1 }, { ease: "easeInOut", duration: 1, at: '<' }],
            ['.aboutHeading', { y: 0 }, { ease: "easeIn", duration: 0.5, at: '<' }]
        ]

        setTimeout(() => {
            if (!isScrolled) {
                animate(sequence)


            }


        }, 1000)

    }, [])

    return (

        <div>

<div className='h-[20vh] bottom-0 z-30 fixed w-full bg-blue-white'>

</div>
            <motion.div className='navBar' initial={{ opacity: 0 }} animate={isScrolled ? { opacity: 0 } : { opacity: 1, transition: { delay: 1 } }} >
                <NavBar isLight={isScrolled} />
            </motion.div>





            <section className=' bg-white min-h-screen w-full'>
                <div className="top-0 pointer-events-none main justify-center  flex flex-col min-h-screen overflow-hidden w-full sticky z-40 text-secondary font-instrument">
                    <motion.h1 initial="initial" animate={isScrolled ? "scrolled" : "initial"} variants={{ initial: { scale: 1, color: "#090909" }, scrolled: { color: "#090909", scale: 3500, } }} transition={{ duration: 2.5, ease: "easeInOut" }} className="header-scale ease-in-out text-center scale-100 pointer-events-auto">TELLING THE STORIES THAT MATTER</motion.h1>
                    <span  className="replace hidden ease-in-out text-center scale-100 pointer-events-auto">TELLING THE STORIES THAT MATTER</span>
                    <motion.span className="absolute left-4 scale-40 md:scale-100 bottom-4 origin-bottom-left overflow-hidden justify-self-end   origin-bottom block">
                        <motion.svg className="aboutHeading  " initial={{ y: "100%" }} width="634" height="112" viewBox="0 0 634 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M87.6256 112H56.2656L53.2256 93.28H34.5056L31.6256 112H0.105637L21.7056 -7.62939e-06H66.1856L87.6256 112ZM50.3456 74.72L43.9456 34.88L37.5456 74.72H50.3456ZM147.572 112H91.5719V-7.62939e-06H145.972C151.519 -7.62939e-06 156.212 1.75999 160.052 5.27999C163.999 8.69333 165.972 13.1733 165.972 18.72V37.28C165.972 44.7467 162.665 50.1867 156.052 53.6C163.305 56.6933 167.199 62.4 167.732 70.72V93.28C167.732 98.8267 165.759 103.36 161.812 106.88C157.865 110.293 153.119 112 147.572 112ZM130.932 44.64C131.785 44.64 132.479 44.3733 133.012 43.84C133.545 43.3067 133.812 42.6133 133.812 41.76V21.6C133.812 20.7467 133.545 20.0533 133.012 19.52C132.479 18.9867 131.785 18.72 130.932 18.72H123.732V44.64H130.932ZM132.692 93.28C133.439 93.28 134.079 93.0133 134.612 92.48C135.252 91.9467 135.572 91.2533 135.572 90.4V66.24C135.572 65.3867 135.252 64.6933 134.612 64.16C134.079 63.6267 133.439 63.36 132.692 63.36H123.732V93.28H132.692ZM230.919 112H195.079C189.533 112 184.786 110.293 180.839 106.88C176.893 103.36 174.919 98.8267 174.919 93.28V18.72C174.919 13.1733 176.893 8.69333 180.839 5.27999C184.786 1.75999 189.533 -7.62939e-06 195.079 -7.62939e-06H230.919C236.466 -7.62939e-06 241.213 1.75999 245.159 5.27999C249.106 8.69333 251.079 13.1733 251.079 18.72V93.28C251.079 98.8267 249.106 103.36 245.159 106.88C241.213 110.293 236.466 112 230.919 112ZM216.039 93.28C216.786 93.28 217.426 93.0133 217.959 92.48C218.599 91.9467 218.919 91.2533 218.919 90.4V21.6C218.919 20.7467 218.599 20.0533 217.959 19.52C217.426 18.9867 216.786 18.72 216.039 18.72H209.959C209.213 18.72 208.519 18.9867 207.879 19.52C207.346 20.0533 207.079 20.7467 207.079 21.6V90.4C207.079 91.2533 207.346 91.9467 207.879 92.48C208.519 93.0133 209.213 93.28 209.959 93.28H216.039ZM315.696 112H279.856C274.309 112 269.562 110.293 265.616 106.88C261.669 103.36 259.696 98.8267 259.696 93.28V-7.62939e-06H291.856V90.4C291.856 91.2533 292.122 91.9467 292.656 92.48C293.296 93.0133 293.989 93.28 294.736 93.28H300.816C301.562 93.28 302.202 93.0133 302.736 92.48C303.376 91.9467 303.696 91.2533 303.696 90.4V-7.62939e-06H335.856V93.28C335.856 98.8267 333.882 103.36 329.936 106.88C325.989 110.293 321.242 112 315.696 112ZM390.697 112H358.537V18.72H338.057V-7.62939e-06H411.337V18.72H390.697V112ZM560.752 112H530.832V43.2L518.352 112H495.472L483.152 43.2V112H453.072V-7.62939e-06H496.752L506.992 58.88L517.072 -7.62939e-06H560.752V112ZM633.697 112H570.497V-7.62939e-06H633.697V18.72H602.657V44.48H631.457V63.2H602.657V93.28H633.697V112Z" fill="#090909" />
                        </motion.svg>

                    </motion.span>
                    <motion.span initial={{ opacity: 0 }} className='scrollDown absolute bottom-4 right-4 z-10'>(Scroll Down)</motion.span>
                </div>
                <div ref={spacer} className='spacerAbout relative top-0 min-h-[40vh] z-[45] w-full '>


                </div>
               
                <AnimatePresence>

                    {isScrolled && <motion.section variants={{ initial: { opacity: 0 }, animate: { opacity: 1, transition: { delay: 1.2, duration: 1, ease: "easeInOut" } }, exit: { opacity: 0, transition: { duration: 1 } } }} initial="initial" animate="animate" exit="exit" className='del absolute top-0  z-[45] w-full min-h-screen bg-black '>
                        <div className='p-4 md:p-4 about-section lg:p-4 w-full auto-rows-auto sticky top-0 min-h-screen flex md:flex flex-col lg:grid gap-y-12 lg:gap-y-16  lg:grid-cols-12'>
                            <span className='text-white col-start-1 col-end-3'>(About Me)</span>
                            <h2 className='about-heading order-1 text-smd text-white col-start-7 col-end-13 md:text-[2rem] lg:text-lg font-instrument leading-tight font-semibold'>
                                Dellali is a London based filmmaker whose creative journey began after leaving behind a biomedical science career.
                            </h2>

                            <div className='about-text order-3 h-full justify-end text-white flex gap-6 flex-col row-start-2 col-start-1 col-end-6'>
                                <h3 className='about-subheader font-semibold text-smd lg:text-smd'>Telling the stories that matter</h3>
                                <p className='about-paragraph font-instrument leading-reg max-w-[55ch] md:text-base lg:text-md lg:max-w-[55ch]'>Driven by a passion for storytelling, Dellali uses filmmaking to bridge the gap between communitites and tell stories of the unrepresented. His films also help express his thoughts and emotions, collaborating with others to share both personal and collective stories</p>
                                <Link href="/works">
                                    <span className='about-cta block text-primary lg:text-md underline'>View Works</span>
                                </Link>
                            </div>
                            <Image className='del-image self-end order-2 relative col-start-7 col-end-13 row-start-2 z-50' alt='image of delalli' src={Delalli}></Image>
                        </div>
                        <div className='min-h-[40vh] bg-black w-full z-[40]'></div>

                    </motion.section>}
                </AnimatePresence>
            </section>



        </div>
    )
}
