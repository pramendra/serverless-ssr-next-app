import next from 'next';
import nextConfig from '../app/next.config.prod';
const {
  //
  NODE_ENV,
} = process.env;

const dev = NODE_ENV !== 'production';
const nextApp = next({
  //
  dev,
  dir: 'src/app',
  conf: {
    ...nextConfig,
  },
});

export { nextApp };
