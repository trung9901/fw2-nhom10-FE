import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Clyde - Free Bootstrap 4 Template by Colorlib</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/normalize.css" />
        <link rel="stylesheet" href="css/font-awesome.min.css" />
        <link rel="stylesheet" href="css/icomoon.css" />
        <link rel="stylesheet" href="css/jquery-ui.css" />
        <link rel="stylesheet" href="css/owl.carousel.css" />
        <link rel="stylesheet" href="css/transitions.css" />
        <link rel="stylesheet" href="css/main.css" />
        <link rel="stylesheet" href="css/color.css" />
        <link rel="stylesheet" href="css/responsive.css" />

      </Head>
      <div id="tg-wrapper" className="tg-wrapper tg-haslayout">
        {/*************************************
				Header Start
		**************************************/}
        <header id="tg-header" className="tg-header tg-haslayout">
          <div className="tg-topbar">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <ul className="tg-addnav">
                    <li>
                      <a href="javascript:void(0);">
                        <i className="icon-envelope" />
                        <em>Contact</em>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <i className="icon-question-circle" />
                        <em>Help</em>
                      </a>
                    </li>
                  </ul>
                  <div className="dropdown tg-themedropdown tg-currencydropdown">
                    <a
                      href="javascript:void(0);"
                      id="tg-currenty"
                      className="tg-btnthemedropdown"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="icon-earth" />
                      <span>Currency</span>
                    </a>
                    <ul
                      className="dropdown-menu tg-themedropdownmenu"
                      aria-labelledby="tg-currenty"
                    >
                      <li>
                        <a href="javascript:void(0);">
                          <i>£</i>
                          <span>British Pound</span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <i>$</i>
                          <span>Us Dollar</span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <i>€</i>
                          <span>Euro</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tg-userlogin">
                    <figure>
                      <a href="javascript:void(0);">
                        <img src="images/users/img-01.jpg" alt="image description" />
                      </a>
                    </figure>
                    <span>Hi, John</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tg-middlecontainer">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <strong className="tg-logo">
                    <a href="index-2.html">
                      <img src="images/logo.png" alt="company name here" />
                    </a>
                  </strong>
                  <div className="tg-wishlistandcart">
                    <div className="dropdown tg-themedropdown tg-wishlistdropdown">
                      <a
                        href="javascript:void(0);"
                        id="tg-wishlisst"
                        className="tg-btnthemedropdown"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="tg-themebadge">3</span>
                        <i className="icon-heart" />
                        <span>Wishlist</span>
                      </a>
                      <div
                        className="dropdown-menu tg-themedropdownmenu"
                        aria-labelledby="tg-wishlisst"
                      >
                        <div className="tg-description">
                          <p>No products were added to the wishlist!</p>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown tg-themedropdown tg-minicartdropdown">
                      <a
                        href="javascript:void(0);"
                        id="tg-minicart"
                        className="tg-btnthemedropdown"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="tg-themebadge">3</span>
                        <i className="icon-cart" />
                        <span>$123.00</span>
                      </a>
                      <div
                        className="dropdown-menu tg-themedropdownmenu"
                        aria-labelledby="tg-minicart"
                      >
                        <div className="tg-minicartbody">
                          <div className="tg-minicarproduct">
                            <figure>
                              <img
                                src="images/products/img-01.jpg"
                                alt="image description"
                              />
                            </figure>
                            <div className="tg-minicarproductdata">
                              <h5>
                                <a href="javascript:void(0);">
                                  Our State Fair Is A Great Function
                                </a>
                              </h5>
                              <h6>
                                <a href="javascript:void(0);">$ 12.15</a>
                              </h6>
                            </div>
                          </div>
                          <div className="tg-minicarproduct">
                            <figure>
                              <img
                                src="images/products/img-02.jpg"
                                alt="image description"
                              />
                            </figure>
                            <div className="tg-minicarproductdata">
                              <h5>
                                <a href="javascript:void(0);">Bring Me To Light</a>
                              </h5>
                              <h6>
                                <a href="javascript:void(0);">$ 12.15</a>
                              </h6>
                            </div>
                          </div>
                          <div className="tg-minicarproduct">
                            <figure>
                              <img
                                src="images/products/img-03.jpg"
                                alt="image description"
                              />
                            </figure>
                            <div className="tg-minicarproductdata">
                              <h5>
                                <a href="javascript:void(0);">
                                  Have Faith In Your Soul
                                </a>
                              </h5>
                              <h6>
                                <a href="javascript:void(0);">$ 12.15</a>
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="tg-minicartfoot">
                          <a className="tg-btnemptycart" href="javascript:void(0);">
                            <i className="fa fa-trash-o" />
                            <span>Clear Your Cart</span>
                          </a>
                          <span className="tg-subtotal">
                            Subtotal: <strong>35.78</strong>
                          </span>
                          <div className="tg-btns">
                            <a
                              className="tg-btn tg-active"
                              href="javascript:void(0);"
                            >
                              View Cart
                            </a>
                            <a className="tg-btn" href="javascript:void(0);">
                              Checkout
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tg-searchbox">
                    <form className="tg-formtheme tg-formsearch">
                      <fieldset>
                        <input
                          type="text"
                          name="search"
                          className="typeahead form-control"
                          placeholder="Search by title, author, keyword, ISBN..."
                        />
                        <button type="submit">
                          <i className="icon-magnifier" />
                        </button>
                      </fieldset>
                      <a href="javascript:void(0);">+ Advanced Search</a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tg-navigationarea">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <nav id="tg-nav" className="tg-nav">
                    <div className="navbar-header">
                      <button
                        type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#tg-navigation"
                        aria-expanded="false"
                      >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                      </button>
                    </div>
                    <div
                      id="tg-navigation"
                      className="collapse navbar-collapse tg-navigation"
                    >
                      <ul>
                        <li className="menu-item-has-children menu-item-has-mega-menu">
                          <a href="javascript:void(0);">All Categories</a>
                          <div className="mega-menu">
                            <ul className="tg-themetabnav" role="tablist">
                              <li role="presentation" className="active">
                                <a
                                  href="#artandphotography"
                                  aria-controls="artandphotography"
                                  role="tab"
                                  data-toggle="tab"
                                >
                                  Art &amp; Photography
                                </a>
                              </li>
                              <li role="presentation">
                                <a
                                  href="#biography"
                                  aria-controls="biography"
                                  role="tab"
                                  data-toggle="tab"
                                >
                                  Biography
                                </a>
                              </li>
                              <li role="presentation">
                                <a
                                  href="#childrensbook"
                                  aria-controls="childrensbook"
                                  role="tab"
                                  data-toggle="tab"
                                >
                                  Children’s Book
                                </a>
                              </li>
                              <li role="presentation">
                                <a
                                  href="#craftandhobbies"
                                  aria-controls="craftandhobbies"
                                  role="tab"
                                  data-toggle="tab"
                                >
                                  Craft &amp; Hobbies
                                </a>
                              </li>
                              <li role="presentation">
                                <a
                                  href="#crimethriller"
                                  aria-controls="crimethriller"
                                  role="tab"
                                  data-toggle="tab"
                                >
                                  Crime &amp; Thriller
                                </a>
                              </li>
                              <li role="presentation">
                                <a
                                  href="#fantasyhorror"
                                  aria-controls="fantasyhorror"
                                  role="tab"
                                  data-toggle="tab"
                                >
                                  Fantasy &amp; Horror
                                </a>
                              </li>
                              <li role="presentation">
                                <a
                                  href="#fiction"
                                  aria-controls="fiction"
                                  role="tab"
                                  data-toggle="tab"
                                >
                                  Fiction
                                </a>
                              </li>
                              <li role="presentation">
                                <a
                                  href="#fooddrink"
                                  aria-controls="fooddrink"
                                  role="tab"
                                  data-toggle="tab"
                                >
                                  Food &amp; Drink
                                </a>
                              </li>
                              <li role="presentation">
                                <a
                                  href="#graphicanimemanga"
                                  aria-controls="graphicanimemanga"
                                  role="tab"
                                  data-toggle="tab"
                                >
                                  Graphic, Anime &amp; Manga
                                </a>
                              </li>
                              <li role="presentation">
                                <a
                                  href="#sciencefiction"
                                  aria-controls="sciencefiction"
                                  role="tab"
                                  data-toggle="tab"
                                >
                                  Science Fiction
                                </a>
                              </li>
                            </ul>
                            <div className="tab-content tg-themetabcontent">
                              <div
                                role="tabpanel"
                                className="tab-pane active"
                                id="artandphotography"
                              >
                                <ul>
                                  <li>
                                    <div className="tg-linkstitle">
                                      <h2>Architecture</h2>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="products.html">Tough As Nails</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Pro Grease Monkey</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Building Memories</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Bulldozer Boyz</a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Build Or Leave On Us
                                        </a>
                                      </li>
                                    </ul>
                                    <a className="tg-btnviewall" href="products.html">
                                      View All
                                    </a>
                                  </li>
                                  <li>
                                    <div className="tg-linkstitle">
                                      <h2>Art Forms</h2>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="products.html">
                                          Consectetur adipisicing
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Aelit sed do eiusmod
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Tempor incididunt labore
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Dolore magna aliqua
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">Ut enim ad minim</a>
                                      </li>
                                    </ul>
                                    <a className="tg-btnviewall" href="products.html">
                                      View All
                                    </a>
                                  </li>
                                  <li>
                                    <div className="tg-linkstitle">
                                      <h2>History</h2>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="products.html">
                                          Veniam quis nostrud
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">Exercitation</a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Laboris nisi ut aliuip
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">Commodo conseat</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Duis aute irure</a>
                                      </li>
                                    </ul>
                                    <a className="tg-btnviewall" href="products.html">
                                      View All
                                    </a>
                                  </li>
                                </ul>
                                <ul>
                                  <li>
                                    <figure>
                                      <img
                                        src="images/img-01.png"
                                        alt="image description"
                                      />
                                    </figure>
                                    <div className="tg-textbox">
                                      <h3>
                                        More Than<span>12,0657,53</span>Books
                                        Collection
                                      </h3>
                                      <div className="tg-description">
                                        <p>
                                          Consectetur adipisicing elit sed doe eiusmod
                                          tempor incididunt laebore toloregna aliqua
                                          enim.
                                        </p>
                                      </div>
                                      <a className="tg-btn" href="products.html">
                                        view all
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div
                                role="tabpanel"
                                className="tab-pane"
                                id="biography"
                              >
                                <ul>
                                  <li>
                                    <div className="tg-linkstitle">
                                      <h2>History</h2>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="products.html">
                                          Veniam quis nostrud
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">Exercitation</a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Laboris nisi ut aliuip
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">Commodo conseat</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Duis aute irure</a>
                                      </li>
                                    </ul>
                                    <a className="tg-btnviewall" href="products.html">
                                      View All
                                    </a>
                                  </li>
                                  <li>
                                    <div className="tg-linkstitle">
                                      <h2>Architecture</h2>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="products.html">Tough As Nails</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Pro Grease Monkey</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Building Memories</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Bulldozer Boyz</a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Build Or Leave On Us
                                        </a>
                                      </li>
                                    </ul>
                                    <a className="tg-btnviewall" href="products.html">
                                      View All
                                    </a>
                                  </li>
                                  <li>
                                    <div className="tg-linkstitle">
                                      <h2>Art Forms</h2>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="products.html">
                                          Consectetur adipisicing
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Aelit sed do eiusmod
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Tempor incididunt labore
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Dolore magna aliqua
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">Ut enim ad minim</a>
                                      </li>
                                    </ul>
                                    <a className="tg-btnviewall" href="products.html">
                                      View All
                                    </a>
                                  </li>
                                </ul>
                                <ul>
                                  <li>
                                    <figure>
                                      <img
                                        src="images/img-01.png"
                                        alt="image description"
                                      />
                                    </figure>
                                    <div className="tg-textbox">
                                      <h3>
                                        More Than<span>12,0657,53</span>Books
                                        Collection
                                      </h3>
                                      <div className="tg-description">
                                        <p>
                                          Consectetur adipisicing elit sed doe eiusmod
                                          tempor incididunt laebore toloregna aliqua
                                          enim.
                                        </p>
                                      </div>
                                      <a className="tg-btn" href="products.html">
                                        view all
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div
                                role="tabpanel"
                                className="tab-pane"
                                id="childrensbook"
                              >
                                <ul>
                                  <li>
                                    <div className="tg-linkstitle">
                                      <h2>Architecture</h2>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="products.html">Tough As Nails</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Pro Grease Monkey</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Building Memories</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Bulldozer Boyz</a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Build Or Leave On Us
                                        </a>
                                      </li>
                                    </ul>
                                    <a className="tg-btnviewall" href="products.html">
                                      View All
                                    </a>
                                  </li>
                                  <li>
                                    <div className="tg-linkstitle">
                                      <h2>Art Forms</h2>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="products.html">
                                          Consectetur adipisicing
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Aelit sed do eiusmod
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Tempor incididunt labore
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Dolore magna aliqua
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">Ut enim ad minim</a>
                                      </li>
                                    </ul>
                                    <a className="tg-btnviewall" href="products.html">
                                      View All
                                    </a>
                                  </li>
                                  <li>
                                    <div className="tg-linkstitle">
                                      <h2>History</h2>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="products.html">
                                          Veniam quis nostrud
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">Exercitation</a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Laboris nisi ut aliuip
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">Commodo conseat</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Duis aute irure</a>
                                      </li>
                                    </ul>
                                    <a className="tg-btnviewall" href="products.html">
                                      View All
                                    </a>
                                  </li>
                                </ul>
                                <ul>
                                  <li>
                                    <figure>
                                      <img
                                        src="images/img-01.png"
                                        alt="image description"
                                      />
                                    </figure>
                                    <div className="tg-textbox">
                                      <h3>
                                        More Than<span>12,0657,53</span>Books
                                        Collection
                                      </h3>
                                      <div className="tg-description">
                                        <p>
                                          Consectetur adipisicing elit sed doe eiusmod
                                          tempor incididunt laebore toloregna aliqua
                                          enim.
                                        </p>
                                      </div>
                                      <a className="tg-btn" href="products.html">
                                        view all
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div
                                role="tabpanel"
                                className="tab-pane"
                                id="craftandhobbies"
                              >
                                <ul>
                                  <li>
                                    <div className="tg-linkstitle">
                                      <h2>History</h2>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="products.html">
                                          Veniam quis nostrud
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">Exercitation</a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Laboris nisi ut aliuip
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">Commodo conseat</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Duis aute irure</a>
                                      </li>
                                    </ul>
                                    <a className="tg-btnviewall" href="products.html">
                                      View All
                                    </a>
                                  </li>
                                  <li>
                                    <div className="tg-linkstitle">
                                      <h2>Architecture</h2>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="products.html">Tough As Nails</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Pro Grease Monkey</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Building Memories</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Bulldozer Boyz</a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Build Or Leave On Us
                                        </a>
                                      </li>
                                    </ul>
                                    <a className="tg-btnviewall" href="products.html">
                                      View All
                                    </a>
                                  </li>
                                  <li>
                                    <div className="tg-linkstitle">
                                      <h2>Art Forms</h2>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="products.html">
                                          Consectetur adipisicing
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Aelit sed do eiusmod
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Tempor incididunt labore
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Dolore magna aliqua
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">Ut enim ad minim</a>
                                      </li>
                                    </ul>
                                    <a className="tg-btnviewall" href="products.html">
                                      View All
                                    </a>
                                  </li>
                                </ul>
                                <ul>
                                  <li>
                                    <figure>
                                      <img
                                        src="images/img-01.png"
                                        alt="image description"
                                      />
                                    </figure>
                                    <div className="tg-textbox">
                                      <h3>
                                        More Than<span>12,0657,53</span>Books
                                        Collection
                                      </h3>
                                      <div className="tg-description">
                                        <p>
                                          Consectetur adipisicing elit sed doe eiusmod
                                          tempor incididunt laebore toloregna aliqua
                                          enim.
                                        </p>
                                      </div>
                                      <a className="tg-btn" href="products.html">
                                        view all
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div
                                role="tabpanel"
                                className="tab-pane"
                                id="crimethriller"
                              >
                                <ul>
                                  <li>
                                    <div className="tg-linkstitle">
                                      <h2>Architecture</h2>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="products.html">Tough As Nails</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Pro Grease Monkey</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Building Memories</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Bulldozer Boyz</a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Build Or Leave On Us
                                        </a>
                                      </li>
                                    </ul>
                                    <a className="tg-btnviewall" href="products.html">
                                      View All
                                    </a>
                                  </li>
                                  <li>
                                    <div className="tg-linkstitle">
                                      <h2>Art Forms</h2>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="products.html">
                                          Consectetur adipisicing
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Aelit sed do eiusmod
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Tempor incididunt labore
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Dolore magna aliqua
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">Ut enim ad minim</a>
                                      </li>
                                    </ul>
                                    <a className="tg-btnviewall" href="products.html">
                                      View All
                                    </a>
                                  </li>
                                  <li>
                                    <div className="tg-linkstitle">
                                      <h2>History</h2>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="products.html">
                                          Veniam quis nostrud
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">Exercitation</a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Laboris nisi ut aliuip
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">Commodo conseat</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Duis aute irure</a>
                                      </li>
                                    </ul>
                                    <a className="tg-btnviewall" href="products.html">
                                      View All
                                    </a>
                                  </li>
                                </ul>
                                <ul>
                                  <li>
                                    <figure>
                                      <img
                                        src="images/img-01.png"
                                        alt="image description"
                                      />
                                    </figure>
                                    <div className="tg-textbox">
                                      <h3>
                                        More Than<span>12,0657,53</span>Books
                                        Collection
                                      </h3>
                                      <div className="tg-description">
                                        <p>
                                          Consectetur adipisicing elit sed doe eiusmod
                                          tempor incididunt laebore toloregna aliqua
                                          enim.
                                        </p>
                                      </div>
                                      <a className="tg-btn" href="products.html">
                                        view all
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div
                                role="tabpanel"
                                className="tab-pane"
                                id="fantasyhorror"
                              >
                                <ul>
                                  <li>
                                    <div className="tg-linkstitle">
                                      <h2>History</h2>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="products.html">
                                          Veniam quis nostrud
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">Exercitation</a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Laboris nisi ut aliuip
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">Commodo conseat</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Duis aute irure</a>
                                      </li>
                                    </ul>
                                    <a className="tg-btnviewall" href="products.html">
                                      View All
                                    </a>
                                  </li>
                                  <li>
                                    <div className="tg-linkstitle">
                                      <h2>Architecture</h2>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="products.html">Tough As Nails</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Pro Grease Monkey</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Building Memories</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Bulldozer Boyz</a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Build Or Leave On Us
                                        </a>
                                      </li>
                                    </ul>
                                    <a className="tg-btnviewall" href="products.html">
                                      View All
                                    </a>
                                  </li>
                                  <li>
                                    <div className="tg-linkstitle">
                                      <h2>Art Forms</h2>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="products.html">
                                          Consectetur adipisicing
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Aelit sed do eiusmod
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Tempor incididunt labore
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Dolore magna aliqua
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">Ut enim ad minim</a>
                                      </li>
                                    </ul>
                                    <a className="tg-btnviewall" href="products.html">
                                      View All
                                    </a>
                                  </li>
                                </ul>
                                <ul>
                                  <li>
                                    <figure>
                                      <img
                                        src="images/img-01.png"
                                        alt="image description"
                                      />
                                    </figure>
                                    <div className="tg-textbox">
                                      <h3>
                                        More Than<span>12,0657,53</span>Books
                                        Collection
                                      </h3>
                                      <div className="tg-description">
                                        <p>
                                          Consectetur adipisicing elit sed doe eiusmod
                                          tempor incididunt laebore toloregna aliqua
                                          enim.
                                        </p>
                                      </div>
                                      <a className="tg-btn" href="products.html">
                                        view all
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div role="tabpanel" className="tab-pane" id="fiction">
                                <ul>
                                  <li>
                                    <div className="tg-linkstitle">
                                      <h2>Architecture</h2>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="products.html">Tough As Nails</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Pro Grease Monkey</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Building Memories</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Bulldozer Boyz</a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Build Or Leave On Us
                                        </a>
                                      </li>
                                    </ul>
                                    <a className="tg-btnviewall" href="products.html">
                                      View All
                                    </a>
                                  </li>
                                  <li>
                                    <div className="tg-linkstitle">
                                      <h2>Art Forms</h2>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="products.html">
                                          Consectetur adipisicing
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Aelit sed do eiusmod
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Tempor incididunt labore
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Dolore magna aliqua
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">Ut enim ad minim</a>
                                      </li>
                                    </ul>
                                    <a className="tg-btnviewall" href="products.html">
                                      View All
                                    </a>
                                  </li>
                                  <li>
                                    <div className="tg-linkstitle">
                                      <h2>History</h2>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="products.html">
                                          Veniam quis nostrud
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">Exercitation</a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Laboris nisi ut aliuip
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">Commodo conseat</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Duis aute irure</a>
                                      </li>
                                    </ul>
                                    <a className="tg-btnviewall" href="products.html">
                                      View All
                                    </a>
                                  </li>
                                </ul>
                                <ul>
                                  <li>
                                    <figure>
                                      <img
                                        src="images/img-01.png"
                                        alt="image description"
                                      />
                                    </figure>
                                    <div className="tg-textbox">
                                      <h3>
                                        More Than<span>12,0657,53</span>Books
                                        Collection
                                      </h3>
                                      <div className="tg-description">
                                        <p>
                                          Consectetur adipisicing elit sed doe eiusmod
                                          tempor incididunt laebore toloregna aliqua
                                          enim.
                                        </p>
                                      </div>
                                      <a className="tg-btn" href="products.html">
                                        view all
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div
                                role="tabpanel"
                                className="tab-pane"
                                id="fooddrink"
                              >
                                <ul>
                                  <li>
                                    <div className="tg-linkstitle">
                                      <h2>History</h2>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="products.html">
                                          Veniam quis nostrud
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">Exercitation</a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Laboris nisi ut aliuip
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">Commodo conseat</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Duis aute irure</a>
                                      </li>
                                    </ul>
                                    <a className="tg-btnviewall" href="products.html">
                                      View All
                                    </a>
                                  </li>
                                  <li>
                                    <div className="tg-linkstitle">
                                      <h2>Architecture</h2>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="products.html">Tough As Nails</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Pro Grease Monkey</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Building Memories</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Bulldozer Boyz</a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Build Or Leave On Us
                                        </a>
                                      </li>
                                    </ul>
                                    <a className="tg-btnviewall" href="products.html">
                                      View All
                                    </a>
                                  </li>
                                  <li>
                                    <div className="tg-linkstitle">
                                      <h2>Art Forms</h2>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="products.html">
                                          Consectetur adipisicing
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Aelit sed do eiusmod
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Tempor incididunt labore
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Dolore magna aliqua
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">Ut enim ad minim</a>
                                      </li>
                                    </ul>
                                    <a className="tg-btnviewall" href="products.html">
                                      View All
                                    </a>
                                  </li>
                                </ul>
                                <ul>
                                  <li>
                                    <figure>
                                      <img
                                        src="images/img-01.png"
                                        alt="image description"
                                      />
                                    </figure>
                                    <div className="tg-textbox">
                                      <h3>
                                        More Than<span>12,0657,53</span>Books
                                        Collection
                                      </h3>
                                      <div className="tg-description">
                                        <p>
                                          Consectetur adipisicing elit sed doe eiusmod
                                          tempor incididunt laebore toloregna aliqua
                                          enim.
                                        </p>
                                      </div>
                                      <a className="tg-btn" href="products.html">
                                        view all
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div
                                role="tabpanel"
                                className="tab-pane"
                                id="graphicanimemanga"
                              >
                                <ul>
                                  <li>
                                    <div className="tg-linkstitle">
                                      <h2>Architecture</h2>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="products.html">Tough As Nails</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Pro Grease Monkey</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Building Memories</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Bulldozer Boyz</a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Build Or Leave On Us
                                        </a>
                                      </li>
                                    </ul>
                                    <a className="tg-btnviewall" href="products.html">
                                      View All
                                    </a>
                                  </li>
                                  <li>
                                    <div className="tg-linkstitle">
                                      <h2>Art Forms</h2>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="products.html">
                                          Consectetur adipisicing
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Aelit sed do eiusmod
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Tempor incididunt labore
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Dolore magna aliqua
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">Ut enim ad minim</a>
                                      </li>
                                    </ul>
                                    <a className="tg-btnviewall" href="products.html">
                                      View All
                                    </a>
                                  </li>
                                  <li>
                                    <div className="tg-linkstitle">
                                      <h2>History</h2>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="products.html">
                                          Veniam quis nostrud
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">Exercitation</a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Laboris nisi ut aliuip
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">Commodo conseat</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Duis aute irure</a>
                                      </li>
                                    </ul>
                                    <a className="tg-btnviewall" href="products.html">
                                      View All
                                    </a>
                                  </li>
                                </ul>
                                <ul>
                                  <li>
                                    <figure>
                                      <img
                                        src="images/img-01.png"
                                        alt="image description"
                                      />
                                    </figure>
                                    <div className="tg-textbox">
                                      <h3>
                                        More Than<span>12,0657,53</span>Books
                                        Collection
                                      </h3>
                                      <div className="tg-description">
                                        <p>
                                          Consectetur adipisicing elit sed doe eiusmod
                                          tempor incididunt laebore toloregna aliqua
                                          enim.
                                        </p>
                                      </div>
                                      <a className="tg-btn" href="products.html">
                                        view all
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div
                                role="tabpanel"
                                className="tab-pane"
                                id="sciencefiction"
                              >
                                <ul>
                                  <li>
                                    <div className="tg-linkstitle">
                                      <h2>History</h2>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="products.html">
                                          Veniam quis nostrud
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">Exercitation</a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Laboris nisi ut aliuip
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">Commodo conseat</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Duis aute irure</a>
                                      </li>
                                    </ul>
                                    <a className="tg-btnviewall" href="products.html">
                                      View All
                                    </a>
                                  </li>
                                  <li>
                                    <div className="tg-linkstitle">
                                      <h2>Architecture</h2>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="products.html">Tough As Nails</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Pro Grease Monkey</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Building Memories</a>
                                      </li>
                                      <li>
                                        <a href="products.html">Bulldozer Boyz</a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Build Or Leave On Us
                                        </a>
                                      </li>
                                    </ul>
                                    <a className="tg-btnviewall" href="products.html">
                                      View All
                                    </a>
                                  </li>
                                  <li>
                                    <div className="tg-linkstitle">
                                      <h2>Art Forms</h2>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="products.html">
                                          Consectetur adipisicing
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Aelit sed do eiusmod
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Tempor incididunt labore
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">
                                          Dolore magna aliqua
                                        </a>
                                      </li>
                                      <li>
                                        <a href="products.html">Ut enim ad minim</a>
                                      </li>
                                    </ul>
                                    <a className="tg-btnviewall" href="products.html">
                                      View All
                                    </a>
                                  </li>
                                </ul>
                                <ul>
                                  <li>
                                    <figure>
                                      <img
                                        src="images/img-01.png"
                                        alt="image description"
                                      />
                                    </figure>
                                    <div className="tg-textbox">
                                      <h3>
                                        More Than<span>12,0657,53</span>Books
                                        Collection
                                      </h3>
                                      <div className="tg-description">
                                        <p>
                                          Consectetur adipisicing elit sed doe eiusmod
                                          tempor incididunt laebore toloregna aliqua
                                          enim.
                                        </p>
                                      </div>
                                      <a className="tg-btn" href="products.html">
                                        view all
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="menu-item-has-children current-menu-item">
                          <a href="javascript:void(0);">Home</a>
                          <ul className="sub-menu">
                            <li className="current-menu-item">
                              <a href="index-2.html">Home V one</a>
                            </li>
                            <li>
                              <a href="indexv2.html">Home V two</a>
                            </li>
                            <li>
                              <a href="indexv3.html">Home V three</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="javascript:void(0);">Authors</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="authors.html">Authors</a>
                            </li>
                            <li>
                              <a href="authordetail.html">Author Detail</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="products.html">Best Selling</a>
                        </li>
                        <li>
                          <a href="products.html">Weekly Sale</a>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="javascript:void(0);">Latest News</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="newslist.html">News List</a>
                            </li>
                            <li>
                              <a href="newsgrid.html">News Grid</a>
                            </li>
                            <li>
                              <a href="newsdetail.html">News Detail</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contactus.html">Contact</a>
                        </li>
                        <li className="menu-item-has-children current-menu-item">
                          <a href="javascript:void(0);">
                            <i className="icon-menu" />
                          </a>
                          <ul className="sub-menu">
                            <li className="menu-item-has-children">
                              <a href="aboutus.html">Products</a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="products.html">Products</a>
                                </li>
                                <li>
                                  <a href="productdetail.html">Product Detail</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="aboutus.html">About Us</a>
                            </li>
                            <li>
                              <a href="404error.html">404 Error</a>
                            </li>
                            <li>
                              <a href="comingsoon.html">Coming Soon</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/*************************************
				Header End
		**************************************/}
        {/*************************************
					Best Selling Start
			**************************************/}
        <section className="tg-sectionspace tg-haslayout">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="tg-sectionhead">
                  <h2>
                    <span>People’s Choice</span>Bestselling Books
                  </h2>
                  <a className="tg-btn" href="javascript:void(0);">
                    View All
                  </a>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div
                  id="tg-bestsellingbooksslider"
                  className="tg-bestsellingbooksslider tg-bestsellingbooks owl-carousel"
                >
                  <div className="item">
                    <div className="tg-postbook">
                      <figure className="tg-featureimg">
                        <div className="tg-bookimg">
                          <div className="tg-frontcover">
                            <img
                              src="images/books/img-01.jpg"
                              alt="image description"
                            />
                          </div>
                          <div className="tg-backcover">
                            <img
                              src="images/books/img-01.jpg"
                              alt="image description"
                            />
                          </div>
                        </div>
                        <a className="tg-btnaddtowishlist" href="javascript:void(0);">
                          <i className="icon-heart" />
                          <span>add to wishlist</span>
                        </a>
                      </figure>
                      <div className="tg-postbookcontent">
                        <ul className="tg-bookscategories">
                          <li>
                            <a href="javascript:void(0);">Adventure</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Fun</a>
                          </li>
                        </ul>
                        <div className="tg-themetagbox">
                          <span className="tg-themetag">sale</span>
                        </div>
                        <div className="tg-booktitle">
                          <h3>
                            <a href="javascript:void(0);">Help Me Find My Stomach</a>
                          </h3>
                        </div>
                        <span className="tg-bookwriter">
                          By: <a href="javascript:void(0);">Angela Gunning</a>
                        </span>
                        <span className="tg-stars">
                          <span />
                        </span>
                        <span className="tg-bookprice">
                          <ins>$25.18</ins>
                          <del>$27.20</del>
                        </span>
                        <a
                          className="tg-btn tg-btnstyletwo"
                          href="javascript:void(0);"
                        >
                          <i className="fa fa-shopping-basket" />
                          <em>Add To Basket</em>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="tg-postbook">
                      <figure className="tg-featureimg">
                        <div className="tg-bookimg">
                          <div className="tg-frontcover">
                            <img
                              src="images/books/img-02.jpg"
                              alt="image description"
                            />
                          </div>
                          <div className="tg-backcover">
                            <img
                              src="images/books/img-02.jpg"
                              alt="image description"
                            />
                          </div>
                        </div>
                        <a className="tg-btnaddtowishlist" href="javascript:void(0);">
                          <i className="icon-heart" />
                          <span>add to wishlist</span>
                        </a>
                      </figure>
                      <div className="tg-postbookcontent">
                        <ul className="tg-bookscategories">
                          <li>
                            <a href="javascript:void(0);">Adventure</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Fun</a>
                          </li>
                        </ul>
                        <div className="tg-themetagbox">
                          <span className="tg-themetag">sale</span>
                        </div>
                        <div className="tg-booktitle">
                          <h3>
                            <a href="javascript:void(0);">Drive Safely, No Bumping</a>
                          </h3>
                        </div>
                        <span className="tg-bookwriter">
                          By: <a href="javascript:void(0);">Angela Gunning</a>
                        </span>
                        <span className="tg-stars">
                          <span />
                        </span>
                        <span className="tg-bookprice">
                          <ins>$25.18</ins>
                          <del>$27.20</del>
                        </span>
                        <a
                          className="tg-btn tg-btnstyletwo"
                          href="javascript:void(0);"
                        >
                          <i className="fa fa-shopping-basket" />
                          <em>Add To Basket</em>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="tg-postbook tg-notag">
                      <figure className="tg-featureimg">
                        <div className="tg-bookimg">
                          <div className="tg-frontcover">
                            <img
                              src="images/books/img-03.jpg"
                              alt="image description"
                            />
                          </div>
                          <div className="tg-backcover">
                            <img
                              src="images/books/img-03.jpg"
                              alt="image description"
                            />
                          </div>
                        </div>
                        <a className="tg-btnaddtowishlist" href="javascript:void(0);">
                          <i className="icon-heart" />
                          <span>add to wishlist</span>
                        </a>
                      </figure>
                      <div className="tg-postbookcontent">
                        <ul className="tg-bookscategories">
                          <li>
                            <a href="javascript:void(0);">Adventure</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Fun</a>
                          </li>
                        </ul>
                        <div className="tg-booktitle">
                          <h3>
                            <a href="javascript:void(0);">
                              Let The Good Times Roll Up
                            </a>
                          </h3>
                        </div>
                        <span className="tg-bookwriter">
                          By: <a href="javascript:void(0);">Angela Gunning</a>
                        </span>
                        <span className="tg-stars">
                          <span />
                        </span>
                        <span className="tg-bookprice">
                          <ins>$25.18</ins>
                          <del>$27.20</del>
                        </span>
                        <a
                          className="tg-btn tg-btnstyletwo"
                          href="javascript:void(0);"
                        >
                          <i className="fa fa-shopping-basket" />
                          <em>Add To Basket</em>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="tg-postbook">
                      <figure className="tg-featureimg">
                        <div className="tg-bookimg">
                          <div className="tg-frontcover">
                            <img
                              src="images/books/img-04.jpg"
                              alt="image description"
                            />
                          </div>
                          <div className="tg-backcover">
                            <img
                              src="images/books/img-04.jpg"
                              alt="image description"
                            />
                          </div>
                        </div>
                        <a className="tg-btnaddtowishlist" href="javascript:void(0);">
                          <i className="icon-heart" />
                          <span>add to wishlist</span>
                        </a>
                      </figure>
                      <div className="tg-postbookcontent">
                        <ul className="tg-bookscategories">
                          <li>
                            <a href="javascript:void(0);">Adventure</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Fun</a>
                          </li>
                        </ul>
                        <div className="tg-themetagbox">
                          <span className="tg-themetag">sale</span>
                        </div>
                        <div className="tg-booktitle">
                          <h3>
                            <a href="javascript:void(0);">
                              Our State Fair Is A Great State Fair
                            </a>
                          </h3>
                        </div>
                        <span className="tg-bookwriter">
                          By: <a href="javascript:void(0);">Angela Gunning</a>
                        </span>
                        <span className="tg-stars">
                          <span />
                        </span>
                        <span className="tg-bookprice">
                          <ins>$25.18</ins>
                          <del>$27.20</del>
                        </span>
                        <a
                          className="tg-btn tg-btnstyletwo"
                          href="javascript:void(0);"
                        >
                          <i className="fa fa-shopping-basket" />
                          <em>Add To Basket</em>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="tg-postbook tg-notag">
                      <figure className="tg-featureimg">
                        <div className="tg-bookimg">
                          <div className="tg-frontcover">
                            <img
                              src="images/books/img-05.jpg"
                              alt="image description"
                            />
                          </div>
                          <div className="tg-backcover">
                            <img
                              src="images/books/img-05.jpg"
                              alt="image description"
                            />
                          </div>
                        </div>
                        <a className="tg-btnaddtowishlist" href="javascript:void(0);">
                          <i className="icon-heart" />
                          <span>add to wishlist</span>
                        </a>
                      </figure>
                      <div className="tg-postbookcontent">
                        <ul className="tg-bookscategories">
                          <li>
                            <a href="javascript:void(0);">Adventure</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Fun</a>
                          </li>
                        </ul>
                        <div className="tg-booktitle">
                          <h3>
                            <a href="javascript:void(0);">
                              Put The Petal To The Metal
                            </a>
                          </h3>
                        </div>
                        <span className="tg-bookwriter">
                          By: <a href="javascript:void(0);">Angela Gunning</a>
                        </span>
                        <span className="tg-stars">
                          <span />
                        </span>
                        <span className="tg-bookprice">
                          <ins>$25.18</ins>
                          <del>$27.20</del>
                        </span>
                        <a
                          className="tg-btn tg-btnstyletwo"
                          href="javascript:void(0);"
                        >
                          <i className="fa fa-shopping-basket" />
                          <em>Add To Basket</em>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="tg-postbook">
                      <figure className="tg-featureimg">
                        <div className="tg-bookimg">
                          <div className="tg-frontcover">
                            <img
                              src="images/books/img-06.jpg"
                              alt="image description"
                            />
                          </div>
                          <div className="tg-backcover">
                            <img
                              src="images/books/img-06.jpg"
                              alt="image description"
                            />
                          </div>
                        </div>
                        <a className="tg-btnaddtowishlist" href="javascript:void(0);">
                          <i className="icon-heart" />
                          <span>add to wishlist</span>
                        </a>
                      </figure>
                      <div className="tg-postbookcontent">
                        <ul className="tg-bookscategories">
                          <li>
                            <a href="javascript:void(0);">Adventure</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Fun</a>
                          </li>
                        </ul>
                        <div className="tg-themetagbox">
                          <span className="tg-themetag">sale</span>
                        </div>
                        <div className="tg-booktitle">
                          <h3>
                            <a href="javascript:void(0);">Help Me Find My Stomach</a>
                          </h3>
                        </div>
                        <span className="tg-bookwriter">
                          By: <a href="javascript:void(0);">Angela Gunning</a>
                        </span>
                        <span className="tg-stars">
                          <span />
                        </span>
                        <span className="tg-bookprice">
                          <ins>$25.18</ins>
                          <del>$27.20</del>
                        </span>
                        <a
                          className="tg-btn tg-btnstyletwo"
                          href="javascript:void(0);"
                        >
                          <i className="fa fa-shopping-basket" />
                          <em>Add To Basket</em>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="tg-postbook tg-notag">
                      <figure className="tg-featureimg">
                        <div className="tg-bookimg">
                          <div className="tg-frontcover">
                            <img
                              src="images/books/img-03.jpg"
                              alt="image description"
                            />
                          </div>
                          <div className="tg-backcover">
                            <img
                              src="images/books/img-03.jpg"
                              alt="image description"
                            />
                          </div>
                        </div>
                        <a className="tg-btnaddtowishlist" href="javascript:void(0);">
                          <i className="icon-heart" />
                          <span>add to wishlist</span>
                        </a>
                      </figure>
                      <div className="tg-postbookcontent">
                        <ul className="tg-bookscategories">
                          <li>
                            <a href="javascript:void(0);">Adventure</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Fun</a>
                          </li>
                        </ul>
                        <div className="tg-booktitle">
                          <h3>
                            <a href="javascript:void(0);">
                              Let The Good Times Roll Up
                            </a>
                          </h3>
                        </div>
                        <span className="tg-bookwriter">
                          By: <a href="javascript:void(0);">Angela Gunning</a>
                        </span>
                        <span className="tg-stars">
                          <span />
                        </span>
                        <span className="tg-bookprice">
                          <ins>$25.18</ins>
                          <del>$27.20</del>
                        </span>
                        <a
                          className="tg-btn tg-btnstyletwo"
                          href="javascript:void(0);"
                        >
                          <i className="fa fa-shopping-basket" />
                          <em>Add To Basket</em>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*************************************
					Best Selling End
			**************************************/}
        {/*************************************
					Featured Item Start
			**************************************/}
        <section className="tg-bglight tg-haslayout">
          <div className="container">
            <div className="row">
              <div className="tg-featureditm">
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 hidden-sm hidden-xs">
                  <figure>
                    <img src="images/img-02.png" alt="image description" />
                  </figure>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                  <div className="tg-featureditmcontent">
                    <div className="tg-themetagbox">
                      <span className="tg-themetag">featured</span>
                    </div>
                    <div className="tg-booktitle">
                      <h3>
                        <a href="javascript:void(0);">
                          Things To Know About Green Flat Design
                        </a>
                      </h3>
                    </div>
                    <span className="tg-bookwriter">
                      By: <a href="javascript:void(0);">Farrah Whisenhunt</a>
                    </span>
                    <span className="tg-stars">
                      <span />
                    </span>
                    <div className="tg-priceandbtn">
                      <span className="tg-bookprice">
                        <ins>$23.18</ins>
                        <del>$30.20</del>
                      </span>
                      <a
                        className="tg-btn tg-btnstyletwo tg-active"
                        href="javascript:void(0);"
                      >
                        <i className="fa fa-shopping-basket" />
                        <em>Add To Basket</em>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*************************************
					Featured Item End
			**************************************/}
        {/*************************************
					New Release Start
			**************************************/}
        <section className="tg-sectionspace tg-haslayout">
          <div className="container">
            <div className="row">
              <div className="tg-newrelease">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="tg-sectionhead">
                    <h2>
                      <span>Taste The New Spice</span>New Release Books
                    </h2>
                  </div>
                  <div className="tg-description">
                    <p>
                      Consectetur adipisicing elit sed do eiusmod tempor incididunt
                      labore toloregna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamcoiars nisiuip commodo consequat aute irure
                      dolor in aprehenderit aveli esseati cillum dolor fugiat nulla
                      pariatur cepteur sint occaecat cupidatat.
                    </p>
                  </div>
                  <div className="tg-btns">
                    <a className="tg-btn tg-active" href="javascript:void(0);">
                      View All
                    </a>
                    <a className="tg-btn" href="javascript:void(0);">
                      Read More
                    </a>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="row">
                    <div className="tg-newreleasebooks">
                      <div className="col-xs-4 col-sm-4 col-md-6 col-lg-4">
                        <div className="tg-postbook">
                          <figure className="tg-featureimg">
                            <div className="tg-bookimg">
                              <div className="tg-frontcover">
                                <img
                                  src="images/books/img-07.jpg"
                                  alt="image description"
                                />
                              </div>
                              <div className="tg-backcover">
                                <img
                                  src="images/books/img-07.jpg"
                                  alt="image description"
                                />
                              </div>
                            </div>
                            <a
                              className="tg-btnaddtowishlist"
                              href="javascript:void(0);"
                            >
                              <i className="icon-heart" />
                              <span>add to wishlist</span>
                            </a>
                          </figure>
                          <div className="tg-postbookcontent">
                            <ul className="tg-bookscategories">
                              <li>
                                <a href="javascript:void(0);">Adventure</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">Fun</a>
                              </li>
                            </ul>
                            <div className="tg-booktitle">
                              <h3>
                                <a href="javascript:void(0);">
                                  Help Me Find My Stomach
                                </a>
                              </h3>
                            </div>
                            <span className="tg-bookwriter">
                              By:{" "}
                              <a href="javascript:void(0);">Kathrine Culbertson</a>
                            </span>
                            <span className="tg-stars">
                              <span />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-4 col-sm-4 col-md-6 col-lg-4">
                        <div className="tg-postbook">
                          <figure className="tg-featureimg">
                            <div className="tg-bookimg">
                              <div className="tg-frontcover">
                                <img
                                  src="images/books/img-08.jpg"
                                  alt="image description"
                                />
                              </div>
                              <div className="tg-backcover">
                                <img
                                  src="images/books/img-08.jpg"
                                  alt="image description"
                                />
                              </div>
                            </div>
                            <a
                              className="tg-btnaddtowishlist"
                              href="javascript:void(0);"
                            >
                              <i className="icon-heart" />
                              <span>add to wishlist</span>
                            </a>
                          </figure>
                          <div className="tg-postbookcontent">
                            <ul className="tg-bookscategories">
                              <li>
                                <a href="javascript:void(0);">Adventure</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">Fun</a>
                              </li>
                            </ul>
                            <div className="tg-booktitle">
                              <h3>
                                <a href="javascript:void(0);">
                                  Drive Safely, No Bumping
                                </a>
                              </h3>
                            </div>
                            <span className="tg-bookwriter">
                              By: <a href="javascript:void(0);">Sunshine Orlando</a>
                            </span>
                            <span className="tg-stars">
                              <span />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-4 col-sm-4 col-md-3 col-lg-4 hidden-md">
                        <div className="tg-postbook">
                          <figure className="tg-featureimg">
                            <div className="tg-bookimg">
                              <div className="tg-frontcover">
                                <img
                                  src="images/books/img-09.jpg"
                                  alt="image description"
                                />
                              </div>
                              <div className="tg-backcover">
                                <img
                                  src="images/books/img-09.jpg"
                                  alt="image description"
                                />
                              </div>
                            </div>
                            <a
                              className="tg-btnaddtowishlist"
                              href="javascript:void(0);"
                            >
                              <i className="icon-heart" />
                              <span>add to wishlist</span>
                            </a>
                          </figure>
                          <div className="tg-postbookcontent">
                            <ul className="tg-bookscategories">
                              <li>
                                <a href="javascript:void(0);">Adventure</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">Fun</a>
                              </li>
                            </ul>
                            <div className="tg-booktitle">
                              <h3>
                                <a href="javascript:void(0);">
                                  Let The Good Times Roll Up
                                </a>
                              </h3>
                            </div>
                            <span className="tg-bookwriter">
                              By: <a href="javascript:void(0);">Elisabeth Ronning</a>
                            </span>
                            <span className="tg-stars">
                              <span />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*************************************
					New Release End
			**************************************/}
        {/*************************************
					Collection Count Start
			**************************************/}
        <section
          className="tg-parallax tg-bgcollectioncount tg-haslayout"
          data-z-index={-100}
          data-appear-top-offset={600}
          data-parallax="scroll"
          data-image-src="images/parallax/bgparallax-04.jpg"
        >
          <div className="tg-sectionspace tg-collectioncount tg-haslayout">
            <div className="container">
              <div className="row">
                <div id="tg-collectioncounters" className="tg-collectioncounters">
                  <div className="tg-collectioncounter tg-drama">
                    <div className="tg-collectioncountericon">
                      <i className="icon-bubble" />
                    </div>
                    <div className="tg-titlepluscounter">
                      <h2>Drama</h2>
                      <h3
                        data-from={0}
                        data-to={6179213}
                        data-speed={8000}
                        data-refresh-interval={50}
                      >
                        6,179,213
                      </h3>
                    </div>
                  </div>
                  <div className="tg-collectioncounter tg-horror">
                    <div className="tg-collectioncountericon">
                      <i className="icon-heart-pulse" />
                    </div>
                    <div className="tg-titlepluscounter">
                      <h2>Horror</h2>
                      <h3
                        data-from={0}
                        data-to={3121242}
                        data-speed={8000}
                        data-refresh-interval={50}
                      >
                        3,121,242
                      </h3>
                    </div>
                  </div>
                  <div className="tg-collectioncounter tg-romance">
                    <div className="tg-collectioncountericon">
                      <i className="icon-heart" />
                    </div>
                    <div className="tg-titlepluscounter">
                      <h2>Romance</h2>
                      <h3
                        data-from={0}
                        data-to={2101012}
                        data-speed={8000}
                        data-refresh-interval={50}
                      >
                        2,101,012
                      </h3>
                    </div>
                  </div>
                  <div className="tg-collectioncounter tg-fashion">
                    <div className="tg-collectioncountericon">
                      <i className="icon-star" />
                    </div>
                    <div className="tg-titlepluscounter">
                      <h2>Fashion</h2>
                      <h3
                        data-from={0}
                        data-to={1158245}
                        data-speed={8000}
                        data-refresh-interval={50}
                      >
                        1,158,245
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*************************************
					Collection Count End
			**************************************/}
        {/*************************************
					Picked By Author Start
			**************************************/}
        <section className="tg-sectionspace tg-haslayout">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="tg-sectionhead">
                  <h2>
                    <span>Some Great Books</span>Picked By Authors
                  </h2>
                  <a className="tg-btn" href="javascript:void(0);">
                    View All
                  </a>
                </div>
              </div>
              <div
                id="tg-pickedbyauthorslider"
                className="tg-pickedbyauthor tg-pickedbyauthorslider owl-carousel"
              >
                <div className="item">
                  <div className="tg-postbook">
                    <figure className="tg-featureimg">
                      <div className="tg-bookimg">
                        <div className="tg-frontcover">
                          <img
                            src="images/books/img-10.jpg"
                            alt="image description"
                          />
                        </div>
                      </div>
                      <div className="tg-hovercontent">
                        <div className="tg-description">
                          <p>
                            Consectetur adipisicing elit sed do eiusmod tempor
                            incididunt labore toloregna aliqua enim adia minim veniam,
                            quis nostrud.
                          </p>
                        </div>
                        <strong className="tg-bookpage">Book Pages: 206</strong>
                        <strong className="tg-bookcategory">
                          Category: Adventure, Fun
                        </strong>
                        <strong className="tg-bookprice">Price: $23.18</strong>
                        <div className="tg-ratingbox">
                          <span className="tg-stars">
                            <span />
                          </span>
                        </div>
                      </div>
                    </figure>
                    <div className="tg-postbookcontent">
                      <div className="tg-booktitle">
                        <h3>
                          <a href="javascript:void(0);">Seven Minutes In Heaven</a>
                        </h3>
                      </div>
                      <span className="tg-bookwriter">
                        By: <a href="javascript:void(0);">Sunshine Orlando</a>
                      </span>
                      <a className="tg-btn tg-btnstyletwo" href="javascript:void(0);">
                        <i className="fa fa-shopping-basket" />
                        <em>Add To Basket</em>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="tg-postbook">
                    <figure className="tg-featureimg">
                      <div className="tg-bookimg">
                        <div className="tg-frontcover">
                          <img
                            src="images/books/img-11.jpg"
                            alt="image description"
                          />
                        </div>
                      </div>
                      <div className="tg-hovercontent">
                        <div className="tg-description">
                          <p>
                            Consectetur adipisicing elit sed do eiusmod tempor
                            incididunt labore toloregna aliqua enim adia minim veniam,
                            quis nostrud.
                          </p>
                        </div>
                        <strong className="tg-bookpage">Book Pages: 206</strong>
                        <strong className="tg-bookcategory">
                          Category: Adventure, Fun
                        </strong>
                        <strong className="tg-bookprice">Price: $23.18</strong>
                        <div className="tg-ratingbox">
                          <span className="tg-stars">
                            <span />
                          </span>
                        </div>
                      </div>
                    </figure>
                    <div className="tg-postbookcontent">
                      <div className="tg-booktitle">
                        <h3>
                          <a href="javascript:void(0);">
                            Slow And Steady Wins The Race
                          </a>
                        </h3>
                      </div>
                      <span className="tg-bookwriter">
                        By: <a href="javascript:void(0);">Drusilla Glandon</a>
                      </span>
                      <a className="tg-btn tg-btnstyletwo" href="javascript:void(0);">
                        <i className="fa fa-shopping-basket" />
                        <em>Add To Basket</em>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="tg-postbook">
                    <figure className="tg-featureimg">
                      <div className="tg-bookimg">
                        <div className="tg-frontcover">
                          <img
                            src="images/books/img-12.jpg"
                            alt="image description"
                          />
                        </div>
                      </div>
                      <div className="tg-hovercontent">
                        <div className="tg-description">
                          <p>
                            Consectetur adipisicing elit sed do eiusmod tempor
                            incididunt labore toloregna aliqua enim adia minim veniam,
                            quis nostrud.
                          </p>
                        </div>
                        <strong className="tg-bookpage">Book Pages: 206</strong>
                        <strong className="tg-bookcategory">
                          Category: Adventure, Fun
                        </strong>
                        <strong className="tg-bookprice">Price: $23.18</strong>
                        <div className="tg-ratingbox">
                          <span className="tg-stars">
                            <span />
                          </span>
                        </div>
                      </div>
                    </figure>
                    <div className="tg-postbookcontent">
                      <div className="tg-booktitle">
                        <h3>
                          <a href="javascript:void(0);">
                            There’s No Time Like The Present
                          </a>
                        </h3>
                      </div>
                      <span className="tg-bookwriter">
                        By: <a href="javascript:void(0);">Patrick Seller</a>
                      </span>
                      <a className="tg-btn tg-btnstyletwo" href="javascript:void(0);">
                        <i className="fa fa-shopping-basket" />
                        <em>Add To Basket</em>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="tg-postbook">
                    <figure className="tg-featureimg">
                      <div className="tg-bookimg">
                        <div className="tg-frontcover">
                          <img
                            src="images/books/img-10.jpg"
                            alt="image description"
                          />
                        </div>
                      </div>
                      <div className="tg-hovercontent">
                        <div className="tg-description">
                          <p>
                            Consectetur adipisicing elit sed do eiusmod tempor
                            incididunt labore toloregna aliqua enim adia minim veniam,
                            quis nostrud.
                          </p>
                        </div>
                        <strong className="tg-bookpage">Book Pages: 206</strong>
                        <strong className="tg-bookcategory">
                          Category: Adventure, Fun
                        </strong>
                        <strong className="tg-bookprice">Price: $23.18</strong>
                        <div className="tg-ratingbox">
                          <span className="tg-stars">
                            <span />
                          </span>
                        </div>
                      </div>
                    </figure>
                    <div className="tg-postbookcontent">
                      <div className="tg-booktitle">
                        <h3>
                          <a href="javascript:void(0);">Seven Minutes In Heaven</a>
                        </h3>
                      </div>
                      <span className="tg-bookwriter">
                        By: <a href="javascript:void(0);">Sunshine Orlando</a>
                      </span>
                      <a className="tg-btn tg-btnstyletwo" href="javascript:void(0);">
                        <i className="fa fa-shopping-basket" />
                        <em>Add To Basket</em>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="tg-postbook">
                    <figure className="tg-featureimg">
                      <div className="tg-bookimg">
                        <div className="tg-frontcover">
                          <img
                            src="images/books/img-11.jpg"
                            alt="image description"
                          />
                        </div>
                      </div>
                      <div className="tg-hovercontent">
                        <div className="tg-description">
                          <p>
                            Consectetur adipisicing elit sed do eiusmod tempor
                            incididunt labore toloregna aliqua enim adia minim veniam,
                            quis nostrud.
                          </p>
                        </div>
                        <strong className="tg-bookpage">Book Pages: 206</strong>
                        <strong className="tg-bookcategory">
                          Category: Adventure, Fun
                        </strong>
                        <strong className="tg-bookprice">Price: $23.18</strong>
                        <div className="tg-ratingbox">
                          <span className="tg-stars">
                            <span />
                          </span>
                        </div>
                      </div>
                    </figure>
                    <div className="tg-postbookcontent">
                      <div className="tg-booktitle">
                        <h3>
                          <a href="javascript:void(0);">
                            Slow And Steady Wins The Race
                          </a>
                        </h3>
                      </div>
                      <span className="tg-bookwriter">
                        By: <a href="javascript:void(0);">Drusilla Glandon</a>
                      </span>
                      <a className="tg-btn tg-btnstyletwo" href="javascript:void(0);">
                        <i className="fa fa-shopping-basket" />
                        <em>Add To Basket</em>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*************************************
					Picked By Author End
			**************************************/}
        {/*************************************
					Testimonials Start
			**************************************/}
        <section
          className="tg-parallax tg-bgtestimonials tg-haslayout"
          data-z-index={-100}
          data-appear-top-offset={600}
          data-parallax="scroll"
          data-image-src="images/parallax/bgparallax-05.jpg"
        >
          <div className="tg-sectionspace tg-haslayout">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-push-2">
                  <div
                    id="tg-testimonialsslider"
                    className="tg-testimonialsslider tg-testimonials owl-carousel"
                  >
                    <div className="item tg-testimonial">
                      <figure>
                        <img
                          src="images/author/imag-02.jpg"
                          alt="image description"
                        />
                      </figure>
                      <blockquote>
                        <q>
                          Consectetur adipisicing elit sed do eiusmod tempor
                          incididunt ut labore tolore magna aliqua enim ad minim
                          veniam, quis nostrud exercitation ullamcoiars nisi ut
                          aliquip commodo.
                        </q>
                      </blockquote>
                      <div className="tg-testimonialauthor">
                        <h3>Holli Fenstermacher</h3>
                        <span>Manager @ CIFP</span>
                      </div>
                    </div>
                    <div className="item tg-testimonial">
                      <figure>
                        <img
                          src="images/author/imag-02.jpg"
                          alt="image description"
                        />
                      </figure>
                      <blockquote>
                        <q>
                          Consectetur adipisicing elit sed do eiusmod tempor
                          incididunt ut labore tolore magna aliqua enim ad minim
                          veniam, quis nostrud exercitation ullamcoiars nisi ut
                          aliquip commodo.
                        </q>
                      </blockquote>
                      <div className="tg-testimonialauthor">
                        <h3>Holli Fenstermacher</h3>
                        <span>Manager @ CIFP</span>
                      </div>
                    </div>
                    <div className="item tg-testimonial">
                      <figure>
                        <img
                          src="images/author/imag-02.jpg"
                          alt="image description"
                        />
                      </figure>
                      <blockquote>
                        <q>
                          Consectetur adipisicing elit sed do eiusmod tempor
                          incididunt ut labore tolore magna aliqua enim ad minim
                          veniam, quis nostrud exercitation ullamcoiars nisi ut
                          aliquip commodo.
                        </q>
                      </blockquote>
                      <div className="tg-testimonialauthor">
                        <h3>Holli Fenstermacher</h3>
                        <span>Manager @ CIFP</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*************************************
					Testimonials End
			**************************************/}
        {/*************************************
					Call to Action Start
			**************************************/}
        <section
          className="tg-parallax tg-bgcalltoaction tg-haslayout"
          data-z-index={-100}
          data-appear-top-offset={600}
          data-parallax="scroll"
          data-image-src="images/parallax/bgparallax-06.jpg"
        >
          <div className="tg-sectionspace tg-haslayout">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="tg-calltoaction">
                    <h2>Open Discount For All</h2>
                    <h3>
                      Consectetur adipisicing elit sed do eiusmod tempor incididunt ut
                      labore et dolore.
                    </h3>
                    <a className="tg-btn tg-active" href="javascript:void(0);">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*************************************
					Call to Action End
			**************************************/}
        {/*************************************
					Latest News Start
			**************************************/}
        <section className="tg-sectionspace tg-haslayout">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="tg-sectionhead">
                  <h2>
                    <span>Latest News &amp; Articles</span>What Hot in The News
                  </h2>
                  <a className="tg-btn" href="javascript:void(0);">
                    View All
                  </a>
                </div>
              </div>
              <div
                id="tg-postslider"
                className="tg-postslider tg-blogpost owl-carousel"
              >
                <article className="item tg-post">
                  <figure>
                    <a href="javascript:void(0);">
                      <img src="images/blog/img-01.jpg" alt="image description" />
                    </a>
                  </figure>
                  <div className="tg-postcontent">
                    <ul className="tg-bookscategories">
                      <li>
                        <a href="javascript:void(0);">Adventure</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Fun</a>
                      </li>
                    </ul>
                    <div className="tg-themetagbox">
                      <span className="tg-themetag">featured</span>
                    </div>
                    <div className="tg-posttitle">
                      <h3>
                        <a href="javascript:void(0);">Where The Wild Things Are</a>
                      </h3>
                    </div>
                    <span className="tg-bookwriter">
                      By: <a href="javascript:void(0);">Kathrine Culbertson</a>
                    </span>
                    <ul className="tg-postmetadata">
                      <li>
                        <a href="javascript:void(0);">
                          <i className="fa fa-comment-o" />
                          <i>21,415 Comments</i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <i className="fa fa-eye" />
                          <i>24,565 Views</i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
                <article className="item tg-post">
                  <figure>
                    <a href="javascript:void(0);">
                      <img src="images/blog/img-02.jpg" alt="image description" />
                    </a>
                  </figure>
                  <div className="tg-postcontent">
                    <ul className="tg-bookscategories">
                      <li>
                        <a href="javascript:void(0);">Adventure</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Fun</a>
                      </li>
                    </ul>
                    <div className="tg-themetagbox">
                      <span className="tg-themetag">featured</span>
                    </div>
                    <div className="tg-posttitle">
                      <h3>
                        <a href="javascript:void(0);">All She Wants To Do Is Dance</a>
                      </h3>
                    </div>
                    <span className="tg-bookwriter">
                      By: <a href="javascript:void(0);">Kathrine Culbertson</a>
                    </span>
                    <ul className="tg-postmetadata">
                      <li>
                        <a href="javascript:void(0);">
                          <i className="fa fa-comment-o" />
                          <i>21,415 Comments</i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <i className="fa fa-eye" />
                          <i>24,565 Views</i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
                <article className="item tg-post">
                  <figure>
                    <a href="javascript:void(0);">
                      <img src="images/blog/img-03.jpg" alt="image description" />
                    </a>
                  </figure>
                  <div className="tg-postcontent">
                    <ul className="tg-bookscategories">
                      <li>
                        <a href="javascript:void(0);">Adventure</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Fun</a>
                      </li>
                    </ul>
                    <div className="tg-themetagbox">
                      <span className="tg-themetag">featured</span>
                    </div>
                    <div className="tg-posttitle">
                      <h3>
                        <a href="javascript:void(0);">Why Walk When You Can Climb?</a>
                      </h3>
                    </div>
                    <span className="tg-bookwriter">
                      By: <a href="javascript:void(0);">Kathrine Culbertson</a>
                    </span>
                    <ul className="tg-postmetadata">
                      <li>
                        <a href="javascript:void(0);">
                          <i className="fa fa-comment-o" />
                          <i>21,415 Comments</i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <i className="fa fa-eye" />
                          <i>24,565 Views</i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
                <article className="item tg-post">
                  <figure>
                    <a href="javascript:void(0);">
                      <img src="images/blog/img-04.jpg" alt="image description" />
                    </a>
                  </figure>
                  <div className="tg-postcontent">
                    <ul className="tg-bookscategories">
                      <li>
                        <a href="javascript:void(0);">Adventure</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Fun</a>
                      </li>
                    </ul>
                    <div className="tg-themetagbox">
                      <span className="tg-themetag">featured</span>
                    </div>
                    <div className="tg-posttitle">
                      <h3>
                        <a href="javascript:void(0);">Dance Like Nobody’s Watching</a>
                      </h3>
                    </div>
                    <span className="tg-bookwriter">
                      By: <a href="javascript:void(0);">Kathrine Culbertson</a>
                    </span>
                    <ul className="tg-postmetadata">
                      <li>
                        <a href="javascript:void(0);">
                          <i className="fa fa-comment-o" />
                          <i>21,415 Comments</i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <i className="fa fa-eye" />
                          <i>24,565 Views</i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
                <article className="item tg-post">
                  <figure>
                    <a href="javascript:void(0);">
                      <img src="images/blog/img-02.jpg" alt="image description" />
                    </a>
                  </figure>
                  <div className="tg-postcontent">
                    <ul className="tg-bookscategories">
                      <li>
                        <a href="javascript:void(0);">Adventure</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Fun</a>
                      </li>
                    </ul>
                    <div className="tg-themetagbox">
                      <span className="tg-themetag">featured</span>
                    </div>
                    <div className="tg-posttitle">
                      <h3>
                        <a href="javascript:void(0);">All She Wants To Do Is Dance</a>
                      </h3>
                    </div>
                    <span className="tg-bookwriter">
                      By: <a href="javascript:void(0);">Kathrine Culbertson</a>
                    </span>
                    <ul className="tg-postmetadata">
                      <li>
                        <a href="javascript:void(0);">
                          <i className="fa fa-comment-o" />
                          <i>21,415 Comments</i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <i className="fa fa-eye" />
                          <i>24,565 Views</i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
                <article className="item tg-post">
                  <figure>
                    <a href="javascript:void(0);">
                      <img src="images/blog/img-03.jpg" alt="image description" />
                    </a>
                  </figure>
                  <div className="tg-postcontent">
                    <ul className="tg-bookscategories">
                      <li>
                        <a href="javascript:void(0);">Adventure</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Fun</a>
                      </li>
                    </ul>
                    <div className="tg-themetagbox">
                      <span className="tg-themetag">featured</span>
                    </div>
                    <div className="tg-posttitle">
                      <h3>
                        <a href="javascript:void(0);">Why Walk When You Can Climb?</a>
                      </h3>
                    </div>
                    <span className="tg-bookwriter">
                      By: <a href="javascript:void(0);">Kathrine Culbertson</a>
                    </span>
                    <ul className="tg-postmetadata">
                      <li>
                        <a href="javascript:void(0);">
                          <i className="fa fa-comment-o" />
                          <i>21,415 Comments</i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <i className="fa fa-eye" />
                          <i>24,565 Views</i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        {/*************************************
					Latest News End
			**************************************/}
        {/*************************************
				Main End
		**************************************/}
        {/*************************************
				Footer Start
		**************************************/}
        <footer id="tg-footer" className="tg-footer tg-haslayout">
          <div className="tg-footerarea">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <ul className="tg-clientservices">
                    <li className="tg-devlivery">
                      <span className="tg-clientserviceicon">
                        <i className="icon-rocket" />
                      </span>
                      <div className="tg-titlesubtitle">
                        <h3>Fast Delivery</h3>
                        <p>Shipping Worldwide</p>
                      </div>
                    </li>
                    <li className="tg-discount">
                      <span className="tg-clientserviceicon">
                        <i className="icon-tag" />
                      </span>
                      <div className="tg-titlesubtitle">
                        <h3>Open Discount</h3>
                        <p>Offering Open Discount</p>
                      </div>
                    </li>
                    <li className="tg-quality">
                      <span className="tg-clientserviceicon">
                        <i className="icon-leaf" />
                      </span>
                      <div className="tg-titlesubtitle">
                        <h3>Eyes On Quality</h3>
                        <p>Publishing Quality Work</p>
                      </div>
                    </li>
                    <li className="tg-support">
                      <span className="tg-clientserviceicon">
                        <i className="icon-heart" />
                      </span>
                      <div className="tg-titlesubtitle">
                        <h3>24/7 Support</h3>
                        <p>Serving Every Moments</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="tg-threecolumns">
                  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <div className="tg-footercol">
                      <strong className="tg-logo">
                        <a href="javascript:void(0);">
                          <img src="images/flogo.png" alt="image description" />
                        </a>
                      </strong>
                      <ul className="tg-contactinfo">
                        <li>
                          <i className="icon-apartment" />
                          <address>
                            Suit # 07, Rose world Building, Street # 02, AT246T
                            Manchester
                          </address>
                        </li>
                        <li>
                          <i className="icon-phone-handset" />
                          <span>
                            <em>0800 12345 - 678 - 89</em>
                            <em>+4 1234 - 4567 - 67</em>
                          </span>
                        </li>
                        <li>
                          <i className="icon-clock" />
                          <span>Serving 7 Days A Week From 9am - 5pm</span>
                        </li>
                        <li>
                          <i className="icon-envelope" />
                          <span>
                            <em>
                              <a href="mailto:support@domain.com">
                                support@domain.com
                              </a>
                            </em>
                            <em>
                              <a href="mailto:info@domain.com">info@domain.com</a>
                            </em>
                          </span>
                        </li>
                      </ul>
                      <ul className="tg-socialicons">
                        <li className="tg-facebook">
                          <a href="javascript:void(0);">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li className="tg-twitter">
                          <a href="javascript:void(0);">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li className="tg-linkedin">
                          <a href="javascript:void(0);">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                        <li className="tg-googleplus">
                          <a href="javascript:void(0);">
                            <i className="fa fa-google-plus" />
                          </a>
                        </li>
                        <li className="tg-rss">
                          <a href="javascript:void(0);">
                            <i className="fa fa-rss" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <div className="tg-footercol tg-widget tg-widgetnavigation">
                      <div className="tg-widgettitle">
                        <h3>Shipping And Help Information</h3>
                      </div>
                      <div className="tg-widgetcontent">
                        <ul>
                          <li>
                            <a href="javascript:void(0);">Terms of Use</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Terms of Sale</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Returns</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Privacy</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Cookies</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Contact Us</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Our Affiliates</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Vision &amp; Aim</a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href="javascript:void(0);">Our Story</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Meet Our Team</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">FAQ</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Testimonials</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Join Our Team</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div className="tg-footercol tg-widget tg-widgettopsellingauthors">
                      <div className="tg-widgettitle">
                        <h3>Top Selling Authors</h3>
                      </div>
                      <div className="tg-widgetcontent">
                        <ul>
                          <li>
                            <figure>
                              <a href="javascript:void(0);">
                                <img
                                  src="images/author/imag-09.jpg"
                                  alt="image description"
                                />
                              </a>
                            </figure>
                            <div className="tg-authornamebooks">
                              <h4>
                                <a href="javascript:void(0);">Jude Morphew</a>
                              </h4>
                              <p>21,658 Published Books</p>
                            </div>
                          </li>
                          <li>
                            <figure>
                              <a href="javascript:void(0);">
                                <img
                                  src="images/author/imag-10.jpg"
                                  alt="image description"
                                />
                              </a>
                            </figure>
                            <div className="tg-authornamebooks">
                              <h4>
                                <a href="javascript:void(0);">Shaun Humes</a>
                              </h4>
                              <p>20,257 Published Books</p>
                            </div>
                          </li>
                          <li>
                            <figure>
                              <a href="javascript:void(0);">
                                <img
                                  src="images/author/imag-11.jpg"
                                  alt="image description"
                                />
                              </a>
                            </figure>
                            <div className="tg-authornamebooks">
                              <h4>
                                <a href="javascript:void(0);">Kathrine Culbertson</a>
                              </h4>
                              <p>15,686 Published Books</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tg-newsletter">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <h4>Signup Newsletter!</h4>
                  <h5>
                    Consectetur adipisicing elit sed do eiusmod tempor incididunt.
                  </h5>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <form className="tg-formtheme tg-formnewsletter">
                    <fieldset>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter Your Email ID"
                      />
                      <button type="button">
                        <i className="icon-envelope" />
                      </button>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="tg-footerbar">
            <a
              id="tg-btnbacktotop"
              className="tg-btnbacktotop"
              href="javascript:void(0);"
            >
              <i className="icon-chevron-up" />
            </a>
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <span className="tg-paymenttype">
                    <img src="images/paymenticon.png" alt="image description" />
                  </span>
                  <span className="tg-copyright">
                    2017 All Rights Reserved By © Book Library
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </div>

      <Script src="js/vendor/jquery-library.js"></Script>
      <Script src="js/vendor/bootstrap.min.js"></Script>
      <Script src="js/owl.carousel.min.js"></Script>
      <Script src="js/countdown.js"></Script>
      <Script src="js/jquery-ui.js"></Script>
      <Script src="js/parallax.js"></Script>
      <Script src="js/countTo.js"></Script>
      <Script src="js/appear.js"></Script>
      <Script src="js/gmap3.js"></Script>
      <Script src="js/main.js"></Script>
      <Script src="js/jquery.vide.min.js"></Script>
      <Script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></Script>
      <Script src="https://maps.google.com/maps/api/js?key=AIzaSyCR-KEWAVCn52mSdeVeTqZjtqbmVJyfSus&amp;language=en"></Script>



    </>



  )
}

export default Home
