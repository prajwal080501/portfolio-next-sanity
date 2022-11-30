import { Skill, SkillSet } from './../typings.d';
export const fetchSkillset = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkillset`);


    const data = await res.json();
    const skillset: SkillSet[] = data.skillset;


    return skillset;
}