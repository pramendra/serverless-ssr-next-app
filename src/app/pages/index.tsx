/* eslint-disable @typescript-eslint/no-unused-vars */
import { Heading, Stack } from '@chakra-ui/core';

import Container from '../components/Container';
import LinkButton from '../components/LinkButton';
import ThemeSwitch from '../components/ThemeSwitch';

const IndexPage: React.FC = () => {
  return (
    <Container w="100%" height="100vh" justifyContent="center">
      <Heading size="2xl">NextJS + Chakra UI + TypeScript</Heading>
      <Stack isInline mt={8}>
        <LinkButton href="http://chakra-ui.com">Chakra UI</LinkButton>
        <LinkButton href="https://nextjs.org/" variant="outline">
          Next JS
        </LinkButton>
      </Stack>
      <ThemeSwitch />
    </Container>
  );
};

export default IndexPage;
