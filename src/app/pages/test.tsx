import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NextPage, GetStaticProps } from 'next';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';

import gql from 'graphql-tag';
import { initializeApollo } from '../lib/apollo-client';

export const ALL_POSTS_QUERY = gql`
  {
    allJobs {
      edges {
        node {
          title
          hero
        }
      }
    }
  }
`;
const TestPage: NextPage = () => {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    ALL_POSTS_QUERY
  );
  console.warn('>>>', loading, error, data, fetchMore, networkStatus);
  return <h1>dd</h1>;
};

type StaticPageProps = {
  initialApolloState: NormalizedCacheObject;
};
export const getStaticProps: GetStaticProps<StaticPageProps> = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_POSTS_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    unstable_revalidate: 1,
  };
};

export default TestPage;
