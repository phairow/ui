/** @type {import('next').NextConfig} */

const assetPrefix = process.env.NODE_ENV === 'production' 
  ? 'https://ratekl.com/'
  : 'http://ratekl.com.local:3000/';

const nextConfig = {
  assetPrefix,
  output: 'standalone',
};

module.exports = nextConfig;
