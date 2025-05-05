"use client"
import React, { useEffect } from 'react'
import Image from "next/image";
import Video from 'next-video';
import NavBar from '../../component/NavBar'
import chapsXcoop from '/videos/co-op.mp4'

import { animate, AnimatePresence, motion, useInView, useMotionTemplate, useScroll, useTransform } from 'motion/react';

export default function coop() {

    useEffect(() => {


        const loader = document.querySelector('.loader')


        const video = document.querySelector('mux-video')
        


    }, [])
    return (
        <div >
            <NavBar isLight={true} />


            <section className='bg-black min-h-svh flex flex-col justify-center w-full p-4 pt-0  md:p-8'>
                <div className='relative flex flex-col items-center justify-center  w-full p-4 md:p-0 '>





                    <motion.span className='video-play w-full lg:w-6/10'>
                        <Video loop className="vid w-full" src={chapsXcoop}></Video>
                    </motion.span>



                </div>
                <h1 className='font-rockstar text-lg md:text-[4rem] absolute text-white bottom-0'>Chaps x Co-op</h1>
                <span className='font-instrument text-md text-secondary bottom-3 md:bottom-4 right-4 absolute'>2024</span>
            </section>

        </div>
    )
}
