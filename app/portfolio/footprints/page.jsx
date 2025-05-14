"use client"

import Video from 'next-video';
import NavBar from '../../component/NavBar'
import footprints from '/videos/footprints.mp4'

import {  motion} from 'motion/react';

export default function footprint() {

  
    return (
        <div >
            <NavBar isLight={true} />


            <section className='bg-black min-h-svh flex flex-col justify-center w-full p-4 pt-0  md:p-8'>
                <div className='relative flex flex-col items-center justify-center  w-full p-4 md:p-0 '>





                    <motion.span className='video-play w-full lg:w-6/10'>
                        <Video playsinline loop className="vid w-full" src={footprints}></Video>
                    </motion.span>



                </div>
                <h1 className='font-rockstar text-lg md:text-[4rem] absolute text-white bottom-0'>Footprints In The Sand</h1>
                <span className='font-instrument text-md text-secondary bottom-3 md:bottom-4 right-4 absolute'>2025</span>
            </section>

        </div>
    )
}
