import React from 'react'
import Image from "next/image"
import image from "../Assets/profile.jpg"
import { motion } from 'framer-motion'
import Link from "next/link"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from './BackgroundCircles'

type Props = {}

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: ["Hi, Prajwal Ladkat here ✌️", "Guy who-loves-coffee.tsx", "<ButLovesToCodeMore />"],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles/>
            <Image src={image} className="relative rounded-full h-52 w-22 mx-auto object-cover" alt="profile" />
            <div className='z-20'>
                <h2 className='text-xs uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[15px]'>Software Engineer</h2>
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