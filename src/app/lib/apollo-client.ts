import { useMemo } from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { PrismicLink } from 'apollo-link-prismic';
import { publicRuntimeConfig } from './../lib/public-config';

let apolloClient: ApolloClient<NormalizedCacheObject>;
const isBrowser = typeof window === 'undefined';

const createApolloClient = () => {
  const { PRISMIC_GRAPHQL_URI, PRISMIC_ACCESS_TOKEN } = publicRuntimeConfig;
  return new ApolloClient({
    ssrMode: !isBrowser,
    link: PrismicLink({
      uri: PRISMIC_GRAPHQL_URI,
      accessToken: PRISMIC_ACCESS_TOKEN,
    }),

    cache: new InMemoryCache(),
  });
};

export const initializeApollo = (
  initialState: NormalizedCacheObject | null = null
): ApolloClient<NormalizedCacheObject> => {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  if (!isBrowser) return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};

export const useApollo = (
  initialState: NormalizedCacheObject
): ApolloClient<NormalizedCacheObject> => {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
};
