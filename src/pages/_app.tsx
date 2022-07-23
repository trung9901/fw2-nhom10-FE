import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { AppPropsWithLayout } from '../models/Layout';
import { SWRConfig } from 'swr';
import instance from '../api/instance';

import '../assets/css/bootstrap.min.css';
import '../assets/css/normalize.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/icomoon.css';
// import '../assets/css/jquery-ui.css';
import '../assets/css/owl.carousel.css';
import '../assets/css/transitions.css';
import '../assets/css/main.css';
import '../assets/css/color.css';
import '../assets/css/responsive.css';



function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? Layout;
  return (
    <LayoutWrapper>
      <SWRConfig
        value={{
          refreshInterval: 3000,
          fetcher: async (url) => await instance.get(url),
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </LayoutWrapper>
  );
}

export default MyApp;
