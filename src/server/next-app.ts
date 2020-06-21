const next = require('next');
const nextConfig = require('../app/next.config.prod');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({
  //
  dev,
  dir: 'src/app',
  conf: {
    ...nextConfig,
  },
});

export { nextApp };
