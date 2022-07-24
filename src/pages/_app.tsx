import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { AppPropsWithLayout } from '../models/Layout';
import { SWRConfig } from 'swr';
import instance from '../api/instance';

import '../assets/admin/css/style.css';

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
