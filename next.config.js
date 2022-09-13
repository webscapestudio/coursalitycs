/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    })

    return config
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: "/:path*",
          destination: `https://ca-production.coursalytics.com/:path*`,
        },
      ],
    }
  },

  images: {
    domains: ["ca-production.coursalytics.com"],
    formats: ["image/avif", "image/webp"],
  },
}

module.exports = nextConfig
