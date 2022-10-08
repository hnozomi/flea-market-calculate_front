import { ChakraProvider } from '@chakra-ui/react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';

import { CHAKRA_THEME } from '../constants';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={CHAKRA_THEME}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};
export default MyApp;
