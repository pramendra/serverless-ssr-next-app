/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  //
  Button,
  ButtonProps,
  Link as ChakraLink,
} from '@chakra-ui/core';

const LinkButton: React.FC<Props> = ({ href, children, ...props }) => {
  return (
    <ChakraLink isExternal href={href} _hover={{ textDecoration: 'none' }}>
      <Button
        size="lg"
        variantColor="green"
        _focus={{ outline: 'none' }}
        {...props}
      >
        {children}
      </Button>
    </ChakraLink>
  );
};

interface Props extends ButtonProps {
  href: string;
}

export default LinkButton;
