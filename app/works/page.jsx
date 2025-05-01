"use client"
import React, { useEffect } from 'react'
import Image from "next/image";
import Video from 'next-video';
import NavBar from '../component/NavBar'
import inTheGrain from '/videos/in-the-grain-snippet.mp4'
import Link from 'next/link';
export default function works() {

    useEffect(()=>{


    const videos = document.querySelector('video')

  
console.log(videos)
      
     

          

    },[])
    return (
        <div >
            <NavBar isLight={true} />
            <section className='bg-black min-h-screen w-full p-8'>
                <div className='relative min-h-screen w-full p-4 pt-24 '>
                    <h1 className='text-4xl sticky top-10 text-center text-white font-rockstar'>Selected Works(6)</h1>

                    <div className='pt-16 flex flex-col w-full'>

                        <div className='w-1/2'>
                            <Video muted loop controls={false} className="absolute vid top-0 w-full" src={inTheGrain}></Video>
                            <div className='flex flex-row justify-between'>
                                <div>
                                    <span className='block text-white text-xl font-rockstar mb-[-10px]'>In The Grain</span>
                                    <span className='font-instrument text-primary block'>2024</span>
                                </div>
                                <span className="works-nav pt-1 text-md inline-block underline text-primary hover:opacity-60">
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
