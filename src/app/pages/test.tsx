import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NextPage, GetStaticProps } from 'next';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';

import gql from 'graphql-tag';
import { initializeApollo } from './../lib/apollo-client';

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
  const {
    //
    loading,
    data,
    // error,
    // fetchMore,
    // networkStatus,
  } = useQuery(ALL_POSTS_QUERY);
  if (loading === true) return <h1>loading</h1>;

  const { allJobs } = data;
  const { edges } = allJobs;

  const listitems = edges.map((node: any) => {
    const {
      node: { title },
    } = node;
    const { text } = title[0];
    return <li key={text}>{text}</li>;
  });

  return <ul>{listitems}</ul>;
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
