import { NextPageContext } from 'next';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Error = ({ statusCode }: any) => {
  return statusCode;
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
