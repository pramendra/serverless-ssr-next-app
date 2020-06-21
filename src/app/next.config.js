const nextConfig = require('./next.config.prod');
const dev = process.env.NODE_ENV !== 'production';

const path = require('path');
module.exports = {
  ...nextConfig,
  distDir: dev ? '.next' : '../../.build/src/app/.next',
  webpack(config, { defaultLoaders }) {
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: [path.join(__dirname), path.join(__dirname, '../')],
      exclude: /node_modules/,
      use: [defaultLoaders.babel],
    });
    return config;
  },
};
