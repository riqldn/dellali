"use client"
import Video from 'next-video';
import NavBar from '../../component/NavBar'
import MyFather from '/videos/my-father.mp4'

import { motion} from 'motion/react';

export default function myfather() {
    return (
        <div >
            <NavBar isLight={true} />


            <section className='bg-black min-h-svh flex flex-col justify-center w-full p-4 pt-0  md:p-8'>
                <div className='relative flex flex-col items-center justify-center  w-full p-4 md:p-0 '>





                    <motion.span className='video-play w-full lg:w-6/10'>
                        <Video loop className="vid w-full" src={MyFather}></Video>
                    </motion.span>



                </div>
                <h1 className='font-rockstar text-lg md:text-[4rem] absolute text-white bottom-0'>My Father</h1>
                <span className='font-instrument text-md text-secondary bottom-3 md:bottom-4 right-4 absolute'>2024</span>
            </section>

        </div>
    )
}
