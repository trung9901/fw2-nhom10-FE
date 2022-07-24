/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { LayoutProps } from '../../models/Layout';
import Head from 'next/head';
// type Props = {};

function Layout({ children }: LayoutProps) {
  return (
    <div className="">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title></title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="">
        <div id="" className="">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
