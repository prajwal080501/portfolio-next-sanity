import { Skill, SkillSet } from './../typings.d';
export const fetchSkillset = async () => {
    const res = await fetch('http://localhost:3000/api/getSkillset');


    const data = await res.json();
    const skillset: SkillSet[] = data.skillset;


    return skillset;
}