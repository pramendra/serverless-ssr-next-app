import React from 'react';
import {
  //
  Flex,
  FlexProps,
  useColorMode,
} from '@chakra-ui/core';

const Container: React.FC<FlexProps> = (props) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg={containerTheme.bg[colorMode]}
      color={containerTheme.color[colorMode]}
      {...props}
    />
  );
};

const containerTheme = {
  bg: {
    light: 'gray.50',
    dark: 'gray.900',
  },
  color: {
    light: 'black',
    dark: 'white',
  },
};

export default Container;
