import { Social } from './../typings.d';
export const fetchSocials = async () => {
    const res = await fetch('https://portfolio-next-sanity-green.vercel.app/api/getSocials');


    const data = await res.json();

    const socials: Social[] = data.socials;


    return socials;
}