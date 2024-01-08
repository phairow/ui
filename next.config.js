/** @type {import('next').NextConfig} */

const assetPrefix = process.env.NODE_ENV === 'production' 
  ? 'https://static.ratekl.com/'
  : 'http://www.ratekl.com.local:3000/';

const nextConfig = {
  assetPrefix,
  output: 'standalone',
  async headers() {
    const headers = [
      {
        key: 'Content-Security-Policy',
        value: 'frame-ancestors \'self\''
      },
      {
        key: 'Referrer-Policy',
        value: 'origin-when-cross-origin'
      },
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
      },
      {
        key: 'X-DNS-Prefetch-Control',
        value: 'on',
      },
      {
        key: 'X-Frame-Options',
        value: 'sameorigin'
      },
      {
        key: 'vary',
        value: 'Accept-Encoding'
      },
    ];

    if (process.env.NODE_ENV === 'production') {
      headers.push({
        key: 'Strict-Transport-Security',
        value: 'max-age=31536000; includeSubDomains;'
      });
    }

    const headerList = [
      {
        source: '/:path*',
        headers,
      },
    ];

    if (process.env.NODE_ENV !== 'production') {
      headerList.push({
        // matching all API routes
        source: "/_next/static/:path*",
        headers: [
            { key: "Access-Control-Allow-Credentials", value: "true" },
            { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
            { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
            { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      });
    }

    return headerList;
  },
};

module.exports = nextConfig;
