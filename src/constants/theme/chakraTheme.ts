import { extendTheme } from '@chakra-ui/react';

export const CHAKRA_THEME = extendTheme({
  colors: { primary: '#000000', secondary: '#000000' },
  styles: {
    global: {
      body: {
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      },
    },
  },
});
