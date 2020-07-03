const {
  //
  BASE_PATH = '',
  PRISMIC_GRAPHQL_URI = '',
  PRISMIC_ACCESS_TOKEN = '',
  NODE_ENV,
} = process.env;
const dev = NODE_ENV !== 'production';

module.exports = {
  assetPrefix: BASE_PATH,
  publicRuntimeConfig: {
    assetPrefix: BASE_PATH,
    PRISMIC_GRAPHQL_URI,
    PRISMIC_ACCESS_TOKEN,
  },
  dev,
  dir: 'src/app',
};
