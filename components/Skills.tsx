import React from 'react'
import { motion } from "framer-motion"
import Skill from './Skill'
type Props = {}

const Skills = (props: Props) => {
    return (
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
        viewport={{once:true}}
        className='h-screen scroll-smooth flex flex-col relative xl:flex-row max-w-[2000px] xl:px-10 min-h-screen text-center md:text-left xl:space-y-0 mx-auto items-center justify-center'>
            <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 font-bold md:text-2xl pb-10 mb-48 z-10'>Skills</h3>

            <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'> Hover over a skill for current proficiency</h3>


            <div className='grid grid-cols-4 gap-5 mt-16'>
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </div>
        </motion.div>
    )
}

export default Skills