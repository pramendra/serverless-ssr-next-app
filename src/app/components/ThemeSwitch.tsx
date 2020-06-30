import React from 'react';
import {
  //
  Switch,
  useColorMode,
} from '@chakra-ui/core';

const ThemeSwitch: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Switch
      position="fixed"
      top="1rem"
      right="1rem"
      color="cyan"
      isChecked={colorMode === 'dark'}
      onChange={toggleColorMode}
    />
  );
};

export default ThemeSwitch;
