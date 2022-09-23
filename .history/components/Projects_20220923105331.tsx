import React from 'react'
import {motion} from "framer-motion"
type Props = {
    projects: Project[]
}

const  Projects = ({projects}: Props) => {
    const projects = [1, 2, 4, 5, 6]
    return (
        <motion.div

         className='h-screen scroll-smooth flex relative items-center overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto z-0'>
            <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 font-bold md:text-2xl pb-10 mb-48 z-20'>Projects</h3>
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-hide'>
                {projects.map(((project, i) => (
                    <div key={i} className='w-screen  flex-shrink-0 flex flex-col space-y-5 p-20md:p-44  h-screen bg-black/10 items-center justify-center snap-center text-center'>
                        <motion.img
                        initial={{y:-300, opacity:0}}
                        transition={{duration:1.2}}
                        whileInView={{opacity:1, y:0}}
                        viewport={{once:true}}
                         src="https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Logo.wine.svg" className='h-80 w-80 mx-auto' alt="" />
                        <div className='space-y-10  px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-2xl md:text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#f7ab0a]/50'>  Case Study {i + 1} of {projects.length}:</span> Tesla Clone
                            </h4>
                            <p className='px-5 mx-auto text-lg text-center md:text-left'>
                                Tesla Clone a frontend design clone developed using React JS, Styled Components, React Router and hosted using Firebase.
                            </p>
                        </div>
                    </div>
                )))}
            </div>
            <div

             className='w-full mb-24 absolute top-[30%] blur-sm -z-20 bg-orange-400/10 left-0 h-[300px] mt-10  -skew-y-12 animate-pulse' />
        </motion.div>
    )
}

export default Projects