import React from 'react'
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
const Header = () => {
    return (
        <header className='sticky p-5 top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div
                initial={{ x: -500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}

                className='flex flex-row  items-center justify-center'>
                {/* Social Icons */}
                <SocialIcon fgColor="gray" bgColor="transparent" url="https://www.youtube.com/channel/UCQdcHzF8tGL_Ska-Hj5x0RQ" network="youtube" className='hover:scale-125 duration-300 hover:text-white' />
                <SocialIcon fgColor="gray" bgColor="transparent" url="https://www.instagram.com/prajwalladkat0805/" network="instagram" className='hover:scale-125 duration-300 hover:text-white' />
                <SocialIcon fgColor="gray" bgColor="transparent" url="https://github.com/prajwal080501" network="github" className='hover:scale-125 duration-300 hover:text-white' />

            </motion.div>
            <motion.div
                initial={{ x: 500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className=' flex flex-row items-center'>
                <SocialIcon network='email' className='cursor-pointer hover:scale-125 duration-300' fgColor='gray' bgColor='transparent ' />
                <p className='hidden md:inline-flex text-sm text-gray-400 uppercase'>Get In Touch</p>
            </motion.div>
        </header>
    )
}

export default Header