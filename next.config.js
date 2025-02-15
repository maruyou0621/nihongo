/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // App Router (appディレクトリ) を有効化
  },
  output: 'standalone', // Vercelで正しく動作するように
};

module.exports = nextConfig;