import React from 'react'
import { motion } from "framer-motion"
import { Info } from '../typings'
type Props = {
    info:Info
}

const About = (info: Props) => {
    return (
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
        viewport={{once:true}}
         className='flex scroll-smooth flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center pb-42'>
            <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 font-bold md:text-2xl pb-48'>About</h3>

            <motion.img
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}

                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1.1 }}
                src="https://i.postimg.cc/T3Qvy90P/about-2.jpg" alt="" className='-mb-20 md:mb-0 flex-shrink-0 w-44 h-44 mt-32 md:mt-0 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px] drop-shadow-2xl' />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-2xl md:text-4xl font-semibold mt-24 md:mt-0'>Here is a <span className='underline decoration-orange-400 animate-pulse'>little</span> background</h4>
                <motion.p
                    initial={{ opacity: 0, y: -200 }}
                    whileInView={{ opacity: [0, 0, 0, 0.8, 1], y: 0 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    className='text-base tracking-wide md:text-xl w-screen md:w-fit p-1 pb-3 md:p-0'>
                    Hi! I&apos;m Prajwal. I&apos;m a senior at Nowrosjee Wadia College under Savitribai Phule Pune University graduating in 2022 with in-depth experience in Web Development domain both in front-end as well as back-end.
                    Familiar with React a JavaScript library. Next JS a React framework. Hands on experience in designing web pages using Vanilla CSS, Bootstrap, Tailwind CSS, Material UI, Styled components.
                </motion.p>
            </div>
        </motion.div>
    )
}

export default About