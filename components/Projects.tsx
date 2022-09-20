import React from 'react'

type Props = {}

const Projects = (props: Props) => {
    const projects = [1,2,4,5,6]
    return (
        <div className='h-screen scroll-smooth flex relative items-center overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto z-0'>
            <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 font-bold md:text-2xl pb-10 mb-48 z-10'>Projects</h3>
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  '>
                {projects.map(((project,i)=> (
                    <div key={i} className='w-screen flex-shrink-0 flex flex-col space-y-5 p-20md:p-44 h-screen items-center justify-center snap-center text-center'>
                        <img src="https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Logo.wine.svg" className='h-80 w-80 mx-auto' alt="" />
                        <div>
                            <h4>
                                Case Study{i+1  } of {projects.length}: Tesla Clone
                            </h4>
                        </div>
                    </div>
                )))}
            </div>
            <div className='w-full mb-24 absolute top-[30%] bg-orange-400/10 left-0 h-[300px] mt-10  -skew-y-12 ' />
        </div>
    )
}

export default Projects