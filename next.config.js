/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    apiUrl: 'http://localhost:3000',
  }
}

module.exports = nextConfig