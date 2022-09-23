import React from 'react'
import { motion } from "framer-motion"
import { Skill } from '../typings';
import { urlFor } from '../sanity';
type Props = {
    directionLeft?: boolean;
    skills: Skill[]
}

const SkillCard = ({ directionLeft, skills }: Props) => {
    return (
        <div className='group relative flex cursor-pointer'>
            <div>
                

            </div>

        </div>
    )
}

export default SkillCard