import React from 'react'
import { motion } from "framer-motion"
import { Project } from "../typings"
import { urlFor } from '../sanity'
import Skills from './Skills'
type Props = {
    projects: Project[]
}

const Projects = ({ projects }: Props) => {
    return (
        <motion.div

            className='h-screen scroll-smooth flex relative items-center overflow-hidden flex-col text-left md:flex-row max-w-full overflow-y-scroll scrollbar-hide md:overflow-y-hidden justify-evenly mx-auto z-0'>
            <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 font-bold md:text-2xl pb-10 mb-48 z-20'>Projects</h3>
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-hide'>
                {projects.map(((project, i) => (
                    <div key={project._id} className='w-screen  flex-shrink-0 flex flex-col space-y-5 p-20 md:p-44  h-screen bg-black/10 items-center justify-center snap-center text-center overflow-y-scroll md:overflow-y-hidden scrollbar-hide'>
                        <motion.img
                            initial={{ y: -300, opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            src={urlFor(project.image).url()} className='h-52 md:h-[30vh] mt-44 md:mt-0 w-[60vh]  mx-auto' alt="" />
                        <div className='space-y-10  px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-2xl md:text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#f7ab0a]/50'>  Case Study {i + 1} of {projects.length}:</span> {project.title}
                            </h4>
                            <p className='px-5 mx-auto w-fit text-lg text-center md:text-left'>
                                {project.summary} </p>

                            <div className='flex items-center h-1/2 mb-10 space-x-4 justify-center'>

                                {project.technologies.map(tech => (
                                    <div>
                                        <img src={urlFor(tech.image).url()} className="h-fit w-24" alt="" />
                                    </div>
                                ))}
                            </div>
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