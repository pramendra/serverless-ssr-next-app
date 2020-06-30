/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  //
  ColorModeProvider,
  CSSReset,
  ThemeProvider,
} from '@chakra-ui/core';
import NextApp from 'next/app';

import theme from '../theme';

export default class App extends NextApp {
  render() {
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
