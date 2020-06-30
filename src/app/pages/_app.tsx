import React from 'react';
import NextApp, { AppProps as NextAppProps } from 'next/app';
import {
  //
  ColorModeProvider,
  CSSReset,
  ThemeProvider,
} from '@chakra-ui/core';

import theme from '../theme';

export default class App extends NextApp<NextAppProps> {
  render(): JSX.Element {
    const { Component } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <ColorModeProvider value="light">
          <CSSReset />
          <Component />
        </ColorModeProvider>
      </ThemeProvider>
    );
  }
}
