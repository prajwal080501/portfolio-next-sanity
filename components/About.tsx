import React from 'react'
import { motion } from "framer-motion"
type Props = {}

const About = (props: Props) => {
    return (
        <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center pb-42'>
            <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 font-bold text-2l pb-48'>About</h3>

            <motion.img
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{once:true}}
                src="https://lh3.googleusercontent.com/FCn_e3DQ8SEnW0SDmtDRjmohzn83L5Zci3bjmuCXRQSjXk3_qJpi4ISduFwpThA20D8ni7Yq_nav0J_gIEOrY2nMGIiStS-0cg-2tHlRrkZ6SUCdm8K_0lG_Xipq9Y2BDHa43dUF3MgujyCfX6grKMO28u2R1ZDT3Cbe6-Va_Q8ByGRphpOqqlJz2m7HthRbPEhRmpTO4Tj9u1fpBQfmNyjLjo2P6IHLHYLlo8wDaIYzL5nA9ameTWZP4LwoefzOe1VnnQOdqRdUiToxrib0rGadRZmoBSdbZV9x8uTA2QPHtEszZhlfFd_8rM1d3s7TtsMwHcaeiyjFSoO2bTWe5iTjE7Eow9oCH2gwj0JQ-xslkUbT-4aJg8hp9h8rvAwLG7O0SJhAptgYilYpI_ApAiuAppKGRHhzWQ22wQ02hr1a6LmSsjznML5UL_mUUf2wCdJKDezHvXt832WtV1oHUBFsBZO1UEeVWWNo9QyfRFnAEaeI8QXEeeh59QPnuXOf_K-8onA3ANBTf4qmnFPFug8p0wVMVBzVXx5p6sTdAx-rEsyB-Ve_xJj5OZYa0e-dk_4w-44WiH5HKWt3FVfzStvQuYxX39RpS2AgNPG2BuuG5Jf6MZCgnIBqly6slPPn9bfa1BGSXVnaCcnw7S4MrTK0Onl9CK844LdwAkkV1wK-adfuOMmzKgAenQKcUeDxrTY3mFh46drD78nTbcn8k2BXmqvfHdsOKW4ooCmI_bTINjnPHrTfbx6fC7sv90HcVrfjsFPDaL0oXPrsLbEQuOhdIHGgF8l7=w752-h933-no?authuser=1" alt="" className='-mb-20 md:mb-0 flex-shrink-0 w-44 h-44 mt-20 md:mt-0 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px] shadow-2xl shadow-orange-400' />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-2xl md:text-4xl font-semibold mt-10 md:mt-0'>Here is a <span className='underline decoration-orange-400 animate-pulse'>little</span> background</h4>
                <motion.p
                    initial={{ opacity: 0, y: -200 }}
                    whileInView={{ opacity: [0, 0, 0, 0.8, 1], y: 0 }}
                    transition={{ duration: 1.5 }}
                    viewport={{once:true}}
                    className='text-base tracking-wide md:text-xl w-screen md:w-fit p-1 pb-3 md:p-0'>
                    Hi! I&apos;m Prajwal. I&apos;m a senior at Nowrosjee Wadia College under Savitribai Phule Pune University graduating in 2022 with in-depth experience in Web Development domain both in front-end as well as back-end.
                    Familiar with React a JavaScript library. Next JS a React framework. Hands on experience in designing web pages using Vanilla CSS, Bootstrap, Tailwind CSS, Material UI, Styled components.

                </motion.p>
            </div>
        </div>
    )
}

export default About