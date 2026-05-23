import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const stylesPath = path.join(__dirname, 'src/shared/styles')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [stylesPath],
  },
  webpack(config) {
    config.resolve.alias['@styles'] = stylesPath
    config.resolve.alias['@views'] = path.join(__dirname, 'src/views')

    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    )

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: [{ loader: '@svgr/webpack', options: { icon: true } }],
      },
    )
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
  images: {
    unoptimized: false,
  },
}

export default nextConfig
