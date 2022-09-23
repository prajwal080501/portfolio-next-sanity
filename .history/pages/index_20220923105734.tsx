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
import { Skill, Project, PageInfo, Social, Info } from '../typings'
import { fetchSocials } from '../utils/fetchSocials'
import { fetchInfo } from '../utils/fetchInfo'

type Props = {
  skills: Skill[]
  projects: Project[]
  pageInfo: PageInfo
  social: Social[]
  info: Info
}

const Home = ({ pageInfo,info, projects, skills, social }: Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0'>
      <Head>
        <title>Prajwal&apos;s Portfolio</title>
      </Head>
      <Header  social={social}/>

      <section id="hero" className='snap-start'>
        <Hero info={info} />
      </section>

      <section id="about" className='snap-center'>
        <About info={info}/>
      </section>

      {/* <section id="experience" className='snap-center'>
        <WorkExperience />
      </section> */}

      <section id="skills" className='snap-start'>
        <Skills skills={skills} />
      </section>

      <section id="projects" className='snap-start'>
        <Projects projects={projects} />
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
  const info: Info = await fetchInfo();
  const projects: Project[] = await fetchProjects();
  const skills: Skill[] = await fetchSkills();
  const social: Social[] = await fetchSocials();

  return {
    props: {
      skills,
      projects,
      pageInfo,
      social,
      info
    },
    revalidate: 10,
  }
}
