/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  //
  Flex,
  FlexProps,
  useColorMode,
} from '@chakra-ui/core';

const Container: React.FC<Props> = (props) => {
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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props extends FlexProps {}

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
