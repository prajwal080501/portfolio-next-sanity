import React from 'react'
import Image from "next/image"
import {motion} from "framer-motion"
type Props = {}
import facebook from "../Assets/facebook.png"
const ExperienceCard = (props: Props) => {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-fit pb-32 h-fit md:w-[600px] xl:w-[700px] xl:h-[650px] snap-center p-10 mt-44 md:mt-0 bg-[#292929] transition-all overflow-hidden opacity-40 hover:opacity-100 duration-200 ease-in-out cursor-pointer overflow-y-hidden scrollbar-hide'>
            <motion.img
            initial={{y:-100, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duartion:1.5}}
            viewport={{once:true}}
             src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png" alt="" className='w-32 h-32 mt-10 border border-white md:mt-5 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'/>
             <div className='px-0 md:px-10 '>
                <h4 className='text-4xl font-light'>CEO of PJ Business Groups</h4>
                <p className='font-bold text-2xl mt-1'>PJ Business Groups</p>
                <div className='space-x-6 flex my-2 py-3'>
                    <img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg" className='h-10 w-10 rounded-full hover:scale-105 duration-300 cursor-pointer' alt="" />
                    <img src="https://code.visualstudio.com/assets/images/code-stable.png" className='h-10 w-10 rounded-full  hover:scale-105 duration-300 cursor-pointer' alt="" />
                    <img src="https://cdn-icons-png.flaticon.com/512/143/143655.png" className='h-10 w-10 rounded-full hover:scale-105 duration-300 cursor-pointer' alt="" />
                </div>
                <p className='uppercase py-3 text-gray-300'>
                    Started... - Ended...
                </p>
                <ul className='list-disc space-y-2 pb-5 mb-3 ml-5 text-lg'>
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                    <li>Summary Points</li>

                </ul>
             </div>
        </article>
    )
}

export default ExperienceCard