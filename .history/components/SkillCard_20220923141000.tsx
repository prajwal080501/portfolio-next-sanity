import React from 'react'
import { motion } from "framer-motion"
import { Skill, SkillSet } from '../typings';
import { urlFor } from '../sanity';
type Props = {
    directionLeft?: boolean;
    skills: Skill[];
}
const SkillCard = ({ directionLeft, skills }: Props) => {

    return (

        <>
            {skills?.map((skill) => (
                <motion.div
                initial={{opacity:0, y:-200}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1.5}}
                 key={skill._id} className='group relative flex cursor-pointer'>
                    <img
                        src={urlFor(skill.image).url()} alt="" className='h-20 w-20 md:w-24 md:h-24 rounded-full border border-gray-500 object-cover filter group-hover:grayscale duration-300 ease-linear transition ' />
                    <div className='absolute opacity-0 group-hover:opacity-80 transition duratiin-300 ease-in-out'>
                        <div className='flex items-center justify-center  group-hover:bg-white h-20 w-20 md:h-24 md:w-24 rounded-full z-0 duration-300 ease-linear'>
                            <p className='text-3xl font-bold text-black opacity-100'>
                                {skill.progress}%
                            </p>
                        </div>
                    </div>
                </motion.div>
            ))}        </>

    )
}

export default SkillCard