import styled from 'styled-components';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import BasicLayout from '../layout/basic';

import { assetPrefix } from './../../lib/public-config';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Title = styled.h1`
  color: red;
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Home = () => {
  return (
    <BasicLayout>
      <p>hello</p>
      <Title>World</Title>
      <img src={`${assetPrefix}/static/loading.gif`} alt="loading..." />
    </BasicLayout>
  );
};

export default Home;
