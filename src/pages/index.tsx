/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <main>
      <div>
        <section className="tg-sectionspace tg-haslayout">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="tg-sectionhead">
                  <h2>
                    <span>Peoples Choice</span>Bestselling Books
                  </h2>
                  <a className="tg-btn" href="">
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
                        <a className="tg-btnaddtowishlist" href="">
                          <i className="icon-heart" />
                          <span>add to wishlist</span>
                        </a>
                      </figure>
                      <div className="tg-postbookcontent">
                        <ul className="tg-bookscategories">
                          <li>
                            <a href="">Adventure</a>
                          </li>
                          <li>
                            <a href="">Fun</a>
                          </li>
                        </ul>
                        <div className="tg-themetagbox">
                          <span className="tg-themetag">sale</span>
                        </div>
                        <div className="tg-booktitle">
                          <h3>
                            <a href="">Help Me Find My Stomach</a>
                          </h3>
                        </div>
                        <span className="tg-bookwriter">
                          By: <a href="">Angela Gunning</a>
                        </span>
                        <span className="tg-stars">
                          <span />
                        </span>
                        <span className="tg-bookprice">
                          <ins>$25.18</ins>
                          <del>$27.20</del>
                        </span>
                        <a className="tg-btn tg-btnstyletwo" href="">
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
                        <a className="tg-btnaddtowishlist" href="">
                          <i className="icon-heart" />
                          <span>add to wishlist</span>
                        </a>
                      </figure>
                      <div className="tg-postbookcontent">
                        <ul className="tg-bookscategories">
                          <li>
                            <a href="">Adventure</a>
                          </li>
                          <li>
                            <a href="">Fun</a>
                          </li>
                        </ul>
                        <div className="tg-themetagbox">
                          <span className="tg-themetag">sale</span>
                        </div>
                        <div className="tg-booktitle">
                          <h3>
                            <a href="">Drive Safely, No Bumping</a>
                          </h3>
                        </div>
                        <span className="tg-bookwriter">
                          By: <a href="">Angela Gunning</a>
                        </span>
                        <span className="tg-stars">
                          <span />
                        </span>
                        <span className="tg-bookprice">
                          <ins>$25.18</ins>
                          <del>$27.20</del>
                        </span>
                        <a className="tg-btn tg-btnstyletwo" href="">
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
                        <a className="tg-btnaddtowishlist" href="">
                          <i className="icon-heart" />
                          <span>add to wishlist</span>
                        </a>
                      </figure>
                      <div className="tg-postbookcontent">
                        <ul className="tg-bookscategories">
                          <li>
                            <a href="">Adventure</a>
                          </li>
                          <li>
                            <a href="">Fun</a>
                          </li>
                        </ul>
                        <div className="tg-booktitle">
                          <h3>
                            <a href="">Let The Good Times Roll Up</a>
                          </h3>
                        </div>
                        <span className="tg-bookwriter">
                          By: <a href="">Angela Gunning</a>
                        </span>
                        <span className="tg-stars">
                          <span />
                        </span>
                        <span className="tg-bookprice">
                          <ins>$25.18</ins>
                          <del>$27.20</del>
                        </span>
                        <a className="tg-btn tg-btnstyletwo" href="">
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
                        <a className="tg-btnaddtowishlist" href="">
                          <i className="icon-heart" />
                          <span>add to wishlist</span>
                        </a>
                      </figure>
                      <div className="tg-postbookcontent">
                        <ul className="tg-bookscategories">
                          <li>
                            <a href="">Adventure</a>
                          </li>
                          <li>
                            <a href="">Fun</a>
                          </li>
                        </ul>
                        <div className="tg-themetagbox">
                          <span className="tg-themetag">sale</span>
                        </div>
                        <div className="tg-booktitle">
                          <h3>
                            <a href="">Our State Fair Is A Great State Fair</a>
                          </h3>
                        </div>
                        <span className="tg-bookwriter">
                          By: <a href="">Angela Gunning</a>
                        </span>
                        <span className="tg-stars">
                          <span />
                        </span>
                        <span className="tg-bookprice">
                          <ins>$25.18</ins>
                          <del>$27.20</del>
                        </span>
                        <a className="tg-btn tg-btnstyletwo" href="">
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
                        <a className="tg-btnaddtowishlist" href="">
                          <i className="icon-heart" />
                          <span>add to wishlist</span>
                        </a>
                      </figure>
                      <div className="tg-postbookcontent">
                        <ul className="tg-bookscategories">
                          <li>
                            <a href="">Adventure</a>
                          </li>
                          <li>
                            <a href="">Fun</a>
                          </li>
                        </ul>
                        <div className="tg-booktitle">
                          <h3>
                            <a href="">Put The Petal To The Metal</a>
                          </h3>
                        </div>
                        <span className="tg-bookwriter">
                          By: <a href="">Angela Gunning</a>
                        </span>
                        <span className="tg-stars">
                          <span />
                        </span>
                        <span className="tg-bookprice">
                          <ins>$25.18</ins>
                          <del>$27.20</del>
                        </span>
                        <a className="tg-btn tg-btnstyletwo" href="">
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
                        <a className="tg-btnaddtowishlist" href="">
                          <i className="icon-heart" />
                          <span>add to wishlist</span>
                        </a>
                      </figure>
                      <div className="tg-postbookcontent">
                        <ul className="tg-bookscategories">
                          <li>
                            <a href="">Adventure</a>
                          </li>
                          <li>
                            <a href="">Fun</a>
                          </li>
                        </ul>
                        <div className="tg-themetagbox">
                          <span className="tg-themetag">sale</span>
                        </div>
                        <div className="tg-booktitle">
                          <h3>
                            <a href="">Help Me Find My Stomach</a>
                          </h3>
                        </div>
                        <span className="tg-bookwriter">
                          By: <a href="">Angela Gunning</a>
                        </span>
                        <span className="tg-stars">
                          <span />
                        </span>
                        <span className="tg-bookprice">
                          <ins>$25.18</ins>
                          <del>$27.20</del>
                        </span>
                        <a className="tg-btn tg-btnstyletwo" href="">
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
                        <a className="tg-btnaddtowishlist" href="">
                          <i className="icon-heart" />
                          <span>add to wishlist</span>
                        </a>
                      </figure>
                      <div className="tg-postbookcontent">
                        <ul className="tg-bookscategories">
                          <li>
                            <a href="">Adventure</a>
                          </li>
                          <li>
                            <a href="">Fun</a>
                          </li>
                        </ul>
                        <div className="tg-booktitle">
                          <h3>
                            <a href="">Let The Good Times Roll Up</a>
                          </h3>
                        </div>
                        <span className="tg-bookwriter">
                          By: <a href="">Angela Gunning</a>
                        </span>
                        <span className="tg-stars">
                          <span />
                        </span>
                        <span className="tg-bookprice">
                          <ins>$25.18</ins>
                          <del>$27.20</del>
                        </span>
                        <a className="tg-btn tg-btnstyletwo" href="">
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
                        <a href="">Things To Know About Green Flat Design</a>
                      </h3>
                    </div>
                    <span className="tg-bookwriter">
                      By: <a href="">Farrah Whisenhunt</a>
                    </span>
                    <span className="tg-stars">
                      <span />
                    </span>
                    <div className="tg-priceandbtn">
                      <span className="tg-bookprice">
                        <ins>$23.18</ins>
                        <del>$30.20</del>
                      </span>
                      <a className="tg-btn tg-btnstyletwo tg-active" href="">
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
                      Consectetur adipisicing elit sed do eiusmod tempor
                      incididunt labore toloregna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamcoiars nisiuip
                      commodo consequat aute irure dolor in aprehenderit aveli
                      esseati cillum dolor fugiat nulla pariatur cepteur sint
                      occaecat cupidatat.
                    </p>
                  </div>
                  <div className="tg-btns">
                    <a className="tg-btn tg-active" href="">
                      View All
                    </a>
                    <a className="tg-btn" href="">
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
                            <a className="tg-btnaddtowishlist" href="">
                              <i className="icon-heart" />
                              <span>add to wishlist</span>
                            </a>
                          </figure>
                          <div className="tg-postbookcontent">
                            <ul className="tg-bookscategories">
                              <li>
                                <a href="">Adventure</a>
                              </li>
                              <li>
                                <a href="">Fun</a>
                              </li>
                            </ul>
                            <div className="tg-booktitle">
                              <h3>
                                <a href="">Help Me Find My Stomach</a>
                              </h3>
                            </div>
                            <span className="tg-bookwriter">
                              By: <a href="">Kathrine Culbertson</a>
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
                            <a className="tg-btnaddtowishlist" href="">
                              <i className="icon-heart" />
                              <span>add to wishlist</span>
                            </a>
                          </figure>
                          <div className="tg-postbookcontent">
                            <ul className="tg-bookscategories">
                              <li>
                                <a href="">Adventure</a>
                              </li>
                              <li>
                                <a href="">Fun</a>
                              </li>
                            </ul>
                            <div className="tg-booktitle">
                              <h3>
                                <a href="">Drive Safely, No Bumping</a>
                              </h3>
                            </div>
                            <span className="tg-bookwriter">
                              By: <a href="">Sunshine Orlando</a>
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
                            <a className="tg-btnaddtowishlist" href="">
                              <i className="icon-heart" />
                              <span>add to wishlist</span>
                            </a>
                          </figure>
                          <div className="tg-postbookcontent">
                            <ul className="tg-bookscategories">
                              <li>
                                <a href="">Adventure</a>
                              </li>
                              <li>
                                <a href="">Fun</a>
                              </li>
                            </ul>
                            <div className="tg-booktitle">
                              <h3>
                                <a href="">Let The Good Times Roll Up</a>
                              </h3>
                            </div>
                            <span className="tg-bookwriter">
                              By: <a href="">Elisabeth Ronning</a>
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
                <div
                  id="tg-collectioncounters"
                  className="tg-collectioncounters"
                >
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
                  <a className="tg-btn" href="">
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
                            incididunt labore toloregna aliqua enim adia minim
                            veniam, quis nostrud.
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
                          <a href="">Seven Minutes In Heaven</a>
                        </h3>
                      </div>
                      <span className="tg-bookwriter">
                        By: <a href="">Sunshine Orlando</a>
                      </span>
                      <a className="tg-btn tg-btnstyletwo" href="">
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
                            incididunt labore toloregna aliqua enim adia minim
                            veniam, quis nostrud.
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
                          <a href="">Slow And Steady Wins The Race</a>
                        </h3>
                      </div>
                      <span className="tg-bookwriter">
                        By: <a href="">Drusilla Glandon</a>
                      </span>
                      <a className="tg-btn tg-btnstyletwo" href="">
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
                            incididunt labore toloregna aliqua enim adia minim
                            veniam, quis nostrud.
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
                          <a href="">There’s No Time Like The Present</a>
                        </h3>
                      </div>
                      <span className="tg-bookwriter">
                        By: <a href="">Patrick Seller</a>
                      </span>
                      <a className="tg-btn tg-btnstyletwo" href="">
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
                            incididunt labore toloregna aliqua enim adia minim
                            veniam, quis nostrud.
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
                          <a href="">Seven Minutes In Heaven</a>
                        </h3>
                      </div>
                      <span className="tg-bookwriter">
                        By: <a href="">Sunshine Orlando</a>
                      </span>
                      <a className="tg-btn tg-btnstyletwo" href="">
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
                            incididunt labore toloregna aliqua enim adia minim
                            veniam, quis nostrud.
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
                          <a href="">Slow And Steady Wins The Race</a>
                        </h3>
                      </div>
                      <span className="tg-bookwriter">
                        By: <a href="">Drusilla Glandon</a>
                      </span>
                      <a className="tg-btn tg-btnstyletwo" href="">
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
                      Consectetur adipisicing elit sed do eiusmod tempor
                      incididunt ut labore et dolore.
                    </h3>
                    <a className="tg-btn tg-active" href="">
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
                    <span>Latest News &amp; Articles</span>Whats Hot in The News
                  </h2>
                  <a className="tg-btn" href="">
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
                    <a href="">
                      <img
                        src="images/blog/img-01.jpg"
                        alt="image description"
                      />
                    </a>
                  </figure>
                  <div className="tg-postcontent">
                    <ul className="tg-bookscategories">
                      <li>
                        <a href="">Adventure</a>
                      </li>
                      <li>
                        <a href="">Fun</a>
                      </li>
                    </ul>
                    <div className="tg-themetagbox">
                      <span className="tg-themetag">featured</span>
                    </div>
                    <div className="tg-posttitle">
                      <h3>
                        <a href="">Where The Wild Things Are</a>
                      </h3>
                    </div>
                    <span className="tg-bookwriter">
                      By: <a href="">Kathrine Culbertson</a>
                    </span>
                    <ul className="tg-postmetadata">
                      <li>
                        <a href="">
                          <i className="fa fa-comment-o" />
                          <i>21,415 Comments</i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fa fa-eye" />
                          <i>24,565 Views</i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
                <article className="item tg-post">
                  <figure>
                    <a href="">
                      <img
                        src="images/blog/img-02.jpg"
                        alt="image description"
                      />
                    </a>
                  </figure>
                  <div className="tg-postcontent">
                    <ul className="tg-bookscategories">
                      <li>
                        <a href="">Adventure</a>
                      </li>
                      <li>
                        <a href="">Fun</a>
                      </li>
                    </ul>
                    <div className="tg-themetagbox">
                      <span className="tg-themetag">featured</span>
                    </div>
                    <div className="tg-posttitle">
                      <h3>
                        <a href="">All She Wants To Do Is Dance</a>
                      </h3>
                    </div>
                    <span className="tg-bookwriter">
                      By: <a href="">Kathrine Culbertson</a>
                    </span>
                    <ul className="tg-postmetadata">
                      <li>
                        <a href="">
                          <i className="fa fa-comment-o" />
                          <i>21,415 Comments</i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fa fa-eye" />
                          <i>24,565 Views</i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
                <article className="item tg-post">
                  <figure>
                    <a href="">
                      <img
                        src="images/blog/img-03.jpg"
                        alt="image description"
                      />
                    </a>
                  </figure>
                  <div className="tg-postcontent">
                    <ul className="tg-bookscategories">
                      <li>
                        <a href="">Adventure</a>
                      </li>
                      <li>
                        <a href="">Fun</a>
                      </li>
                    </ul>
                    <div className="tg-themetagbox">
                      <span className="tg-themetag">featured</span>
                    </div>
                    <div className="tg-posttitle">
                      <h3>
                        <a href="">Why Walk When You Can Climb?</a>
                      </h3>
                    </div>
                    <span className="tg-bookwriter">
                      By: <a href="">Kathrine Culbertson</a>
                    </span>
                    <ul className="tg-postmetadata">
                      <li>
                        <a href="">
                          <i className="fa fa-comment-o" />
                          <i>21,415 Comments</i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fa fa-eye" />
                          <i>24,565 Views</i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
                <article className="item tg-post">
                  <figure>
                    <a href="">
                      <img
                        src="images/blog/img-04.jpg"
                        alt="image description"
                      />
                    </a>
                  </figure>
                  <div className="tg-postcontent">
                    <ul className="tg-bookscategories">
                      <li>
                        <a href="">Adventure</a>
                      </li>
                      <li>
                        <a href="">Fun</a>
                      </li>
                    </ul>
                    <div className="tg-themetagbox">
                      <span className="tg-themetag">featured</span>
                    </div>
                    <div className="tg-posttitle">
                      <h3>
                        <a href="">Dance Like Nobody’s Watching</a>
                      </h3>
                    </div>
                    <span className="tg-bookwriter">
                      By: <a href="">Kathrine Culbertson</a>
                    </span>
                    <ul className="tg-postmetadata">
                      <li>
                        <a href="">
                          <i className="fa fa-comment-o" />
                          <i>21,415 Comments</i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fa fa-eye" />
                          <i>24,565 Views</i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
                <article className="item tg-post">
                  <figure>
                    <a href="">
                      <img
                        src="images/blog/img-02.jpg"
                        alt="image description"
                      />
                    </a>
                  </figure>
                  <div className="tg-postcontent">
                    <ul className="tg-bookscategories">
                      <li>
                        <a href="">Adventure</a>
                      </li>
                      <li>
                        <a href="">Fun</a>
                      </li>
                    </ul>
                    <div className="tg-themetagbox">
                      <span className="tg-themetag">featured</span>
                    </div>
                    <div className="tg-posttitle">
                      <h3>
                        <a href="">All She Wants To Do Is Dance</a>
                      </h3>
                    </div>
                    <span className="tg-bookwriter">
                      By: <a href="">Kathrine Culbertson</a>
                    </span>
                    <ul className="tg-postmetadata">
                      <li>
                        <a href="">
                          <i className="fa fa-comment-o" />
                          <i>21,415 Comments</i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fa fa-eye" />
                          <i>24,565 Views</i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
                <article className="item tg-post">
                  <figure>
                    <a href="">
                      <img
                        src="images/blog/img-03.jpg"
                        alt="image description"
                      />
                    </a>
                  </figure>
                  <div className="tg-postcontent">
                    <ul className="tg-bookscategories">
                      <li>
                        <a href="">Adventure</a>
                      </li>
                      <li>
                        <a href="">Fun</a>
                      </li>
                    </ul>
                    <div className="tg-themetagbox">
                      <span className="tg-themetag">featured</span>
                    </div>
                    <div className="tg-posttitle">
                      <h3>
                        <a href="">Why Walk When You Can Climb?</a>
                      </h3>
                    </div>
                    <span className="tg-bookwriter">
                      By: <a href="">Kathrine Culbertson</a>
                    </span>
                    <ul className="tg-postmetadata">
                      <li>
                        <a href="">
                          <i className="fa fa-comment-o" />
                          <i>21,415 Comments</i>
                        </a>
                      </li>
                      <li>
                        <a href="">
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
      </div>
    </main>
  );
};

export default Home;
