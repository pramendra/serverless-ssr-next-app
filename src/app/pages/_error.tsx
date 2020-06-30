import React from 'react';
import { NextPageContext, NextPage } from 'next';

interface Props {
  statusCode?: number;
}

const Error: NextPage<Props> = ({ statusCode }: Props) => <p>{statusCode}</p>;

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
