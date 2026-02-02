import type { NextConfig } from "next";
import tailwindcss from '@tailwindcss/vite'

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.css': {
          loaders: ['css-loader'],
        },
      },
    },
  },
  webpack: (config) => {
    config.plugins = config.plugins || [];
    config.plugins.push(tailwindcss());
    return config;
  },
};

export default nextConfig;
