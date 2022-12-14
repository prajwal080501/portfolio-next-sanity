/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_BASE_URL:"http://localhost:3000",
    NEXT_PUBLIC_SANITY_DATASET: "production",
    NEXT_PUBLIC_SANITY_PROJECT_ID:"h31zqnzw",
  },
}

module.exports = nextConfig
