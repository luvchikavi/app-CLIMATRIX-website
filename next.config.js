const withNextIntl = require('next-intl/plugin')('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        // Printed conference QR codes point here; the checker lives on the app.
        source: '/cbam-check',
        destination: 'https://app.climatrix.co/cbam-check',
        permanent: false,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Allow SVG files
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

module.exports = withNextIntl(nextConfig)
