import { Project, Info } from './../typings.d';
export const fetchProjects = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getInfo`);


    const data = await res.json();

    const info: Info = data.info;


    return info;
}

