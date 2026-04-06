import nextMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/zh/about',
      },
      {
        source: '/daily',
        destination: '/zh/daily',
      },
      {
        source: '/daily/:slug*',
        destination: '/zh/daily/:slug*',
      },
      {
        source: '/posts',
        destination: '/zh/posts',
      },
      {
        source: '/posts/:slug*',
        destination: '/zh/posts/:slug*',
      },
      {
        source: '/:prefix(public)?/image/:path*',
        destination: '/image/:path*',
      },
    ];
  },
  experimental: {
    mdxRs: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // 优化字体加载
  optimizeFonts: true,
  // 优化构建输出
  output: 'standalone',
  // 优化图片加载
  images: {
    domains: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
