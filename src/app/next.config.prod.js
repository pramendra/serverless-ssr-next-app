const dev = process.env.NODE_ENV !== 'production';
const { BASE_PATH = '' } = process.env;
module.exports = {
  assetPrefix: BASE_PATH,
  publicRuntimeConfig: {
    assetPrefix: BASE_PATH,
  },
  dev,
  dir: 'src/app',
};
