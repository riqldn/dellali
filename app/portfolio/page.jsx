"use client"
import React, { useEffect } from 'react'

import Video from 'next-video';
import NavBar from '../component/NavBar'
import inTheGrain from '/videos/in-the-grain-snippet.mp4'
import Link from 'next/link';

import { motion } from 'motion/react';
import self from '/videos/self-snippet.mp4'
import myFather from '/videos/my-father-snippet.mp4'
import sanctuary from '/videos/sanctuary-snippet.mp4'
import footprints from '/videos/footprints-snippet.mp4'
export default function works() {

    useEffect(() => {





        const videos = [...document.querySelectorAll('mux-video')]

        videos.forEach((e) => {


            e.addEventListener('mouseover', () => {
                e.play()
            })

            e.addEventListener('mouseleave', () => {
                e.pause()
            })

        })
    }, [])
    return (
        <div >
            <NavBar isLight={true} />

            <section className='bg-black min-h-screen w-full p-4  md:p-8'>
                <div className='relative min-h-screen w-full p-4 md:p-0 pt-24 '>

                    <div className='relative sticky md:top-40 lg:top-32 overflow-hidden'>
                        <motion.h1 initial={{ y: "100%" }} animate={{ y: 0, transition: { ease: "easeIn", duration: 1 } }} className=' text-lg text-white header md:text-2xl lg:text-3xl  font-rockstar'>

                            Portoflio

                        </motion.h1>
                    </div>

                    <div className='md:pt-32 flex gap-8 md:gap-16 flex-col w-full'>


                        <div className='self-end w-11/12 md:w-10/12 lg:w-6/10'>
                            <motion.span initial={{ filter: "saturate(0)" }} whileHover={{ filter: "saturate(1)" }} className='saturate-1 md:saturate-0'>
                                <Video muted playsinline loop controls={false} className="absolute vid top-0 w-full" src={self}></Video>
                            </motion.span>



                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-col md:gap-0 gap-2'>
                                    <span className='block text-white text-smd md:text-xl font-rockstar mb-[-10px] md:mb-0'>1C927 - Self</span>
                                    <span className='font-instrument text-sm md:text-md text-primary block'>2024</span>
                                </div>
                                <span className="works-nav pt-1 text-sm md:text-md inline-block underline text-primary hover:opacity-60">
                                    <Link href="/portfolio/self">View Project</Link>
                                </span>
                            </div>

                        </div>


                        <div className='self-center w-11/12 md:w-10/12 lg:w-6/10'>
                            <motion.span initial={{ filter: "saturate(0)" }} whileHover={{ filter: "saturate(1)" }} className='saturate-1 md:saturate-0'>
                                <Video muted playsinline loop controls={false} className="absolute vid top-0 w-full" src={myFather}></Video>
                            </motion.span>

                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-col md:gap-0 gap-2'>
                                    <span className='block text-white text-smd md:text-xl font-rockstar mb-[-10px] md:mb-0'>My Father</span>
                                    <span className='font-instrument text-sm md:text-md text-primary block'>2024</span>
                                </div>
                                <span className="works-nav pt-1 text-sm md:text-md inline-block underline text-primary hover:opacity-60">
                                    <Link href="/portfolio/myfather">View Project</Link>
                                </span>
                            </div>

                        </div>

                     <div className='self-end w-11/12 md:w-10/12 lg:w-6/10'>
                            <motion.span initial={{ filter: "saturate(0)" }} whileHover={{ filter: "saturate(1)" }} className='saturate-1 md:saturate-0'>
                                <Video muted playsinline loop controls={false} className="absolute vid top-0 w-full" src={footprints}></Video>
                            </motion.span>

                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-col md:gap-0 gap-2'>
                                    <span className='block text-white text-smd md:text-xl font-rockstar mb-[-10px] md:mb-0'>Footprints In The Dark</span>
                                    <span className='font-instrument text-sm md:text-md text-primary block'>2025</span>
                                </div>
                                <span className="works-nav pt-1 text-sm md:text-md inline-block underline text-primary hover:opacity-60">
                                    <Link href="/portfolio/footprints">View Project</Link>
                                </span>
                            </div>

                        </div>

                        <div className='self-center w-11/12 md:w-10/12 lg:w-6/10'>
                            <motion.span initial={{ filter: "saturate(0)" }} whileHover={{ filter: "saturate(1)" }} className='saturate-1'>
                                <Video muted playsinline loop controls={false} className="absolute vid top-0 w-full" src={inTheGrain}></Video>
                            </motion.span>
                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-col md:gap-0 gap-2'>
                                    <span className='block text-white text-smd md:text-xl font-rockstar mb-[-10px] md:mb-0 '>In The Grain</span>
                                    <span className='font-instrument text-sm md:text-md text-primary block'>2024</span>
                                </div>
                                <span className="works-nav pt-1 text-sm md:text-md inline-block underline text-primary hover:opacity-60">
                                    <Link href="/portfolio/inthegrain">View Project</Link>
                                </span>
                            </div>

                        </div>





                        <div className='self-end w-11/12 md:w-10/12 lg:w-6/10'>
                            <motion.span initial={{ filter: "saturate(0)" }} whileHover={{ filter: "saturate(1)" }} className='saturate-1 md:saturate-0'>
                                <Video muted loop playsinline controls={false} className="absolute vid top-0 w-full" src={sanctuary}></Video>
                            </motion.span>
                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-col gap-2 md:gap-0'>
                                    <span className='block text-white text-smd md:text-xl font-rockstar mb-[-10px] md:mb-0 '>Sanctuary</span>
                                    <span className='font-instrument text-sm md:text-md text-primary block'>2024</span>
                                </div>
                                <span className="works-nav pt-1 text-sm md:text-md inline-block underline text-primary hover:opacity-60">
                                    <Link href="/portfolio/sanctuary">View Project</Link>
                                </span>
                            </div>

                        </div>







                    </div>
                </div>
            </section>

        </div>
    )
}
