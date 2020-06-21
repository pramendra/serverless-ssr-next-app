import getConfig from 'next/config';
const { publicRuntimeConfig = {} } = getConfig() || {};
const { assetPrefix } = publicRuntimeConfig;
export { assetPrefix };
