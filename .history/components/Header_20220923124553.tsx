import React from 'react'
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import { Social } from '../typings'
type Props = { social: Social[] }

const Header = ({ social }: Props) => {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div
                initial={{ x: -500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className='flex flex-row items-center'>
                {/* Social Icons */}
                {social.map((item) => (
                    <SocialIcon key={item._id} fgColor="gray" bgColor="transparent" target="_blank" url={item.url} network={item.title} className='hover:scale-125 duration-300 hover:text-white' />

                ))}


            </motion.div>
            <motion.div
                initial={{ x: 500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className='flex flex-row items-center text-gray-300 cursor-pointer'>
                <SocialIcon network='email' className='cursor-pointer hover:scale-125 duration-300' fgColor='gray' bgColor='transparent ' />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in touch</p>
            </motion.div>
        </header>
    )
}

export default Header   