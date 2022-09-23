import React from 'react'
import Image from "next/image"
import image from "../Assets/profile.jpg"
import { motion } from 'framer-motion'
import Link from "next/link"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from './BackgroundCircles'
import { Info } from '../typings'
import { urlFor } from '../sanity'

type Props = {info: Info}

const Hero = ({info}: Props) => {
    const [text, count] = useTypewriter({
        words: [`Hi ${info.name} here`, "Guy who-loves-coffee.tsx", "<ButLovesToCodeMore />"],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className='h-screen scroll-smooth flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: [0, 0.1, 0.4, 0.6, 0.8, 1], y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
            >
                <img src={urlFor(info.heroImage).url()} className="relative drop-shadow-2xl rounded-full h-52 w-22 mx-auto object-cover" alt="profile" />

            </motion.div>
            <div className='z-20'>
                <h2 className='text-xs md:text-md uppercase text-gray-400 pb-2 tracking-[10px] md:tracking-[15px]'>{info.role}</h2>
                <h1 className='text-2xl md:text-4xl lg:text-6xl font-semibold px-10'>
                    <span className=' '>{text}</span>
                    <Cursor cursorColor='#f7ab0a' />
                </h1>
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2.5 }}
                    className='p-8 justify-center flex'>
                    <Link href="#about"><button className="heroButton">About</button></Link>
                    <Link href="#skills"><button className="heroButton">Skills</button></Link>
                    <Link href="#experience"><button className="heroButton">Experience</button></Link>
                    <Link href="#projects"><button className="heroButton">Projects</button></Link>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero