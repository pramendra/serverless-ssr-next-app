const dev = process.env.NODE_ENV !== 'production';
const { BASE_PATH = '' } = process.env;
module.exports = {
  assetPrefix: BASE_PATH,
  publicRuntimeConfig: {
    assetPrefix: BASE_PATH,
    PRISMIC_GRAPHQL_URI: process.env.PRISMIC_GRAPHQL_URI,
    PRISMIC_ACCESS_TOKEN: process.env.PRISMIC_ACCESS_TOKEN,
  },
  dev,
  dir: 'src/app',
};
