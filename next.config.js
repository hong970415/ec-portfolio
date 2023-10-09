/** @type {import('next').NextConfig} */
function getConfig() {
  console.log('process.env.NODE_ENV', process.env.NODE_ENV)
  if (process.env.NODE_ENV === 'production') {
    return {
      output: 'export',
      basePath: '/ec-portfolio',
      assetPrefix: '/ec-portfolio',
    }
  }
  if (process.env.NODE_ENV === 'test') {
    return {
      output: 'export',
    }
  }
  return {
    output: 'standalone',
  }
}
const nextConfig = {
  reactStrictMode: false,
  ...getConfig(),
}

module.exports = nextConfig
