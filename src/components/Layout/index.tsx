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
        <title>Book Library</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/normalize.css" />
        <link rel="stylesheet" href="css/font-awesome.min.css" />
        <link rel="stylesheet" href="css/icomoon.css" />
        <link rel="stylesheet" href="css/jquery-ui.css" />
        <link rel="stylesheet" href="css/owl.carousel.css" />
        <link rel="stylesheet" href="css/transitions.css" />
        <link rel="stylesheet" href="css/main.css" />
        <link rel="stylesheet" href="css/color.css" />
        <link rel="stylesheet" href="css/responsive.css" /> */}
      </Head>
      <div className="tg-home tg-homeone">
        <div id="tg-wrapper" className="tg-wrapper tg-haslayout">
          <Header />
          {children}
          <Footer />
        </div>
        {/* <script src="js/vendor/jquery-library.js"></script>
        <script src="js/vendor/bootstrap.min.js"></script>
        <script src="https://maps.google.com/maps/api/js?key=AIzaSyCR-KEWAVCn52mSdeVeTqZjtqbmVJyfSus&amp;language=en"></script>
        <script src="js/owl.carousel.min.js"></script>
        <script src="js/jquery.vide.min.js"></script>
        <script src="js/countdown.js"></script>
        <script src="js/jquery-ui.js"></script>
        <script src="js/parallax.js"></script>
        <script src="js/countTo.js"></script>
        <script src="js/appear.js"></script>
        <script src="js/gmap3.js"></script>
        <script src="js/main.js"></script> */}
      </div>
    </div>
  );
}

export default Layout;
