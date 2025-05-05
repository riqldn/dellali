"use client"
import React, { useEffect } from 'react'
import Image from "next/image";
import Video from 'next-video';
import NavBar from '../component/NavBar'
import inTheGrain from '/videos/in-the-grain-snippet.mp4'
import Link from 'next/link';
import chaps from '/videos/co-op-snippet.mp4';
import { animate, AnimatePresence, motion, useInView, useMotionTemplate, useScroll, useTransform } from 'motion/react';
import self from '/videos/self-snippet.mp4'
import myFather from '/videos/my-father-snippet.mp4'
import sanctuary from '/videos/sanctuary-snippet.mp4'
import chapsUncut from '/videos/chaps-uncut-snippet.mp4'
import SlidingText from '../component/SlidingText';

export default function works() {

    useEffect(() => {


        const loader = document.querySelector('.loader')
        const sequence = [
             ['.header', {y:"0"}, {ease: "easeInOut", duration:0.5}],
            [loader, { opacity: 0 }, {delay:0.5, duration: 1 }],
           
        ]
        animate(sequence)

        const video = document.querySelector('mux-video')
        
        

        video.addEventListener('mouseover', ()=>{
            video.play()
        })

             video.addEventListener('mouseleave', ()=>{
            video.pause()
        })  

    }, [])
    return (
        <div >
            <NavBar isLight={true} />
            <section className='top-0 loader pointer-events-none z-[60] fixed bg-white min-h-screen w-full p-4 md:p-8'>
                <div className='relative min-h-screen w-full md:p-0 p-4 pt-24 '>
                    <div className='relative sticky md:top-40 lg:top-32 overflow-hidden'>
                        <motion.h1 initial={{y:"100%"}} className=' text-lg text-black header md:text-2xl lg:text-3xl  font-rockstar'>

                            Selected Works

                        </motion.h1>
                    </div>



                </div>
            </section>

            <section className='bg-black min-h-screen w-full p-4  md:p-8'>
                <div className='relative min-h-screen w-full p-4 md:p-0 pt-24 '>
                    <h1 className='text-lg md:text-2xl lg:text-3xl sticky md:top-40 lg:top-32  text-white font-rockstar'>

                        Selected Works

                    </h1>

                    <div className='md:pt-32 flex gap-8 md:gap-16 flex-col w-full'>

                        <div className='self-center w-11/12 md:w-10/12 lg:w-6/10'>
                            <motion.span whileHover={{ filter: "saturate(0)" }} className=''>
                                <Video muted playsinline loop controls={false} className="absolute vid top-0 w-full" src={inTheGrain}></Video>
                            </motion.span>
                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-col md:gap-0 gap-2'>
                                    <span className='block text-white text-smd md:text-xl font-rockstar mb-[-10px] md:mb-0 '>In The Grain</span>
                                    <span className='font-instrument text-sm md:text-md text-primary block'>2024</span>
                                </div>
                                <span className="works-nav pt-1 text-sm md:text-md inline-block underline text-primary hover:opacity-60">
                                    <Link href="/works/inthegrain">View Project</Link>
                                </span>
                            </div>

                        </div>

                        <div className='self-end w-11/12 md:w-10/12 lg:w-6/10'>
                            <motion.span whileHover={{ filter: "saturate(0)" }} className=''>
                                <Video muted loop controls={false} className="absolute vid top-0 w-full" src={self}></Video>
                            </motion.span>



                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-col md:gap-0 gap-2'>
                                    <span className='block text-white text-smd md:text-xl font-rockstar mb-[-10px] md:mb-0'>1C927 - Self</span>
                                    <span className='font-instrument text-sm md:text-md text-primary block'>2024</span>
                                </div>
                                <span className="works-nav pt-1 text-sm md:text-md inline-block underline text-primary hover:opacity-60">
                                    <Link href="/works">View Project</Link>
                                </span>
                            </div>

                        </div>


                        <div className='self-center w-11/12 md:w-10/12 lg:w-6/10'>
                            <motion.span whileHover={{ filter: "saturate(0)" }} className=''>
                                <Video muted loop controls={false} className="absolute vid top-0 w-full" src={myFather}></Video>
                            </motion.span>

                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-col md:gap-0 gap-2'>
                                    <span className='block text-white text-smd md:text-xl font-rockstar mb-[-10px] md:mb-0'>My Father</span>
                                    <span className='font-instrument text-sm md:text-md text-primary block'>2024</span>
                                </div>
                                <span className="works-nav pt-1 text-sm md:text-md inline-block underline text-primary hover:opacity-60">
                                    <Link href="/works">View Project</Link>
                                </span>
                            </div>

                        </div>


                        <div className='self-end w-11/12 md:w-10/12 lg:w-6/10'>
                            <motion.span whileHover={{ filter: "saturate(0)" }} className=''>
                                <Video muted loop controls={false} className="absolute vid top-0 w-full" src={sanctuary}></Video>
                            </motion.span>
                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-col gap-2 md:gap-0'>
                                    <span className='block text-white text-smd md:text-xl font-rockstar mb-[-10px] md:mb-0 '>Sanctuary</span>
                                    <span className='font-instrument text-sm md:text-md text-primary block'>2024</span>
                                </div>
                                <span className="works-nav pt-1 text-sm md:text-md inline-block underline text-primary hover:opacity-60">
                                    <Link href="/works">View Project</Link>
                                </span>
                            </div>

                        </div>


                        <div className='self-center  w-11/12 md:w-10/12 lg:w-6/10'>
                            <motion.span whileHover={{ filter: "saturate(0)" }} className=''>
                                <Video muted loop controls={false} className="absolute vid top-0 w-full" src={chaps}></Video>
                            </motion.span>
                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-col gap-2 md:gap-0'>
                                    <span className='block text-white text-smd md:text-xl font-rockstar mb-[-10px] md:mb-0 '>chaps x co-op</span>
                                    <span className='font-instrument text-sm md:text-md text-primary block'>2024</span>
                                </div>
                                <span className="works-nav pt-1 text-sm md:text-md inline-block underline text-primary hover:opacity-60">
                                    <Link href="/works">View Project</Link>
                                </span>
                            </div>

                        </div>


                        <div className='self-end w-11/12 md:w-10/12 lg:w-6/10'>
                            <motion.span whileHover={{ filter: "saturate(0)" }} className=''>
                                <Video muted loop controls={false} className="absolute vid top-0 w-full" src={chapsUncut}></Video>
                            </motion.span>
                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-col gap-2 md:gap-0'>
                                    <span className='block text-white text-smd md:text-xl font-rockstar mb-[-10px] md:mb-0 '>Chaps Uncut</span>
                                    <span className='font-instrument text-sm md:text-md text-primary block'>2024</span>
                                </div>
                                <span className="works-nav pt-1 text-sm md:text-base inline-block underline text-primary hover:opacity-60">
                                    <Link href="/works">View Project</Link>
                                </span>
                            </div>

                        </div>


                    </div>
                </div>
            </section>

        </div>
    )
}
