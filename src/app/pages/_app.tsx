import React from 'react';
import { AppProps } from 'next/app';
import {
  //
  ColorModeProvider,
  CSSReset,
  ThemeProvider,
} from '@chakra-ui/core';
import { ApolloProvider } from '@apollo/react-hooks';
import { useApollo } from '../lib/apollo-client';
import { defaultTheme, defaultGetGlobalConfig } from '../ui/theme';

export default function App({ Component, pageProps }: AppProps): any {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CSSReset config={defaultGetGlobalConfig} />
      <ColorModeProvider>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ColorModeProvider>
    </ThemeProvider>
  );
}
