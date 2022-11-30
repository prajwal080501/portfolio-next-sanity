import { Skill } from './../typings.d';
export const fetchSkills = async () => {
    const res = await fetch('https://portfolio-next-sanity-green.vercel.app/api/getSkills');


    const data = await res.json();
    const skills: Skill[] = data.skills;


    return skills;
}