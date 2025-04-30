"use client"
import Image from "next/image";

import Video from 'next-video';
import chaps from '/videos/co-op-snippet.mp4';
import inTheGrain from '/videos/in-the-grain-snippet.mp4'
import self from '/videos/self-snippet.mp4'
import myFather from '/videos/my-father-snippet.mp4'
import sanctuary from '/videos/sanctuary-snippet.mp4'
import chapsUncut from '/videos/chaps-uncut-snippet.mp4'

import { animate, AnimatePresence, motion, useInView, useMotionTemplate, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from "react";
import grain from '../assets/grain.png'
import granite from '../assets/granite.png'
import Link from "next/link";
import NavBar from "../component/NavBar";
export default function Home() {

  const [isActive, setActive] = useState(false)
  const spacerScale = useRef()
  const spacerInitial = useRef()
  const two = useRef()
  const three = useRef()
  const four = useRef()
  const five = useRef()
  const six = useRef()
  const space = useRef()
  const isInitial = useInView(spacerScale, { margin: "0px 0px 0px 0px", amount: "all" })
  const isSelf = useInView(two, { margin: "0px 0px 0px 0px", amount: "some" })
  const isSpace = useInView(space, { margin: "0px 0px 0px 0px", amount: "some" })

  const initial = useScroll({ target: spacerInitial, offset: ["start end", "start start"] }).scrollYProgress
  const scaleVid = useScroll({ target: spacerScale, offset: ["start end", "start start"] }).scrollYProgress
  const scrollTwo = useScroll({ target: two, offset: ["start end", "start start"] }).scrollYProgress
  const scrollThree = useScroll({ target: three, offset: ["start end", "start start"] }).scrollYProgress
  const scrollFour = useScroll({ target: four, offset: ["start end", "start start"] }).scrollYProgress
  const scrollFive = useScroll({ target: five, offset: ["start end", "start start"] }).scrollYProgress
  const scrollSix = useScroll({ target: six, offset: ["start end", "start start"] }).scrollYProgress


  const scaleText = useTransform(initial, [0, 1], [1, 0.5])
  const scaleVideo = useTransform(scaleVid, [0, 1], [0.4, 1])
  const saturation = useTransform(scaleVid, [0, 1], [0, 1])
  const textTranslate = useTransform(initial, [0, 1], ['0%', '150%'])
  const videoTranslate = useTransform(initial, [0, 1], ['100%', '0%'])
  const selfVariable = useTransform(scrollTwo, [0, 1], ['0%', '100%'])
  const grainVariable = useTransform(scrollThree, [0, 1], ['0%', '100%'])
  const sanctuaryVariable = useTransform(scrollFour, [0, 1], ['0%', '100%'])
  const fatherVariable = useTransform(scrollFive, [0, 1], ['0%', '100%'])
  const chapsVariable = useTransform(scrollSix, [0, 1], ['0%', '100%'])

  const clipPathSanctuary = useMotionTemplate`inset(0 ${sanctuaryVariable} 0 0)`
  const clipPathSelf = useMotionTemplate`inset(0 ${selfVariable} 0 0)`
  const clipPathGrain = useMotionTemplate`inset(0 ${grainVariable} 0 0)`
  const clipPathFather = useMotionTemplate`inset(0 ${fatherVariable} 0 0)`
  const clipPathChaps = useMotionTemplate`inset(0 ${chapsVariable} 0 0)`

  const saturate = useMotionTemplate`saturate(${saturation})`


  useEffect(() => {
    window.scrollTo(0, 0)
    const one = document.querySelector('#one')
    const two = document.querySelector('#two')
    const three = document.querySelector('#three')
    const four = document.querySelector('#four')
    const five = document.querySelector('#five')
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
      [one, { opacity: 1 }, { duration: 0.5, ease: "easeInOut" }],
      [two, { opacity: 1 }, { duration: 0.5, ease: "easeInOut" }],
      [three, { opacity: 1 }, { duration: 0.5, ease: "easeInOut" }],
      [four, { opacity: 1 }, { duration: 0.5, ease: "easeInOut" }],
      [five, { opacity: 2 }, { duration: 0.5, ease: "easeInOut" }],
      [loader, { opacity: 0 }, { duration: 0.8, ease: "easeInOut" }],
      ['.home-header', { translateY: "0%" }, { duration: 0.5, ease: "easeInOut" }],
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
      else if (window.location.pathname === '/works') {
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
      // homeMobile.classList.add("active")
    }
    else if (window.location.pathname === '/about') {
      about.classList.add("active")
      aboutMobile.classList.add("active")
    }
    else if (window.location.pathname === '/works') {
      works.classList.add("active")
      worksMobile.classList.add("active")
    }
    else if (window.location.pathname === '/contact') {
      contact.classList.add("active")
      contactMobile.classList.add("active")
    }

  }, [])

  return (

    <div>

      <section className="pointer-events-none loader bg-white w-full h-screen fixed top-0 z-[70]">
        <div className="pointer-events-none flex h-full w-full justify-center flex-row items-center absolute top-0 z-50 text-secondary font-instrument">
          <h1 className="text-center pointer-events-auto">
            <motion.span initial={{ opacity: 0 }} id="four">
              TELLING&nbsp;
            </motion.span>
            <motion.span initial={{ opacity: 0 }} id="five">
              THE&nbsp;
            </motion.span>
            <motion.span initial={{ opacity: 0 }} id="one">
              STORIES&nbsp;
            </motion.span>

            <motion.span initial={{ opacity: 0 }} id="three">
              THAT&nbsp;
            </motion.span>

            <motion.span initial={{ opacity: 0 }} id="two">
              MATTER
            </motion.span>

          </h1>
        </div>
      </section>

      <nav className=" overflow-hidden  p-4 md:p-8 top-0 flex justify-between flex-row text-white fixed w-full z-50">
        <Link name="Home" className="z-50 overflow-hidden " href="/">
          <motion.span style={{ scale: scaleText }} className="origin-top-left max-h-[60px] max-w-[260px] md:max-h-max md:max-w-max overflow-hidden inline-block">

            <motion.svg initial={{ translateY: "120%" }} className="home-header relative origin-top-left scale-50 md:scale-88" width="460" height="112" viewBox="0 0 460 112" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M463.069 112H430.909V0H463.069V112Z" fill="#F9F9F9" />
              <path d="M428.492 112H368.172V0H400.332V93.28H428.492V112Z" fill="#F9F9F9" />
              <path d="M365.755 112H305.435V0H337.595V93.28H365.755V112Z" fill="#F9F9F9" />
              <path d="M301.488 112H270.128L267.088 93.28H248.368L245.488 112H213.968L235.568 0H280.048L301.488 112ZM264.208 74.72L257.808 34.88L251.408 74.72H264.208Z" fill="#F9F9F9" />
              <path d="M216.373 112H156.053V0H188.213V93.28H216.373V112Z" fill="#F9F9F9" />
              <path d="M149.015 112H85.8154V0H149.015V18.72H117.975V44.48H146.775V63.2H117.975V93.28H149.015V112Z" fill="#F9F9F9" />
              <path d="M56.7344 112H0.734375V0H56.7344C62.281 0 67.0277 1.76 70.9744 5.28C74.921 8.69333 76.8944 13.1733 76.8944 18.72V93.28C76.8944 98.8267 74.921 103.36 70.9744 106.88C67.0277 110.293 62.281 112 56.7344 112ZM41.8544 93.28C42.601 93.28 43.241 93.0133 43.7744 92.48C44.4144 91.9467 44.7344 91.2533 44.7344 90.4V21.6C44.7344 20.7467 44.4144 20.0533 43.7744 19.52C43.241 18.9867 42.601 18.72 41.8544 18.72H32.8944V93.28H41.8544Z" fill="#F9F9F9" />
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
              <Link href="/works">Works(6)</Link>
            </li>
            <li className="contact-nav hover:opacity-60">
              <Link href="/contacts">Contact</Link>
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
                  <Link href="/contacts">Contact</Link>
                </motion.span>

              </div>
            </motion.div>

          )}

        </AnimatePresence>

      </nav>
      {/* Home Section */}


        <section className="fixed top-0  z-20 w-full min-h-screen md:min-h-screen ">

          <div className="pointer-events-none flex h-screen md:h-full w-full justify-center flex-row items-center absolute top-0 z-50 text-secondary font-instrument">
            <h1 className="text-center pointer-events-auto">TELLING THE STORIES THAT MATTER</h1>
          </div>
          <div className="p-4 md:p-8 flex flex-row absolute bottom-0 justify-between w-full z-30 ">
            <p className="text-xs md:text-base self-end text-secondary text-nowrap">
              *Film Director<br />
              *Documentary Filmmaker
            </p>
            <span className="relative md:max-w-max  overflow-hidden justify-self-end  md:relative    md:p-0  origin-bottom-right block">
              <motion.svg initial={{ translateY: "120%" }} className="home-header  md:scale-88 relative max-h-[45px] md:max-h-max max-w-max origin-bottom-right " style={{ translateY: textTranslate }} width="388" height="112" viewBox="0 0 388 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M387.556 112H356.836L345.636 68.16H340.676V112H308.516V0H364.516C370.062 0 374.809 1.76 378.756 5.28C382.702 8.69333 384.676 13.1733 384.676 18.72V49.6C384.676 56.96 381.369 62.3467 374.756 65.76L387.556 112ZM349.636 49.6C350.382 49.6 351.022 49.3333 351.556 48.8C352.196 48.16 352.516 47.4667 352.516 46.72V21.6C352.516 20.7467 352.196 20.0533 351.556 19.52C351.022 18.9867 350.382 18.72 349.636 18.72H340.676V49.6H349.636Z" fill="#F9F9F9" />
                <path d="M279.419 112H243.579C238.032 112 233.286 110.293 229.339 106.88C225.392 103.36 223.419 98.8267 223.419 93.28V18.72C223.419 13.1733 225.392 8.69333 229.339 5.28C233.286 1.76 238.032 0 243.579 0H279.419C284.966 0 289.712 1.76 293.659 5.28C297.606 8.69333 299.579 13.1733 299.579 18.72V93.28C299.579 98.8267 297.606 103.36 293.659 106.88C289.712 110.293 284.966 112 279.419 112ZM264.539 93.28C265.286 93.28 265.926 93.0133 266.459 92.48C267.099 91.9467 267.419 91.2533 267.419 90.4V21.6C267.419 20.7467 267.099 20.0533 266.459 19.52C265.926 18.9867 265.286 18.72 264.539 18.72H258.459C257.712 18.72 257.019 18.9867 256.379 19.52C255.846 20.0533 255.579 20.7467 255.579 21.6V90.4C255.579 91.2533 255.846 91.9467 256.379 92.48C257.019 93.0133 257.712 93.28 258.459 93.28H264.539Z" fill="#F9F9F9" />
                <path d="M188.325 112H156.165V0H219.365V18.72H188.325V45.92H216.485V64.64H188.325V112Z" fill="#F9F9F9" />
                <path d="M149.128 112H85.9277V0H149.128V18.72H118.088V44.48H146.888V63.2H118.088V93.28H149.128V112Z" fill="#F9F9F9" />
                <path d="M56.8467 112H0.84668V0H56.8467C62.3933 0 67.14 1.76 71.0867 5.28C75.0334 8.69333 77.0067 13.1733 77.0067 18.72V93.28C77.0067 98.8267 75.0334 103.36 71.0867 106.88C67.14 110.293 62.3933 112 56.8467 112ZM41.9667 93.28C42.7133 93.28 43.3533 93.0133 43.8867 92.48C44.5267 91.9467 44.8467 91.2533 44.8467 90.4V21.6C44.8467 20.7467 44.5267 20.0533 43.8867 19.52C43.3533 18.9867 42.7133 18.72 41.9667 18.72H33.0067V93.28H41.9667Z" fill="#F9F9F9" />
              </motion.svg>
            </span>
          </div>
          <Image className="granite" src={granite} fill alt='' quality={80} sizes="100vw" />
        </section>
    


      <motion.div style={{ scale: scaleVideo, filter: saturate }} className="z-30 overflow-hidden  min-h-screen origin-center w-full  fixed top-0">


        <motion.section style={{ translateY: videoTranslate }} className="z-50  w-full min-h-screen ">

          {/* In The Grain */}
          <motion.div style={{ clipPath: clipPathSelf }} className="absolute z-[56] top-0 w-full min-h-screen">

            <Video muted loop controls={false} className="absolute top-0 min-h-screen w-full" src={inTheGrain}></Video>
            <div className="w-full p-4 md:p-4 min-h-dvh md:min-h-screen flex flex-col justify-end absolute top-0">
              <div className="mx-auto relative bottom-0  flex flex-row w-full justify-between ">
                <span className="self-end text-primary flex flex-col font-rockstar">
                  <span className="block overflow-hidden mb-[-10px] ">
                    <motion.span initial={{ translateY: "100%" }} animate={isInitial ? { translateY: "0%" } : isSelf ? { translateY: "0%" } : isSpace ? { translateY: "0%" } : { translateY: "100%" }} className="tracking-tight block text-base md:text-smd">Now Playing</motion.span>
                  </span>
                  <span className="block overflow-hidden">
                    <motion.span initial={{ translateY: "100%" }} animate={isInitial ? { translateY: "0%" } : isSelf ? { translateY: "0%" } : isSpace ? { translateY: "0%" } : { translateY: "100%" }} className="tracking-tight block text-[1.75rem] md:text-xl">In The Grain</motion.span>
                  </span>

                </span>
                <span className="self-end inline-block overflow-hidden">
                  <motion.span initial={{ translateY: "100%" }} animate={isInitial ? { translateY: "0%" } : isSelf ? { translateY: "0%" } : isSpace ? { translateY: "0%" } : { translateY: "100%" }} className="relative hover:opacity-75 ease-in-out duration-300 inline-block text-primary font-rockstar text-[1.75] md:text-md md:pb-2 self-end underline">
                    <Link href='' >
                      Full Version
                    </Link>
                  </motion.span>

                </span>


              </div>

            </div>


          </motion.div>

          {/* Self */}
          <motion.div style={{ clipPath: clipPathGrain }} className="absolute z-[55] top-0 w-full min-h-screen">

            <Video muted loop controls={false} className="absolute top-0 min-h-screen w-full" src={self}></Video>
            <div className="w-full p-4 md:p-4 min-h-dvh md:min-h-screen flex flex-col justify-end absolute top-0">
              <div className="mx-auto relative bottom-0  flex flex-row w-full justify-between ">
                <span className="self-end text-primary flex flex-col font-rockstar">
                  <span className="block overflow-hidden mb-[-10px] ">
                    <motion.span className="tracking-tight block text-base md:text-smd">Now Playing</motion.span>
                  </span>
                  <span className="block overflow-hidden">
                    <motion.span className="tracking-tight block text-[1.75rem] md:text-xl">1C927 - Self</motion.span>
                  </span>

                </span>
                <span className=" text-primary hover:opacity-75 ease-in-out duration-300 font-rockstar text-[1.75] md:text-md md:pb-2 self-end underline">
                  <Link href='' >
                    Full Version
                  </Link>
                </span>

              </div>

            </div>


          </motion.div>
          {/* Sanctuary */}
          <motion.div style={{ clipPath: clipPathSanctuary }} className="absolute z-[54] top-0 w-full min-h-screen">
            <motion.div className="absolute top-0 w-full min-h-screen">
              <Video muted loop controls={false} className="absolute top-0 min-h-screen w-full" src={sanctuary}></Video>
              <div className="w-full p-4 md:p-4 min-h-dvh md:min-h-screen flex flex-col justify-end absolute top-0">

                <div className="mx-auto relative bottom-0  flex flex-row w-full justify-between ">

                  <span className="self-end text-primary flex flex-col font-rockstar">
                    <span className="block overflow-hidden mb-[-10px] ">
                      <motion.span className="tracking-tight block text-base md:text-smd">Now Playing</motion.span>
                    </span>

                    <span className="block overflow-hidden">
                      <motion.span className="tracking-tight block text-[1.75rem] md:text-xl">Sanctuary</motion.span>
                    </span>

                  </span>

                  <span className=" text-primary hover:opacity-75 ease-in-out duration-300 font-rockstar text-[1.75] md:text-md md:pb-2 self-end underline">
                    <Link href='' >
                      Full Version
                    </Link>
                  </span>

                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Father */}
          <motion.div style={{ clipPath: clipPathFather }} className="absolute z-[53] top-0 w-full min-h-screen">
            <motion.div className="absolute z-[53] top-0 w-full min-h-screen">


              <Video muted loop controls={false} className="absolute top-0 min-h-screen w-full" src={myFather}></Video>
              <div className="w-full p-4 md:p-4 min-h-dvh md:min-h-screen flex flex-col justify-end absolute top-0">
                <div className="mx-auto relative bottom-0  flex flex-row w-full justify-between ">
                  <span className="self-end text-primary flex flex-col font-rockstar">
                    <span className="block overflow-hidden mb-[-10px] ">
                      <motion.span className="tracking-tight block text-base md:text-smd">Now Playing</motion.span>
                    </span>
                    <span className="block overflow-hidden">
                      <motion.span className="tracking-tight block text-[1.75rem] md:text-xl">My Father</motion.span>
                    </span>

                  </span>
                  <span className=" text-primary hover:opacity-75 ease-in-out duration-300 font-rockstar text-[1.75] md:text-md md:pb-2 self-end underline">
                    <Link href='' >
                      Full Version
                    </Link>
                  </span>

                </div>

              </div>


            </motion.div>
          </motion.div>


          {/* Chaps x Co-op */}
          <motion.div style={{ clipPath: clipPathChaps }} className="absolute z-[52] top-0 w-full min-h-screen">
            <motion.div className="absolute z-[53] top-0 w-full min-h-screen">


              <Video muted loop controls={false} className="absolute top-0 min-h-screen w-full" src={chaps}></Video>
              <div className="w-full p-4 md:p-4 min-h-dvh md:min-h-screen flex flex-col justify-end absolute top-0">
                <div className="mx-auto relative bottom-0  flex flex-row w-full justify-between ">
                  <span className="self-end text-primary flex flex-col font-rockstar">
                    <span className="block overflow-hidden mb-[-10px] ">
                      <motion.span className="tracking-tight block text-base md:text-smd">Now Playing</motion.span>
                    </span>
                    <span className="block overflow-hidden">
                      <motion.span className="tracking-tight block text-[1.75rem] md:text-xl">Chaps x Co-op</motion.span>
                    </span>

                  </span>
                  <span className=" text-primary hover:opacity-75 ease-in-out duration-300 font-rockstar text-[1.75] md:text-md md:pb-2 self-end underline">
                    <Link href='' >
                      Full Version
                    </Link>
                  </span>

                </div>

              </div>


            </motion.div>
          </motion.div>


          {/* Chaps Uncut */}
          <motion.div className="absolute z-[51] top-0 w-full min-h-screen">
            <motion.div className="absolute top-0 w-full min-h-screen">


              <Video muted loop controls={false} className="absolute top-0 min-h-screen w-full" src={chapsUncut}></Video>
              <div className="w-full p-4 md:p-4 min-h-dvh md:min-h-screen flex flex-col justify-end absolute top-0">
                <div className="mx-auto relative bottom-0  flex flex-row w-full justify-between ">
                  <span className="self-end text-primary flex flex-col font-rockstar">
                    <span className="block overflow-hidden mb-[-10px] ">
                      <motion.span className="tracking-tight block text-base md:text-smd">Now Playing</motion.span>
                    </span>
                    <span className="block overflow-hidden">
                      <motion.span className="tracking-tight block text-[1.75rem] md:text-xl">Chaps Uncut</motion.span>
                    </span>

                  </span>
                  <span className=" text-primary hover:opacity-75 ease-in-out duration-300 font-rockstar text-[1.75] md:text-md md:pb-2 self-end underline">
                    <Link href='' >
                      Full Version
                    </Link>
                  </span>

                </div>

              </div>


            </motion.div>
          </motion.div>

        </motion.section>

      </motion.div>

      <div className="min-h-screen w-full">

      </div>
      {/* Spacer that handles the initial video translation */}
      <div ref={spacerInitial} className="spacer z-[100] relative min-h-screen w-full"></div>
      {/* Spacer that scales video full screen */}
      <div ref={spacerScale} className="min-h-screen relative z-[100 ] w-full"></div>

      {/* Spacers for clip Path reveals */}
      <div ref={space} className="min-h-24"></div>
      <div ref={two} className="min-h-screen w-full"></div>
      <div className="min-h-24"></div>
      <div ref={three} className="min-h-screen w-full"></div>
      <div className="min-h-24"></div>
      <div ref={four} className="min-h-screen w-full"></div>
      <div className="min-h-24"></div>
      <div ref={five} className="min-h-screen w-full"></div>
      <div className="min-h-24"></div>
      <div ref={six} className="min-h-screen w-full"></div>
      <Image className="overlay" src={grain} alt='' quality={80} sizes="100vw" />
    </div>


  );
}
