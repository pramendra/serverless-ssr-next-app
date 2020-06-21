// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

import { assetPrefix } from './../../lib/public-config';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const IndexPage = () => {
  return <img src={`${assetPrefix}/static/loading.gif`} alt="loading..." />;
};

export default IndexPage;
