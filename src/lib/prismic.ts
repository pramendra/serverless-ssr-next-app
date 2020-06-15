const InMemoryCache = require('apollo-cache-inmemory').InMemoryCache;
const ApolloClient = require('apollo-client').ApolloClient;
const PrismicLink = require('apollo-link-prismic').PrismicLink;

export const prismicClient = (uri: string, accessToken: string): any => {
  const client = new ApolloClient({
    link: PrismicLink({
      uri,
      accessToken,
    }),
    cache: new InMemoryCache(),
  });
  return client;
};
