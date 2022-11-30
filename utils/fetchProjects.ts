import { Project } from './../typings.d';
export const fetchProjects = async () => {
    const res = await fetch('https://portfolio-next-sanity-green.vercel.app/api/getProjects');


    const data = await res.json();

    const projects: Project[] = data.projects;


    return projects;
}

