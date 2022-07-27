//
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import 'bootstrap/dist/css/bootstrap.css';
//
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { AppPropsWithLayout } from '../models/Layout';
import { SWRConfig } from 'swr';
import instance from '../api/instance';

import '../assets/admin/css/style.css';
import '../assets/client/bizweb.dktcdn.net/100/374/880/themes/748270/assets/main.scss.css?1656725435979';
import '../assets/client/bizweb.dktcdn.net/100/374/880/themes/748270/assets/index.scss.css?1656725435979';
import '../assets/client/bizweb.dktcdn.net/100/374/880/themes/748270/assets/responsive.scss.css?1656725435979';
import '../assets/client/bizweb.dktcdn.net/100/374/880/themes/748270/assets/quickviews_popup_cart.scss.css?1656725435979';
import '../assets/client/bizweb.dktcdn.net/100/374/880/themes/748270/assets/sidebar_style.scss.css?1656725435979';
import '../assets/client/bizweb.dktcdn.net/100/374/880/themes/748270/assets/collection_style.scss.css?1656725435979';
import '../assets/client/bizweb.dktcdn.net/100/374/880/themes/748270/assets/product_style.scss.css?1656725435979';
import '../assets/client/bizweb.dktcdn.net/100/374/880/themes/748270/assets/blog_article_style.scss.css?1656725435979';
import '../assets/client/bizweb.dktcdn.net/100/374/880/themes/748270/assets/cartpage.scss.css?1656725435979';
import { useEffect } from 'react';
import React from 'react';
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // useEffect(() => {
  //   typeof document !== undefined
  //     ? require('bootstrap/dist/js/bootstrap')
  //     : null;
  // }, []);

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
