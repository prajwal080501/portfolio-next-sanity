import {  Info } from './../typings.d';
export const fetchInfo = async () => {
    const res = await fetch('https://portfolio-next-sanity-green.vercel.app/api/getInfo');


    const data = await res.json();

    const info: Info = data.info;


    return info;
}

