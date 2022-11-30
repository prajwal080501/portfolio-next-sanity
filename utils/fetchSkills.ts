import { Skill } from './../typings.d';
export const fetchSkills = async () => {
    const res = await fetch('http://localhost:3000/api/getSkills');


    const data = await res.json();
    const skills: Skill[] = data.skills;


    return skills;
}