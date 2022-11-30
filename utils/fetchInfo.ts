import {  Info } from './../typings.d';
export const fetchInfo = async () => {
    const res = await fetch('http://localhost:3000/api/getInfo');


    const data = await res.json();

    const info: Info = data.info;


    return info;
}

