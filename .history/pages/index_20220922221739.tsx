import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import { motion } from "framer-motion"
import { fetchSkills } from '../utils/fetchSkills'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { Skill, Project, PageInfo, Social } from '../typings'
import { fetchSocials } from '../utils/fetchSocials'

type Props = {
  skills: Skill[]
  projects: Project[]
  pageInfo: PageInfo
  social: Social[]
}

const Home = ({ pageInfo, projects, skills, social }: Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0'>
      <Head>
        <title>Prajwal&apos;s Portfolio</title>
      </Head>
      <Header  social={social}/>

      <section id="hero" className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className='snap-center'>
        <About />
      </section>

      <section id="experience" className='snap-center'>
        <WorkExperience />
      </section>

      <section id="skills" className='snap-start'>
        <Skills />
      </section>

      <section id="projects" className='snap-start'>
        <Projects />
      </section>

      <section id='contact' className='snap-start'>
        <Contact />
      </section>


      <footer className='sticky bottom-20 md:bottom-5 w-full cursor-pointer'>
        <div
          className='flex items-center justify-center'>
          <Link href="#hero">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, rotate: 360 }}
              transition={{ duration: 1.5 }}
              className='w-10 h-10 rounded-full hover:scale-110 drop-shadow-xl filter grayscale hover:grayscale-0 duration-200 ease-in-out  cursor-pointer' src="https://i.postimg.cc/Kz4s0dMK/Orange-and-White-Modern-Simple-Technology-You-Tube-Icon.png" alt="" />
          </Link>



        </div>
      </footer>

    </div>
  )
}

export default Home



export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const projects: Project[] = await fetchProjects();
  const skills: Skill[] = await fetchSkills();
  const social: Social[] = await fetchSocials();

  return {
    props: {
      skills,
      projects,
      pageInfo,
      social
    },
    revalidate: 10,
  }
}
