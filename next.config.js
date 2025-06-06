// ===============================
// 📁 next.config.js - Next.js Configuration
// ===============================
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Enable experimental features if needed
  experimental: {
    // Add any experimental features here
  },

  // Webpack configuration for import aliases
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add import alias support
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
      '@/components': path.resolve(__dirname, 'components'),
      '@/utils': path.resolve(__dirname, 'utils'),
      '@/styles': path.resolve(__dirname, 'styles'),
      '@/pages': path.resolve(__dirname, 'pages'),
    };

    return config;
  },

  // Environment variables
  env: {
    CUSTOM_KEY: 'my-value',
  },

  // Image configuration
  images: {
    domains: [],
    // Add any external image domains here
  },

  // Headers for security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;