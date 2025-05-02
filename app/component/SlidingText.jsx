"use client"
import { motion } from "motion/react"
export default function SlidingText( {isInView, children }) {


    return (

      

        <motion.span className="inline-block" initial="initial" whileInView="inView"  transition={{delay:1, staggerChildren:0.005, ease: "easeInOut"}}>
            {children.split(' ').map((i, key) => {
                if(key == (children.split(" ").length - 1))
                return (
                    <span key={key}>
                        <span className="inline-block overflow-hidden min-h-max" x={key}>
                            <motion.span className="inline-block h-max" transition={{duration:0.8, ease:"easeInOut"}} variants={{ initial: { y: "120%" }, inView: { y: 0 } }} i={key}>
                            {i}
                            </motion.span>
                        </span>
                    </span>
                )
                else
                return (

                    <span key={key}>
                    <span className="inline-block overflow-hidden h-max" x={key}>
                        <motion.span className="inline-block h-max" transition={{duration:0.8, ease:"easeInOut"}} variants={{ initial: { y: 100 }, inView: { y: -2 } }} i={key}>
                        {i}&nbsp;
                        </motion.span>
                    </span>
                </span>
                )
            })}
        </motion.span>
    )
}
