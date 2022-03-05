import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';

import { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { useColorScheme } from '@mantine/hooks';
import Layout from './Structure/Layout/Layout.component';

function App() {
  // State
  const preferredColorScheme = useColorScheme();
  const [colourScheme, setColourScheme] =
    useState<ColorScheme>(preferredColorScheme);

  // Functions
  const toggleColourScheme = (value?: ColorScheme) =>
    setColourScheme(value || (colourScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider
      colorScheme={colourScheme}
      toggleColorScheme={toggleColourScheme}
    >
      <MantineProvider theme={{ colorScheme: colourScheme }} withGlobalStyles>
        <Layout />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
