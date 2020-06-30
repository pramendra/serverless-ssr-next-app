import React from 'react';
import { NextPage } from 'next';

const Page: NextPage = () => {
  const env = process.env.NODE_ENV;

  return <p>Hello World! We\'re in ${env}!</p>;
};

export default Page;
