/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className="bodywrap">
      <h1 className="d-none">Ego Mall - </h1>
      <section className="awe-section-1">
        <section className="s_slider">
          <div className="container">
            <div className="section home-slider">
              <div className="items">
                <a href="#">
                  <picture>
                    <source
                      media="(min-width: 1200px)"
                      srcSet="//bizweb.dktcdn.net/100/374/880/themes/748270/assets/slider_1.jpg?1656725435979"
                    />
                    <source
                      media="(min-width: 992px)"
                      srcSet="//bizweb.dktcdn.net/100/374/880/themes/748270/assets/slider_1.jpg?1656725435979"
                    />
                    <source
                      media="(min-width: 569px)"
                      srcSet="//bizweb.dktcdn.net/100/374/880/themes/748270/assets/slider_1.jpg?1656725435979"
                    />
                    <source
                      media="(min-width: 480px)"
                      srcSet="//bizweb.dktcdn.net/thumb/large/100/374/880/themes/748270/assets/slider_1.jpg?1656725435979"
                    />
                    <img
                      className="lazyload"
                      src="//bizweb.dktcdn.net/thumb/large/100/374/880/themes/748270/assets/slider_1.jpg?1656725435979"
                      alt="Slider 1"
                    />
                  </picture>
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="awe-section-2">
        <section className="section_category">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="clearfix titlecate">
                  <h2>Danh mục nổi bật</h2>
                </div>
                <div className="owlnav_cate clearfix">
                  <div className="owl_col_section owl_category slickcategory slick_margin slick-initialized slick-slider">
                    <div aria-live="polite" className="slick-list draggable">
                      <div
                        className="slick-track"
                        style={{
                          opacity: 1,
                          width: 1140,
                          transform: 'translate3d(0px, 0px, 0px)',
                        }}
                        role="listbox"
                      >
                        <div
                          className="slick-slide slick-current slick-active"
                          data-slick-index={0}
                          aria-hidden="false"
                          style={{ width: 160 }}
                          tabIndex={-1}
                          role="option"
                          aria-describedby="slick-slide00"
                        >
                          <div>
                            <div
                              className="item_category"
                              style={{ width: '100%', display: 'inline-block' }}
                            >
                              <div
                                className="item"
                                onclick="location.href='/dien-tu-va-cong-nghe';"
                              >
                                <div className="thumb_s">
                                  <a
                                    className="image"
                                    href="/dien-tu-va-cong-nghe"
                                    title="Điện tử và công nghệ"
                                    tabIndex={0}
                                  >
                                    <img
                                      className="image_cate_thumb lazyload loaded"
                                      src="//bizweb.dktcdn.net/thumb/compact/100/374/880/collections/ct1.png?v=1577470247840"
                                      data-src="//bizweb.dktcdn.net/thumb/compact/100/374/880/collections/ct1.png?v=1577470247840"
                                      alt="Điện tử và công nghệ"
                                      data-was-processed="true"
                                    />
                                  </a>
                                  <div className="info">
                                    <h4 className="title_cate_">
                                      <a
                                        href="/dien-tu-va-cong-nghe"
                                        title="Điện tử và công nghệ"
                                        tabIndex={0}
                                      >
                                        Điện tử và công nghệ
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div
                              className="item_category"
                              style={{ width: '100%', display: 'inline-block' }}
                            >
                              <div
                                className="item"
                                onclick="location.href='/dong-ho-hang-hieu';"
                              >
                                <div className="thumb_s">
                                  <a
                                    className="image"
                                    href="/dong-ho-hang-hieu"
                                    title="Đồng hồ hàng hiệu"
                                    tabIndex={0}
                                  >
                                    <img
                                      className="image_cate_thumb lazyload loaded"
                                      src="//bizweb.dktcdn.net/thumb/compact/100/374/880/collections/ct8.png?v=1577470357530"
                                      data-src="//bizweb.dktcdn.net/thumb/compact/100/374/880/collections/ct8.png?v=1577470357530"
                                      alt="Đồng hồ hàng hiệu"
                                      data-was-processed="true"
                                    />
                                  </a>
                                  <div className="info">
                                    <h4 className="title_cate_">
                                      <a
                                        href="/dong-ho-hang-hieu"
                                        title="Đồng hồ hàng hiệu"
                                        tabIndex={0}
                                      >
                                        Đồng hồ hàng hiệu
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-active"
                          data-slick-index={1}
                          aria-hidden="false"
                          style={{ width: 160 }}
                          tabIndex={-1}
                          role="option"
                          aria-describedby="slick-slide01"
                        >
                          <div>
                            <div
                              className="item_category"
                              style={{ width: '100%', display: 'inline-block' }}
                            >
                              <div
                                className="item"
                                onclick="location.href='/thoi-trang-phu-kien';"
                              >
                                <div className="thumb_s">
                                  <a
                                    className="image"
                                    href="/thoi-trang-phu-kien"
                                    title="Thời trang & phụ kiện"
                                    tabIndex={0}
                                  >
                                    <img
                                      className="image_cate_thumb lazyload loaded"
                                      src="//bizweb.dktcdn.net/thumb/compact/100/374/880/collections/c2.png?v=1577470400140"
                                      data-src="//bizweb.dktcdn.net/thumb/compact/100/374/880/collections/c2.png?v=1577470400140"
                                      alt="Thời trang & phụ kiện"
                                      data-was-processed="true"
                                    />
                                  </a>
                                  <div className="info">
                                    <h4 className="title_cate_">
                                      <a
                                        href="/thoi-trang-phu-kien"
                                        title="Thời trang & phụ kiện"
                                        tabIndex={0}
                                      >
                                        Thời trang &amp; phụ kiện
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div
                              className="item_category"
                              style={{ width: '100%', display: 'inline-block' }}
                            >
                              <div
                                className="item"
                                onclick="location.href='/me-be-do-choi';"
                              >
                                <div className="thumb_s">
                                  <a
                                    className="image"
                                    href="/me-be-do-choi"
                                    title="Mẹ, bé & đồ chơi"
                                    tabIndex={0}
                                  >
                                    <img
                                      className="image_cate_thumb lazyload loaded"
                                      src="//bizweb.dktcdn.net/thumb/compact/100/374/880/collections/ct10.png?v=1577470452757"
                                      data-src="//bizweb.dktcdn.net/thumb/compact/100/374/880/collections/ct10.png?v=1577470452757"
                                      alt="Mẹ, bé & đồ chơi"
                                      data-was-processed="true"
                                    />
                                  </a>
                                  <div className="info">
                                    <h4 className="title_cate_">
                                      <a
                                        href="/me-be-do-choi"
                                        title="Mẹ, bé & đồ chơi"
                                        tabIndex={0}
                                      >
                                        Mẹ, bé &amp; đồ chơi
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-active"
                          data-slick-index={2}
                          aria-hidden="false"
                          style={{ width: 160 }}
                          tabIndex={-1}
                          role="option"
                          aria-describedby="slick-slide02"
                        >
                          <div>
                            <div
                              className="item_category"
                              style={{ width: '100%', display: 'inline-block' }}
                            >
                              <div
                                className="item"
                                onclick="location.href='/lam-dep';"
                              >
                                <div className="thumb_s">
                                  <a
                                    className="image"
                                    href="/lam-dep"
                                    title="Làm đẹp"
                                    tabIndex={0}
                                  >
                                    <img
                                      className="image_cate_thumb lazyload loaded"
                                      src="//bizweb.dktcdn.net/thumb/compact/100/374/880/collections/ct11.png?v=1577470527843"
                                      data-src="//bizweb.dktcdn.net/thumb/compact/100/374/880/collections/ct11.png?v=1577470527843"
                                      alt="Làm đẹp"
                                      data-was-processed="true"
                                    />
                                  </a>
                                  <div className="info">
                                    <h4 className="title_cate_">
                                      <a
                                        href="/lam-dep"
                                        title="Làm đẹp"
                                        tabIndex={0}
                                      >
                                        Làm đẹp
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div
                              className="item_category"
                              style={{ width: '100%', display: 'inline-block' }}
                            >
                              <div
                                className="item"
                                onclick="location.href='/the-gioi-nuoc-hoa';"
                              >
                                <div className="thumb_s">
                                  <a
                                    className="image"
                                    href="/the-gioi-nuoc-hoa"
                                    title="Thế giới nước hoa"
                                    tabIndex={0}
                                  >
                                    <img
                                      className="image_cate_thumb lazyload loaded"
                                      src="//bizweb.dktcdn.net/thumb/compact/100/374/880/collections/ct5.png?v=1577470543683"
                                      data-src="//bizweb.dktcdn.net/thumb/compact/100/374/880/collections/ct5.png?v=1577470543683"
                                      alt="Thế giới nước hoa"
                                      data-was-processed="true"
                                    />
                                  </a>
                                  <div className="info">
                                    <h4 className="title_cate_">
                                      <a
                                        href="/the-gioi-nuoc-hoa"
                                        title="Thế giới nước hoa"
                                        tabIndex={0}
                                      >
                                        Thế giới nước hoa
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-active"
                          data-slick-index={3}
                          aria-hidden="false"
                          style={{ width: 160 }}
                          tabIndex={-1}
                          role="option"
                          aria-describedby="slick-slide03"
                        >
                          <div>
                            <div
                              className="item_category"
                              style={{ width: '100%', display: 'inline-block' }}
                            >
                              <div
                                className="item"
                                onclick="location.href='/do-choi-va-game';"
                              >
                                <div className="thumb_s">
                                  <a
                                    className="image"
                                    href="/do-choi-va-game"
                                    title="Đồ chơi và game"
                                    tabIndex={0}
                                  >
                                    <img
                                      className="image_cate_thumb lazyload loaded"
                                      src="//bizweb.dktcdn.net/thumb/compact/100/374/880/collections/ct12.png?v=1577470573337"
                                      data-src="//bizweb.dktcdn.net/thumb/compact/100/374/880/collections/ct12.png?v=1577470573337"
                                      alt="Đồ chơi và game"
                                      data-was-processed="true"
                                    />
                                  </a>
                                  <div className="info">
                                    <h4 className="title_cate_">
                                      <a
                                        href="/do-choi-va-game"
                                        title="Đồ chơi và game"
                                        tabIndex={0}
                                      >
                                        Đồ chơi và game
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div
                              className="item_category"
                              style={{ width: '100%', display: 'inline-block' }}
                            >
                              <div
                                className="item"
                                onclick="location.href='/the-thao-du-lich';"
                              >
                                <div className="thumb_s">
                                  <a
                                    className="image"
                                    href="/the-thao-du-lich"
                                    title="Thể thao, du lịch"
                                    tabIndex={0}
                                  >
                                    <img
                                      className="image_cate_thumb lazyload loaded"
                                      src="//bizweb.dktcdn.net/thumb/compact/100/374/880/collections/ct10-c7ca391b-3881-4926-8973-3b0057a7967d.png?v=1577470604167"
                                      data-src="//bizweb.dktcdn.net/thumb/compact/100/374/880/collections/ct10-c7ca391b-3881-4926-8973-3b0057a7967d.png?v=1577470604167"
                                      alt="Thể thao, du lịch"
                                      data-was-processed="true"
                                    />
                                  </a>
                                  <div className="info">
                                    <h4 className="title_cate_">
                                      <a
                                        href="/the-thao-du-lich"
                                        title="Thể thao, du lịch"
                                        tabIndex={0}
                                      >
                                        Thể thao, du lịch
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-active"
                          data-slick-index={4}
                          aria-hidden="false"
                          style={{ width: 160 }}
                          tabIndex={-1}
                          role="option"
                          aria-describedby="slick-slide04"
                        >
                          <div>
                            <div
                              className="item_category"
                              style={{ width: '100%', display: 'inline-block' }}
                            >
                              <div
                                className="item"
                                onclick="location.href='/noi-that-kien-truc';"
                              >
                                <div className="thumb_s">
                                  <a
                                    className="image"
                                    href="/noi-that-kien-truc"
                                    title="Nội thất, kiến trúc"
                                    tabIndex={0}
                                  >
                                    <img
                                      className="image_cate_thumb lazyload loaded"
                                      src="//bizweb.dktcdn.net/thumb/compact/100/374/880/collections/ct14.png?v=1577470610790"
                                      data-src="//bizweb.dktcdn.net/thumb/compact/100/374/880/collections/ct14.png?v=1577470610790"
                                      alt="Nội thất, kiến trúc"
                                      data-was-processed="true"
                                    />
                                  </a>
                                  <div className="info">
                                    <h4 className="title_cate_">
                                      <a
                                        href="/noi-that-kien-truc"
                                        title="Nội thất, kiến trúc"
                                        tabIndex={0}
                                      >
                                        Nội thất, kiến trúc
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div
                              className="item_category"
                              style={{ width: '100%', display: 'inline-block' }}
                            >
                              <div
                                className="item"
                                onclick="location.href='/phu-tung-xe-hoi';"
                              >
                                <div className="thumb_s">
                                  <a
                                    className="image"
                                    href="/phu-tung-xe-hoi"
                                    title="Phụ tùng xe hơi"
                                    tabIndex={0}
                                  >
                                    <img
                                      className="image_cate_thumb lazyload loaded"
                                      src="//bizweb.dktcdn.net/thumb/compact/100/374/880/collections/ct4.png?v=1577470658733"
                                      data-src="//bizweb.dktcdn.net/thumb/compact/100/374/880/collections/ct4.png?v=1577470658733"
                                      alt="Phụ tùng xe hơi"
                                      data-was-processed="true"
                                    />
                                  </a>
                                  <div className="info">
                                    <h4 className="title_cate_">
                                      <a
                                        href="/phu-tung-xe-hoi"
                                        title="Phụ tùng xe hơi"
                                        tabIndex={0}
                                      >
                                        Phụ tùng xe hơi
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-active"
                          data-slick-index={5}
                          aria-hidden="false"
                          style={{ width: 160 }}
                          tabIndex={-1}
                          role="option"
                          aria-describedby="slick-slide05"
                        >
                          <div>
                            <div
                              className="item_category"
                              style={{ width: '100%', display: 'inline-block' }}
                            >
                              <div
                                className="item"
                                onclick="location.href='/do-gia-dung';"
                              >
                                <div className="thumb_s">
                                  <a
                                    className="image"
                                    href="/do-gia-dung"
                                    title="Đồ gia dụng"
                                    tabIndex={0}
                                  >
                                    <img
                                      className="image_cate_thumb lazyload loaded"
                                      src="//bizweb.dktcdn.net/thumb/compact/100/374/880/collections/ct17.png?v=1577470678823"
                                      data-src="//bizweb.dktcdn.net/thumb/compact/100/374/880/collections/ct17.png?v=1577470678823"
                                      alt="Đồ gia dụng"
                                      data-was-processed="true"
                                    />
                                  </a>
                                  <div className="info">
                                    <h4 className="title_cate_">
                                      <a
                                        href="/do-gia-dung"
                                        title="Đồ gia dụng"
                                        tabIndex={0}
                                      >
                                        Đồ gia dụng
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div
                              className="item_category"
                              style={{ width: '100%', display: 'inline-block' }}
                            >
                              <div
                                className="item"
                                onclick="location.href='/cho-thu-cung';"
                              >
                                <div className="thumb_s">
                                  <a
                                    className="image"
                                    href="/cho-thu-cung"
                                    title="Cho thú cưng"
                                    tabIndex={0}
                                  >
                                    <img
                                      className="image_cate_thumb lazyload loaded"
                                      src="//bizweb.dktcdn.net/thumb/compact/100/374/880/collections/ct18.png?v=1577470728620"
                                      data-src="//bizweb.dktcdn.net/thumb/compact/100/374/880/collections/ct18.png?v=1577470728620"
                                      alt="Cho thú cưng"
                                      data-was-processed="true"
                                    />
                                  </a>
                                  <div className="info">
                                    <h4 className="title_cate_">
                                      <a
                                        href="/cho-thu-cung"
                                        title="Cho thú cưng"
                                        tabIndex={0}
                                      >
                                        Cho thú cưng
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
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
      </section>
      <section className="awe-section-3">
        <section className="clearfix">
          <div className="container">
            <a className="scale_hover" href="#" title="alt">
              <img
                className="lazyload banner_leng"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                data-src="//bizweb.dktcdn.net/100/374/880/themes/748270/assets/banner-leng.jpg?1656725435979"
                alt="alt"
              />
            </a>
          </div>
        </section>
      </section>

      <section className="awe-section-5">
        <section className="section_three_banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <a className="scale_hover" href="#" title="alt1">
                  <img
                    className="three_img_banner lazyload"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                    data-src="//bizweb.dktcdn.net/100/374/880/themes/748270/assets/banner_col_1.jpg?1656725435979"
                    alt="alt1"
                  />
                </a>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <a className="scale_hover" href="#" title="alt2">
                  <img
                    className="three_img_banner lazyload"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                    data-src="//bizweb.dktcdn.net/100/374/880/themes/748270/assets/banner_col_2.jpg?1656725435979"
                    alt="alt2"
                  />
                </a>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <a className="scale_hover" href="#" title="alt3">
                  <img
                    className="three_img_banner lazyload"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                    data-src="//bizweb.dktcdn.net/100/374/880/themes/748270/assets/banner_col_3.jpg?1656725435979"
                    alt="alt3"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="awe-section-8">
        <section className="section_product_block">
          <div className="container">
            <div className="title_module clearfix dienmay">
              <h2>
                <a href="dien-tu-va-cong-nghe" title="Điện máy, Gia dụng">
                  Điện máy, Gia dụng
                </a>
              </h2>
            </div>
            <div className="ulmenu">
              <a href="/may-tinh" title="Máy tính">
                <span>Máy tính</span>
              </a>
              <a href="/dien-thoai" title="Điện thoại">
                <span>Điện thoại</span>
              </a>
              <a href="/tivi" title="Tivi">
                <span>Tivi</span>
              </a>
              <a href="/dinh-vi" title="Định vị">
                <span>Định vị</span>
              </a>
              <a href="/smart-watch" title="Smart watch">
                <span>Smart watch</span>
              </a>
            </div>
            <div className="contentproduct clearfix">
              <div className="imageblock clearifx">
                <a className="scale_hover" href="#" title="baner doc 3">
                  <img
                    className="block_img_height lazyload loaded"
                    src="//bizweb.dktcdn.net/100/374/880/themes/748270/assets/banner_doc_3.jpg?1656725435979"
                    data-src="//bizweb.dktcdn.net/100/374/880/themes/748270/assets/banner_doc_3.jpg?1656725435979"
                    alt="baner doc 3"
                    data-was-processed="true"
                  />
                </a>
              </div>
              <div className="content_block">
                <div className="slick_product slickproduct_3 slick-initialized slick-slider">
                  <button
                    type="button"
                    data-role="none"
                    className="slick-prev slick-arrow slick-disabled"
                    aria-label="Previous"
                    role="button"
                    aria-disabled="true"
                    style={{ display: 'block' }}
                  >
                    Previous
                  </button>
                  <div aria-live="polite" className="slick-list draggable">
                    <div
                      className="slick-track"
                      style={{
                        opacity: 1,
                        width: 1010,
                        transform: 'translate3d(0px, 0px, 0px)',
                      }}
                      role="listbox"
                    >
                      <div
                        className="slick-slide slick-current slick-active"
                        data-slick-index={0}
                        aria-hidden="false"
                        style={{ width: 202 }}
                        tabIndex={-1}
                        role="option"
                        aria-describedby="slick-slide30"
                      >
                        <div>
                          <div
                            className="item"
                            style={{ width: '100%', display: 'inline-block' }}
                          >
                            <div className="item_product_main">
                              <form
                                action="/cart/add"
                                method="post"
                                className="variants product-action"
                                data-id="product-actions-16610206"
                                encType="multipart/form-data"
                              >
                                <div className="product-thumbnail">
                                  <a
                                    className="image_thumb scale_hover"
                                    href="/dien-thoai-honor-7x-64gb-4gb-3-camera"
                                    title="Điện thoại Honor 7X 64GB/4GB 3 camera"
                                    tabIndex={0}
                                  >
                                    <img
                                      className="lazyload loaded"
                                      src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/7329f4ef40e4ead01e089872faf6ae.jpg?v=1577471328000"
                                      data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/7329f4ef40e4ead01e089872faf6ae.jpg?v=1577471328000"
                                      alt="Điện thoại Honor 7X 64GB/4GB 3 camera"
                                      data-was-processed="true"
                                    />
                                  </a>
                                  <div className="action">
                                    <a
                                      title="Xem nhanh"
                                      href="/dien-thoai-honor-7x-64gb-4gb-3-camera"
                                      data-handle="dien-thoai-honor-7x-64gb-4gb-3-camera"
                                      className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                      tabIndex={0}
                                    >
                                      <i className="fas fa-search-plus" />
                                    </a>
                                    <input
                                      type="hidden"
                                      name="variantId"
                                      defaultValue={29842224}
                                      tabIndex={0}
                                    />
                                    <button
                                      className="hidden-xs btn-buy btn-cart btn btn-views left-to add_to_cart active "
                                      title="Thêm vào giỏ hàng"
                                      tabIndex={0}
                                    >
                                      <i className="fas fa-shopping-basket iconcart" />
                                    </button>
                                  </div>
                                </div>
                                <div className="product-info">
                                  <h3 className="product-name">
                                    <a
                                      href="/dien-thoai-honor-7x-64gb-4gb-3-camera"
                                      title="Điện thoại Honor 7X 64GB/4GB 3 camera"
                                      tabIndex={0}
                                    >
                                      Điện thoại Honor 7X 64GB/4GB 3 camera
                                    </a>
                                  </h3>
                                  <div className="price-box">5.490.000₫</div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div
                            className="item"
                            style={{ width: '100%', display: 'inline-block' }}
                          >
                            <div className="item_product_main">
                              <form
                                action="/cart/add"
                                method="post"
                                className="variants product-action"
                                data-id="product-actions-16610205"
                                encType="multipart/form-data"
                              >
                                <div className="product-thumbnail">
                                  <a
                                    className="image_thumb scale_hover"
                                    href="/dien-thoai-xiaomi-redmi-note-4"
                                    title="Điện thoại Xiaomi Redmi Note 4"
                                    tabIndex={0}
                                  >
                                    <img
                                      className="lazyload loaded"
                                      src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/mph1075h1u2769d20170708t101837-257fde55-9593-4828-b325-c098b3da3aac.jpg?v=1577471327120"
                                      data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/mph1075h1u2769d20170708t101837-257fde55-9593-4828-b325-c098b3da3aac.jpg?v=1577471327120"
                                      alt="Điện thoại Xiaomi Redmi Note 4"
                                      data-was-processed="true"
                                    />
                                  </a>
                                  <div className="action">
                                    <a
                                      title="Xem nhanh"
                                      href="/dien-thoai-xiaomi-redmi-note-4"
                                      data-handle="dien-thoai-xiaomi-redmi-note-4"
                                      className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                      tabIndex={0}
                                    >
                                      <i className="fas fa-search-plus" />
                                    </a>
                                    <input
                                      className="hidden"
                                      type="hidden"
                                      name="variantId"
                                      defaultValue={29842223}
                                      tabIndex={0}
                                    />
                                    <button
                                      className="hidden-xs btn btn-cart btn btn-views left-to"
                                      title="Nhiều lựa chọn"
                                      type="button"
                                      onclick="window.location.href='/dien-thoai-xiaomi-redmi-note-4'"
                                      tabIndex={0}
                                    >
                                      <i className="fas fa-cog" />
                                    </button>
                                  </div>
                                </div>
                                <div className="product-info">
                                  <h3 className="product-name">
                                    <a
                                      href="/dien-thoai-xiaomi-redmi-note-4"
                                      title="Điện thoại Xiaomi Redmi Note 4"
                                      tabIndex={0}
                                    >
                                      Điện thoại Xiaomi Redmi Note 4
                                    </a>
                                  </h3>
                                  <div className="price-box">3.990.000₫</div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-active"
                        data-slick-index={1}
                        aria-hidden="false"
                        style={{ width: 202 }}
                        tabIndex={-1}
                        role="option"
                        aria-describedby="slick-slide31"
                      >
                        <div>
                          <div
                            className="item"
                            style={{ width: '100%', display: 'inline-block' }}
                          >
                            <div className="item_product_main">
                              <form
                                action="/cart/add"
                                method="post"
                                className="variants product-action"
                                data-id="product-actions-16610204"
                                encType="multipart/form-data"
                              >
                                <div className="product-thumbnail">
                                  <a
                                    className="image_thumb scale_hover"
                                    href="/iphone-6-32gb-hang-chinh-hang"
                                    title="iPhone 6 32GB - hàng chính hãng"
                                    tabIndex={0}
                                  >
                                    <img
                                      className="lazyload loaded"
                                      src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/f08e0e8a8c06ae2d12cbd3ccaedbf9.jpg?v=1577471325000"
                                      data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/f08e0e8a8c06ae2d12cbd3ccaedbf9.jpg?v=1577471325000"
                                      alt="iPhone 6 32GB - hàng chính hãng"
                                      data-was-processed="true"
                                    />
                                  </a>
                                  <div className="action">
                                    <a
                                      title="Xem nhanh"
                                      href="/iphone-6-32gb-hang-chinh-hang"
                                      data-handle="iphone-6-32gb-hang-chinh-hang"
                                      className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                      tabIndex={0}
                                    >
                                      <i className="fas fa-search-plus" />
                                    </a>
                                  </div>
                                </div>
                                <div className="product-info">
                                  <h3 className="product-name">
                                    <a
                                      href="/iphone-6-32gb-hang-chinh-hang"
                                      title="iPhone 6 32GB - hàng chính hãng"
                                      tabIndex={0}
                                    >
                                      iPhone 6 32GB - hàng chính hãng
                                    </a>
                                  </h3>
                                  <div className="price-box">6.990.000₫</div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div
                            className="item"
                            style={{ width: '100%', display: 'inline-block' }}
                          >
                            <div className="item_product_main">
                              <form
                                action="/cart/add"
                                method="post"
                                className="variants product-action"
                                data-id="product-actions-16610203"
                                encType="multipart/form-data"
                              >
                                <div className="product-thumbnail">
                                  <a
                                    className="image_thumb scale_hover"
                                    href="/dien-thoai-xiaomi-mi-a1-64gb-4gb"
                                    title="Điện thoại Xiaomi Mi A1 64GB/4GB"
                                    tabIndex={0}
                                  >
                                    <img
                                      className="lazyload loaded"
                                      src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/0u4939d20170926t1409476909912.jpg?v=1577471325000"
                                      data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/0u4939d20170926t1409476909912.jpg?v=1577471325000"
                                      alt="Điện thoại Xiaomi Mi A1 64GB/4GB"
                                      data-was-processed="true"
                                    />
                                  </a>
                                  <span
                                    className="smart lazyload"
                                    data-src="//bizweb.dktcdn.net/100/374/880/themes/748270/assets/sale_label.png?1656725435979"
                                    data-was-processed="true"
                                    style={{
                                      backgroundImage:
                                        'url("//bizweb.dktcdn.net/100/374/880/themes/748270/assets/sale_label.png?1656725435979")',
                                    }}
                                  />
                                  <div className="action">
                                    <a
                                      title="Xem nhanh"
                                      href="/dien-thoai-xiaomi-mi-a1-64gb-4gb"
                                      data-handle="dien-thoai-xiaomi-mi-a1-64gb-4gb"
                                      className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                      tabIndex={0}
                                    >
                                      <i className="fas fa-search-plus" />
                                    </a>
                                  </div>
                                </div>
                                <div className="product-info">
                                  <h3 className="product-name">
                                    <a
                                      href="/dien-thoai-xiaomi-mi-a1-64gb-4gb"
                                      title="Điện thoại Xiaomi Mi A1 64GB/4GB"
                                      tabIndex={0}
                                    >
                                      Điện thoại Xiaomi Mi A1 64GB/4GB
                                    </a>
                                  </h3>
                                  <div className="price-box">
                                    4.790.000₫&nbsp;
                                    <span className="compare-price">
                                      5.590.000₫
                                    </span>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-active"
                        data-slick-index={2}
                        aria-hidden="false"
                        style={{ width: 202 }}
                        tabIndex={-1}
                        role="option"
                        aria-describedby="slick-slide32"
                      >
                        <div>
                          <div
                            className="item"
                            style={{ width: '100%', display: 'inline-block' }}
                          >
                            <div className="item_product_main">
                              <form
                                action="/cart/add"
                                method="post"
                                className="variants product-action"
                                data-id="product-actions-16610202"
                                encType="multipart/form-data"
                              >
                                <div className="product-thumbnail">
                                  <a
                                    className="image_thumb scale_hover"
                                    href="/dien-thoai-samsung-galaxy-j7-prime"
                                    title="Điện thoại Samsung Galaxy J7 Prime"
                                    tabIndex={0}
                                  >
                                    <img
                                      className="lazyload loaded"
                                      src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/samsunggalaxyj7black1u504d2016.jpg?v=1577471324203"
                                      data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/samsunggalaxyj7black1u504d2016.jpg?v=1577471324203"
                                      alt="Điện thoại Samsung Galaxy J7 Prime"
                                      data-was-processed="true"
                                    />
                                  </a>
                                  <span
                                    className="smart lazyload"
                                    data-src="//bizweb.dktcdn.net/100/374/880/themes/748270/assets/sale_label.png?1656725435979"
                                    data-was-processed="true"
                                    style={{
                                      backgroundImage:
                                        'url("//bizweb.dktcdn.net/100/374/880/themes/748270/assets/sale_label.png?1656725435979")',
                                    }}
                                  />
                                  <div className="action">
                                    <a
                                      title="Xem nhanh"
                                      href="/dien-thoai-samsung-galaxy-j7-prime"
                                      data-handle="dien-thoai-samsung-galaxy-j7-prime"
                                      className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                      tabIndex={0}
                                    >
                                      <i className="fas fa-search-plus" />
                                    </a>
                                    <input
                                      type="hidden"
                                      name="variantId"
                                      defaultValue={29842220}
                                      tabIndex={0}
                                    />
                                    <button
                                      className="hidden-xs btn-buy btn-cart btn btn-views left-to add_to_cart active "
                                      title="Thêm vào giỏ hàng"
                                      tabIndex={0}
                                    >
                                      <i className="fas fa-shopping-basket iconcart" />
                                    </button>
                                  </div>
                                </div>
                                <div className="product-info">
                                  <h3 className="product-name">
                                    <a
                                      href="/dien-thoai-samsung-galaxy-j7-prime"
                                      title="Điện thoại Samsung Galaxy J7 Prime"
                                      tabIndex={0}
                                    >
                                      Điện thoại Samsung Galaxy J7 Prime
                                    </a>
                                  </h3>
                                  <div className="price-box">
                                    4.690.000₫&nbsp;
                                    <span className="compare-price">
                                      5.900.000₫
                                    </span>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div
                            className="item"
                            style={{ width: '100%', display: 'inline-block' }}
                          >
                            <div className="item_product_main">
                              <form
                                action="/cart/add"
                                method="post"
                                className="variants product-action"
                                data-id="product-actions-16610201"
                                encType="multipart/form-data"
                              >
                                <div className="product-thumbnail">
                                  <a
                                    className="image_thumb scale_hover"
                                    href="/dien-thoai-xiaomi-redmi-5-16gb"
                                    title="Điện Thoại Xiaomi Redmi 5 16GB"
                                    tabIndex={0}
                                  >
                                    <img
                                      className="lazyload loaded"
                                      src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/1348fb2bd0f05cdebcf54b3f03d8bf.jpg?v=1577471323167"
                                      data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/1348fb2bd0f05cdebcf54b3f03d8bf.jpg?v=1577471323167"
                                      alt="Điện Thoại Xiaomi Redmi 5 16GB"
                                      data-was-processed="true"
                                    />
                                  </a>
                                  <div className="action">
                                    <a
                                      title="Xem nhanh"
                                      href="/dien-thoai-xiaomi-redmi-5-16gb"
                                      data-handle="dien-thoai-xiaomi-redmi-5-16gb"
                                      className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                      tabIndex={0}
                                    >
                                      <i className="fas fa-search-plus" />
                                    </a>
                                    <input
                                      type="hidden"
                                      name="variantId"
                                      defaultValue={29842219}
                                      tabIndex={0}
                                    />
                                    <button
                                      className="hidden-xs btn-buy btn-cart btn btn-views left-to add_to_cart active "
                                      title="Thêm vào giỏ hàng"
                                      tabIndex={0}
                                    >
                                      <i className="fas fa-shopping-basket iconcart" />
                                    </button>
                                  </div>
                                </div>
                                <div className="product-info">
                                  <h3 className="product-name">
                                    <a
                                      href="/dien-thoai-xiaomi-redmi-5-16gb"
                                      title="Điện Thoại Xiaomi Redmi 5 16GB"
                                      tabIndex={0}
                                    >
                                      Điện Thoại Xiaomi Redmi 5 16GB
                                    </a>
                                  </h3>
                                  <div className="price-box">2.700.000₫</div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-active"
                        data-slick-index={3}
                        aria-hidden="false"
                        style={{ width: 202 }}
                        tabIndex={-1}
                        role="option"
                        aria-describedby="slick-slide33"
                      >
                        <div>
                          <div
                            className="item"
                            style={{ width: '100%', display: 'inline-block' }}
                          >
                            <div className="item_product_main">
                              <form
                                action="/cart/add"
                                method="post"
                                className="variants product-action"
                                data-id="product-actions-16610200"
                                encType="multipart/form-data"
                              >
                                <div className="product-thumbnail">
                                  <a
                                    className="image_thumb scale_hover"
                                    href="/dien-thoai-blackberry-keyone-black-edition"
                                    title="Điện thoại BlackBerry KEYone Black Edition"
                                    tabIndex={0}
                                  >
                                    <img
                                      className="lazyload loaded"
                                      src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/779db757e1a7de8820fb21a47e2af4.jpg?v=1577471321977"
                                      data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/779db757e1a7de8820fb21a47e2af4.jpg?v=1577471321977"
                                      alt="Điện thoại BlackBerry KEYone Black Edition"
                                      data-was-processed="true"
                                    />
                                  </a>
                                  <div className="action">
                                    <a
                                      title="Xem nhanh"
                                      href="/dien-thoai-blackberry-keyone-black-edition"
                                      data-handle="dien-thoai-blackberry-keyone-black-edition"
                                      className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                      tabIndex={0}
                                    >
                                      <i className="fas fa-search-plus" />
                                    </a>
                                    <input
                                      type="hidden"
                                      name="variantId"
                                      defaultValue={29842218}
                                      tabIndex={0}
                                    />
                                    <button
                                      className="hidden-xs btn-buy btn-cart btn btn-views left-to add_to_cart active "
                                      title="Thêm vào giỏ hàng"
                                      tabIndex={0}
                                    >
                                      <i className="fas fa-shopping-basket iconcart" />
                                    </button>
                                  </div>
                                </div>
                                <div className="product-info">
                                  <h3 className="product-name">
                                    <a
                                      href="/dien-thoai-blackberry-keyone-black-edition"
                                      title="Điện thoại BlackBerry KEYone Black Edition"
                                      tabIndex={0}
                                    >
                                      Điện thoại BlackBerry KEYone Black Edition
                                    </a>
                                  </h3>
                                  <div className="price-box">15.890.000₫</div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div
                            className="item"
                            style={{ width: '100%', display: 'inline-block' }}
                          >
                            <div className="item_product_main">
                              <form
                                action="/cart/add"
                                method="post"
                                className="variants product-action"
                                data-id="product-actions-16610199"
                                encType="multipart/form-data"
                              >
                                <div className="product-thumbnail">
                                  <a
                                    className="image_thumb scale_hover"
                                    href="/dien-thoai-oppo-f3-hang-chinh-hang"
                                    title="Điện thoại OPPO F3 - hàng chính hãng"
                                    tabIndex={0}
                                  >
                                    <img
                                      className="lazyload loaded"
                                      src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/1u5395d20170803t122400533902.jpg?v=1577471320537"
                                      data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/1u5395d20170803t122400533902.jpg?v=1577471320537"
                                      alt="Điện thoại OPPO F3 - hàng chính hãng"
                                      data-was-processed="true"
                                    />
                                  </a>
                                  <div className="action">
                                    <a
                                      title="Xem nhanh"
                                      href="/dien-thoai-oppo-f3-hang-chinh-hang"
                                      data-handle="dien-thoai-oppo-f3-hang-chinh-hang"
                                      className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                      tabIndex={0}
                                    >
                                      <i className="fas fa-search-plus" />
                                    </a>
                                    <input
                                      className="hidden"
                                      type="hidden"
                                      name="variantId"
                                      defaultValue={29842216}
                                      tabIndex={0}
                                    />
                                    <button
                                      className="hidden-xs btn btn-cart btn btn-views left-to"
                                      title="Nhiều lựa chọn"
                                      type="button"
                                      onclick="window.location.href='/dien-thoai-oppo-f3-hang-chinh-hang'"
                                      tabIndex={0}
                                    >
                                      <i className="fas fa-cog" />
                                    </button>
                                  </div>
                                </div>
                                <div className="product-info">
                                  <h3 className="product-name">
                                    <a
                                      href="/dien-thoai-oppo-f3-hang-chinh-hang"
                                      title="Điện thoại OPPO F3 - hàng chính hãng"
                                      tabIndex={0}
                                    >
                                      Điện thoại OPPO F3 - hàng chính hãng
                                    </a>
                                  </h3>
                                  <div className="price-box">5.100.000₫</div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index={4}
                        aria-hidden="true"
                        style={{ width: 202 }}
                        tabIndex={-1}
                        role="option"
                        aria-describedby="slick-slide34"
                      >
                        <div>
                          <div
                            className="item"
                            style={{ width: '100%', display: 'inline-block' }}
                          >
                            <div className="item_product_main">
                              <form
                                action="/cart/add"
                                method="post"
                                className="variants product-action"
                                data-id="product-actions-16610189"
                                encType="multipart/form-data"
                              >
                                <div className="product-thumbnail">
                                  <a
                                    className="image_thumb scale_hover"
                                    href="/ipad-mini-4-128gb-wifi"
                                    title="iPad Mini 4 128GB WiFi"
                                    tabIndex={-1}
                                  >
                                    <img
                                      className="lazyload"
                                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                      data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/ebbcb9e41038659c714722e1e287f1.jpg?v=1577471310643"
                                      alt="iPad Mini 4 128GB WiFi"
                                    />
                                  </a>
                                  <div className="action">
                                    <a
                                      title="Xem nhanh"
                                      href="/ipad-mini-4-128gb-wifi"
                                      data-handle="ipad-mini-4-128gb-wifi"
                                      className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                      tabIndex={-1}
                                    >
                                      <i className="fas fa-search-plus" />
                                    </a>
                                    <input
                                      type="hidden"
                                      name="variantId"
                                      defaultValue={29842206}
                                      tabIndex={-1}
                                    />
                                    <button
                                      className="hidden-xs btn-buy btn-cart btn btn-views left-to add_to_cart active "
                                      title="Thêm vào giỏ hàng"
                                      tabIndex={-1}
                                    >
                                      <i className="fas fa-shopping-basket iconcart" />
                                    </button>
                                  </div>
                                </div>
                                <div className="product-info">
                                  <h3 className="product-name">
                                    <a
                                      href="/ipad-mini-4-128gb-wifi"
                                      title="iPad Mini 4 128GB WiFi"
                                      tabIndex={-1}
                                    >
                                      iPad Mini 4 128GB WiFi
                                    </a>
                                  </h3>
                                  <div className="price-box">12.000.000₫</div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div
                            className="item"
                            style={{ width: '100%', display: 'inline-block' }}
                          >
                            <div className="item_product_main">
                              <form
                                action="/cart/add"
                                method="post"
                                className="variants product-action"
                                data-id="product-actions-16610188"
                                encType="multipart/form-data"
                              >
                                <div className="product-thumbnail">
                                  <a
                                    className="image_thumb scale_hover"
                                    href="/ipad-pro-9-7-inch-wifi-cellular"
                                    title="iPad Pro 9.7 inch Wifi Cellular"
                                    tabIndex={-1}
                                  >
                                    <img
                                      className="lazyload"
                                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                      data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/256gbgray1u696d20160331t224235.jpg?v=1577471309610"
                                      alt="iPad Pro 9.7 inch Wifi Cellular"
                                    />
                                  </a>
                                  <div className="action">
                                    <a
                                      title="Xem nhanh"
                                      href="/ipad-pro-9-7-inch-wifi-cellular"
                                      data-handle="ipad-pro-9-7-inch-wifi-cellular"
                                      className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                      tabIndex={-1}
                                    >
                                      <i className="fas fa-search-plus" />
                                    </a>
                                    <input
                                      type="hidden"
                                      name="variantId"
                                      defaultValue={29842205}
                                      tabIndex={-1}
                                    />
                                    <button
                                      className="hidden-xs btn-buy btn-cart btn btn-views left-to add_to_cart active "
                                      title="Thêm vào giỏ hàng"
                                      tabIndex={-1}
                                    >
                                      <i className="fas fa-shopping-basket iconcart" />
                                    </button>
                                  </div>
                                </div>
                                <div className="product-info">
                                  <h3 className="product-name">
                                    <a
                                      href="/ipad-pro-9-7-inch-wifi-cellular"
                                      title="iPad Pro 9.7 inch Wifi Cellular"
                                      tabIndex={-1}
                                    >
                                      iPad Pro 9.7 inch Wifi Cellular
                                    </a>
                                  </h3>
                                  <div className="price-box">9.000.000₫</div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    data-role="none"
                    className="slick-next slick-arrow"
                    aria-label="Next"
                    role="button"
                    style={{ display: 'block' }}
                    aria-disabled="false"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="awe-section-9">
        <section className="section_phukien">
          <div className="container">
            <h2 className="title_modules">
              <a
                href="san-pham-noi-bat"
                title="Phụ kiện nổi bật"
                className="large"
              >
                Phụ kiện nổi bật
              </a>
              <span className="mini">
                Những phụ kiện đi kèm giá cực kỳ ưu đãi cho khách hàng khi mua
                sắm online
              </span>
            </h2>
            <div className="section wapnamwatch">
              <div className="slick_product slickphukien slick-initialized slick-slider">
                <button
                  type="button"
                  data-role="none"
                  className="slick-prev slick-arrow"
                  aria-label="Previous"
                  role="button"
                  aria-disabled="false"
                  style={{ display: 'block' }}
                >
                  Previous
                </button>
                <div aria-live="polite" className="slick-list draggable">
                  <div
                    className="slick-track"
                    style={{
                      opacity: 1,
                      width: 1369,
                      transform: 'translate3d(-228px, 0px, 0px)',
                    }}
                    role="listbox"
                  >
                    <div
                      className="item slick-slide"
                      data-slick-index={0}
                      aria-hidden="true"
                      style={{ width: 228 }}
                      tabIndex={-1}
                      role="option"
                      aria-describedby="slick-slide60"
                    >
                      <div className="item_product_main">
                        <form
                          action="/cart/add"
                          method="post"
                          className="variants product-action"
                          data-id="product-actions-16610206"
                          encType="multipart/form-data"
                        >
                          <div className="product-thumbnail">
                            <a
                              className="image_thumb scale_hover"
                              href="/dien-thoai-honor-7x-64gb-4gb-3-camera"
                              title="Điện thoại Honor 7X 64GB/4GB 3 camera"
                              tabIndex={-1}
                            >
                              <img
                                className="lazyload"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/7329f4ef40e4ead01e089872faf6ae.jpg?v=1577471328000"
                                alt="Điện thoại Honor 7X 64GB/4GB 3 camera"
                              />
                            </a>
                            <div className="action">
                              <a
                                title="Xem nhanh"
                                href="/dien-thoai-honor-7x-64gb-4gb-3-camera"
                                data-handle="dien-thoai-honor-7x-64gb-4gb-3-camera"
                                className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                tabIndex={-1}
                              >
                                <i className="fas fa-search-plus" />
                              </a>
                              <input
                                type="hidden"
                                name="variantId"
                                defaultValue={29842224}
                                tabIndex={-1}
                              />
                              <button
                                className="hidden-xs btn-buy btn-cart btn btn-views left-to add_to_cart active "
                                title="Thêm vào giỏ hàng"
                                tabIndex={-1}
                              >
                                <i className="fas fa-shopping-basket iconcart" />
                              </button>
                            </div>
                          </div>
                          <div className="product-info">
                            <h3 className="product-name">
                              <a
                                href="/dien-thoai-honor-7x-64gb-4gb-3-camera"
                                title="Điện thoại Honor 7X 64GB/4GB 3 camera"
                                tabIndex={-1}
                              >
                                Điện thoại Honor 7X 64GB/4GB 3 camera
                              </a>
                            </h3>
                            <div className="price-box">5.490.000₫</div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div
                      className="item slick-slide slick-active"
                      data-slick-index={1}
                      aria-hidden="false"
                      style={{ width: 228 }}
                      tabIndex={-1}
                      role="option"
                      aria-describedby="slick-slide61"
                    >
                      <div className="item_product_main">
                        <form
                          action="/cart/add"
                          method="post"
                          className="variants product-action"
                          data-id="product-actions-16610201"
                          encType="multipart/form-data"
                        >
                          <div className="product-thumbnail">
                            <a
                              className="image_thumb scale_hover"
                              href="/dien-thoai-xiaomi-redmi-5-16gb"
                              title="Điện Thoại Xiaomi Redmi 5 16GB"
                              tabIndex={0}
                            >
                              <img
                                className="lazyload loaded"
                                src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/1348fb2bd0f05cdebcf54b3f03d8bf.jpg?v=1577471323167"
                                data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/1348fb2bd0f05cdebcf54b3f03d8bf.jpg?v=1577471323167"
                                alt="Điện Thoại Xiaomi Redmi 5 16GB"
                                data-was-processed="true"
                              />
                            </a>
                            <div className="action">
                              <a
                                title="Xem nhanh"
                                href="/dien-thoai-xiaomi-redmi-5-16gb"
                                data-handle="dien-thoai-xiaomi-redmi-5-16gb"
                                className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                tabIndex={0}
                              >
                                <i className="fas fa-search-plus" />
                              </a>
                              <input
                                type="hidden"
                                name="variantId"
                                defaultValue={29842219}
                                tabIndex={0}
                              />
                              <button
                                className="hidden-xs btn-buy btn-cart btn btn-views left-to add_to_cart active "
                                title="Thêm vào giỏ hàng"
                                tabIndex={0}
                              >
                                <i className="fas fa-shopping-basket iconcart" />
                              </button>
                            </div>
                          </div>
                          <div className="product-info">
                            <h3 className="product-name">
                              <a
                                href="/dien-thoai-xiaomi-redmi-5-16gb"
                                title="Điện Thoại Xiaomi Redmi 5 16GB"
                                tabIndex={0}
                              >
                                Điện Thoại Xiaomi Redmi 5 16GB
                              </a>
                            </h3>
                            <div className="price-box">2.700.000₫</div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div
                      className="item slick-slide slick-active"
                      data-slick-index={2}
                      aria-hidden="false"
                      style={{ width: 228 }}
                      tabIndex={-1}
                      role="option"
                      aria-describedby="slick-slide62"
                    >
                      <div className="item_product_main">
                        <form
                          action="/cart/add"
                          method="post"
                          className="variants product-action"
                          data-id="product-actions-16610200"
                          encType="multipart/form-data"
                        >
                          <div className="product-thumbnail">
                            <a
                              className="image_thumb scale_hover"
                              href="/dien-thoai-blackberry-keyone-black-edition"
                              title="Điện thoại BlackBerry KEYone Black Edition"
                              tabIndex={0}
                            >
                              <img
                                className="lazyload loaded"
                                src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/779db757e1a7de8820fb21a47e2af4.jpg?v=1577471321977"
                                data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/779db757e1a7de8820fb21a47e2af4.jpg?v=1577471321977"
                                alt="Điện thoại BlackBerry KEYone Black Edition"
                                data-was-processed="true"
                              />
                            </a>
                            <div className="action">
                              <a
                                title="Xem nhanh"
                                href="/dien-thoai-blackberry-keyone-black-edition"
                                data-handle="dien-thoai-blackberry-keyone-black-edition"
                                className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                tabIndex={0}
                              >
                                <i className="fas fa-search-plus" />
                              </a>
                              <input
                                type="hidden"
                                name="variantId"
                                defaultValue={29842218}
                                tabIndex={0}
                              />
                              <button
                                className="hidden-xs btn-buy btn-cart btn btn-views left-to add_to_cart active "
                                title="Thêm vào giỏ hàng"
                                tabIndex={0}
                              >
                                <i className="fas fa-shopping-basket iconcart" />
                              </button>
                            </div>
                          </div>
                          <div className="product-info">
                            <h3 className="product-name">
                              <a
                                href="/dien-thoai-blackberry-keyone-black-edition"
                                title="Điện thoại BlackBerry KEYone Black Edition"
                                tabIndex={0}
                              >
                                Điện thoại BlackBerry KEYone Black Edition
                              </a>
                            </h3>
                            <div className="price-box">15.890.000₫</div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div
                      className="item slick-slide slick-active"
                      data-slick-index={3}
                      aria-hidden="false"
                      style={{ width: 228 }}
                      tabIndex={-1}
                      role="option"
                      aria-describedby="slick-slide63"
                    >
                      <div className="item_product_main">
                        <form
                          action="/cart/add"
                          method="post"
                          className="variants product-action"
                          data-id="product-actions-16610199"
                          encType="multipart/form-data"
                        >
                          <div className="product-thumbnail">
                            <a
                              className="image_thumb scale_hover"
                              href="/dien-thoai-oppo-f3-hang-chinh-hang"
                              title="Điện thoại OPPO F3 - hàng chính hãng"
                              tabIndex={0}
                            >
                              <img
                                className="lazyload loaded"
                                src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/1u5395d20170803t122400533902.jpg?v=1577471320537"
                                data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/1u5395d20170803t122400533902.jpg?v=1577471320537"
                                alt="Điện thoại OPPO F3 - hàng chính hãng"
                                data-was-processed="true"
                              />
                            </a>
                            <div className="action">
                              <a
                                title="Xem nhanh"
                                href="/dien-thoai-oppo-f3-hang-chinh-hang"
                                data-handle="dien-thoai-oppo-f3-hang-chinh-hang"
                                className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                tabIndex={0}
                              >
                                <i className="fas fa-search-plus" />
                              </a>
                              <input
                                className="hidden"
                                type="hidden"
                                name="variantId"
                                defaultValue={29842216}
                                tabIndex={0}
                              />
                              <button
                                className="hidden-xs btn btn-cart btn btn-views left-to"
                                title="Nhiều lựa chọn"
                                type="button"
                                onclick="window.location.href='/dien-thoai-oppo-f3-hang-chinh-hang'"
                                tabIndex={0}
                              >
                                <i className="fas fa-cog" />
                              </button>
                            </div>
                          </div>
                          <div className="product-info">
                            <h3 className="product-name">
                              <a
                                href="/dien-thoai-oppo-f3-hang-chinh-hang"
                                title="Điện thoại OPPO F3 - hàng chính hãng"
                                tabIndex={0}
                              >
                                Điện thoại OPPO F3 - hàng chính hãng
                              </a>
                            </h3>
                            <div className="price-box">5.100.000₫</div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div
                      className="item slick-slide slick-active"
                      data-slick-index={4}
                      aria-hidden="false"
                      style={{ width: 228 }}
                      tabIndex={-1}
                      role="option"
                      aria-describedby="slick-slide64"
                    >
                      <div className="item_product_main">
                        <form
                          action="/cart/add"
                          method="post"
                          className="variants product-action"
                          data-id="product-actions-16610196"
                          encType="multipart/form-data"
                        >
                          <div className="product-thumbnail">
                            <a
                              className="image_thumb scale_hover"
                              href="/man-hinh-benq-gw2270-22inch-fullhd"
                              title="Màn hình BenQ GW2270 22inch FullHD"
                              tabIndex={0}
                            >
                              <img
                                className="lazyload loaded"
                                src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/gw22701u579d20161011t162311244.jpg?v=1577471317463"
                                data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/gw22701u579d20161011t162311244.jpg?v=1577471317463"
                                alt="Màn hình BenQ GW2270 22inch FullHD"
                                data-was-processed="true"
                              />
                            </a>
                            <span
                              className="smart lazyload"
                              data-src="//bizweb.dktcdn.net/100/374/880/themes/748270/assets/sale_label.png?1656725435979"
                              data-was-processed="true"
                              style={{
                                backgroundImage:
                                  'url("//bizweb.dktcdn.net/100/374/880/themes/748270/assets/sale_label.png?1656725435979")',
                              }}
                            />
                            <div className="action">
                              <a
                                title="Xem nhanh"
                                href="/man-hinh-benq-gw2270-22inch-fullhd"
                                data-handle="man-hinh-benq-gw2270-22inch-fullhd"
                                className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                tabIndex={0}
                              >
                                <i className="fas fa-search-plus" />
                              </a>
                              <input
                                type="hidden"
                                name="variantId"
                                defaultValue={29842213}
                                tabIndex={0}
                              />
                              <button
                                className="hidden-xs btn-buy btn-cart btn btn-views left-to add_to_cart active "
                                title="Thêm vào giỏ hàng"
                                tabIndex={0}
                              >
                                <i className="fas fa-shopping-basket iconcart" />
                              </button>
                            </div>
                          </div>
                          <div className="product-info">
                            <h3 className="product-name">
                              <a
                                href="/man-hinh-benq-gw2270-22inch-fullhd"
                                title="Màn hình BenQ GW2270 22inch FullHD"
                                tabIndex={0}
                              >
                                Màn hình BenQ GW2270 22inch FullHD
                              </a>
                            </h3>
                            <div className="price-box">
                              1.990.000₫&nbsp;
                              <span className="compare-price">2.590.000₫</span>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div
                      className="item slick-slide slick-current slick-active"
                      data-slick-index={5}
                      aria-hidden="false"
                      style={{ width: 228 }}
                      tabIndex={-1}
                      role="option"
                      aria-describedby="slick-slide65"
                    >
                      <div className="item_product_main">
                        <form
                          action="/cart/add"
                          method="post"
                          className="variants product-action"
                          data-id="product-actions-16610195"
                          encType="multipart/form-data"
                        >
                          <div className="product-thumbnail">
                            <a
                              className="image_thumb scale_hover"
                              href="/laptop-hp-envy-13-ad158tu-3mr80pa"
                              title="Laptop HP Envy 13-ad158TU 3MR80PA"
                              tabIndex={0}
                            >
                              <img
                                className="lazyload loaded"
                                src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/cf5ed92fca0b0bd3dff9d6a85b44c3.jpg?v=1577471316343"
                                data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/cf5ed92fca0b0bd3dff9d6a85b44c3.jpg?v=1577471316343"
                                alt="Laptop HP Envy 13-ad158TU 3MR80PA"
                                data-was-processed="true"
                              />
                            </a>
                            <div className="action">
                              <a
                                title="Xem nhanh"
                                href="/laptop-hp-envy-13-ad158tu-3mr80pa"
                                data-handle="laptop-hp-envy-13-ad158tu-3mr80pa"
                                className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                tabIndex={0}
                              >
                                <i className="fas fa-search-plus" />
                              </a>
                              <input
                                type="hidden"
                                name="variantId"
                                defaultValue={29842212}
                                tabIndex={0}
                              />
                              <button
                                className="hidden-xs btn-buy btn-cart btn btn-views left-to add_to_cart active "
                                title="Thêm vào giỏ hàng"
                                tabIndex={0}
                              >
                                <i className="fas fa-shopping-basket iconcart" />
                              </button>
                            </div>
                          </div>
                          <div className="product-info">
                            <h3 className="product-name">
                              <a
                                href="/laptop-hp-envy-13-ad158tu-3mr80pa"
                                title="Laptop HP Envy 13-ad158TU 3MR80PA"
                                tabIndex={0}
                              >
                                Laptop HP Envy 13-ad158TU 3MR80PA
                              </a>
                            </h3>
                            <div className="price-box">18.690.000₫</div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  data-role="none"
                  className="slick-next slick-arrow slick-disabled"
                  aria-label="Next"
                  role="button"
                  style={{ display: 'block' }}
                  aria-disabled="true"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
