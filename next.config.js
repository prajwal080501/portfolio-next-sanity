/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_BASE_URL:"https://portfolio-next-sanity-green.vercel.app/",
    NEXT_PUBLIC_SANITY_DATASET: "production",
    NEXT_PUBLIC_SANITY_PROJECT_ID:"h31zqnzw",
  },
}

module.exports = nextConfig
