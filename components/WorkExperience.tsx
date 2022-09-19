import React from 'react'
import { motion } from "framer-motion"
import ExperienceCard from './ExperienceCard'

type Props = {}

const WorkExperience = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
            <motion.h3
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className='absolute top-20 uppercase tracking-[20px] text-gray-500 font-bold md:text-2xl pb-10 mb-48 z-10' >Experience</motion.h3>
            <div className='w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory mt-0 md:mt-48 scrollbar-hide'>
                {/* Experience Card */}
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />




            </div>
        </motion.div>
    )
}

export default WorkExperience