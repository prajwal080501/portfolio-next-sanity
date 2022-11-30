import { Skill, SkillSet } from './../typings.d';
export const fetchSkillset = async () => {
    const res = await fetch('https://portfolio-next-sanity-green.vercel.app/api/getSkillset');


    const data = await res.json();
    const skillset: SkillSet[] = data.skillset;


    return skillset;
}