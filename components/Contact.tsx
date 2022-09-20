import React from 'react'
import { motion } from "framer-motion"
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import Link from "next/link"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const Contact = ({ }: Props) => {
  const [text, count] = useTypewriter({
    words: ["Lets Talk", "Discuss", "Grow"],
    loop: true,
    delaySpeed: 2000,
  })

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:iamprajwalladkat@gmail?subject=${formData.subject}&body=Hi my name is ${formData.name}, ${formData.message}`
  }
  return (

    <div className='h-screen flex flex-col  overflow-y-scroll md:overflow-y-hidden relative items-center justify-center text-center md:text-left'>
      <h4 className='absolute top-12 uppercase tracking-[20px] text-gray-500 font-bold md:text-2xl z-20'>Contact</h4>
      <div className='flex flex-col space-y-8'>
        <h4 className='text-2xl md:text-4xl mt-40 pt-32 md:pt-0  font-semibold text-center'>
          I have got just what you need.{" "}
          <span className='underline decoration-[#f7ab0a]/50'>{text}</span>
        </h4>
        <div className='space-y-10  p-2 w-[90vw] md:w-[40vw] rounded-md drop-shadow-2xl mx-auto'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='h-7 w-7 text-[#f7ab0a] animate-pulse' />
            <Link href="tel:+919834477319">
              <a className='text-2xl'>
                Contact Me
              </a>
            </Link>

          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='h-7 w-7 text-[#f7ab0a] animate-pulse' />
            <Link href="mailto:iamprajwalladkat@gmail.com ">
              <a className='text-2xl'>
                Email Me
              </a>
            </Link>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='h-7 w-7 text-[#f7ab0a] animate-pulse' />
            <p className='text-2xl'>
              Location
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col px-8 w-[95vw] pb-16 space-y-2 md:w-fit mx-auto'>
          <div className='flex space-y-2 md:space-y-0 md:space-x-2 flex-col md:flex-row w-full '>
            <input {...register('name')} className='contactInfo' placeholder="Name" type="text" />
            <input {...register('email')} className='contactInfo' placeholder="Email" type="text" />
          </div>
          <input {...register("subject")} className='contactInfo' placeholder='Subject' type="text" />
          <textarea {...register("message")} placeholder='Message' className="contactInfo" id="" />
          <button type='submit' className='bg-gradient-to-r from-[#f7ab0a]/100 to-orange-600 py-3 px-10 rounded-md text-black font-bold text-lg hover:bg-[#f7ab0a]/60 active:scale-95 duration-200 ease-in-out shadow-xl active:shadow-sm'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact