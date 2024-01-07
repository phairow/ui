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

    return [
      {
        source: '/:path*',
        headers,
      },
    ]
  },
};

module.exports = nextConfig;
