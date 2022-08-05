/* eslint-disable @next/next/no-img-element */

import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CategoryType } from '../../models/Category';
import CategoryHead from '../../pages/categories/CategoryHead';

import { useEffect } from 'react';
import AuthComponnet from '../AuthHeader';
import { useAuth } from '../../hook/use-auth';
import { isAuthenticate } from '../../utils/localStorage';
type Props = {
  category: CategoryType;
};

const Header = (props: Props) => {
  const { login, logout } = useAuth();
  return (
    <header>
      <div>
        <div className="wraphead_mobile clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                <span className="menubutton">
                  <i className="fas fa-bars" />
                </span>
                <div className="logo">
                  <Link href="/">
                    <a className="logo-wrapper ">
                      <img
                        src="//bizweb.dktcdn.net/100/374/880/themes/748270/assets/logo.png?1656725435979"
                        alt="logo Ego Mall"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-9 col-md-12 col-sm-12 col-12">
                <div className="col-search-engine hidden-991">
                  <div className="header_search">
                    <form
                      className="input-group search-bar"
                      action="/search"
                      method="get"
                      role="search"
                    >
                      <div className="collection-selector hidden-xs hidden-sm">
                        <div className="search_text">Chọn danh mục</div>
                        <div
                          id="search_info"
                          className="list_search"
                          style={{ display: 'none' }}
                        >
                          <div
                            className="search_item"
                            data-coll-id={2099463}
                            title="Phòng tắm"
                          >
                            Phòng tắm
                          </div>
                          <div
                            className="search_item"
                            data-coll-id={2099462}
                            title="Phòng ngủ"
                          >
                            Phòng ngủ
                          </div>
                          <div
                            className="search_item"
                            data-coll-id={2099461}
                            title="Phòng bếp"
                          >
                            Phòng bếp
                          </div>
                          <div
                            className="search_item"
                            data-coll-id={2099460}
                            title="Phòng khách"
                          >
                            Phòng khách
                          </div>
                          <div
                            className="search_item"
                            data-coll-id={2099416}
                            title="Cho thú cưng"
                          >
                            Cho thú cưng
                          </div>
                          <div
                            className="search_item"
                            data-coll-id={2099415}
                            title="Đồ gia dụng"
                          >
                            Đồ gia dụng
                          </div>
                          <div
                            className="search_item"
                            data-coll-id={2099414}
                            title="Phụ tùng xe hơi"
                          >
                            Phụ tùng xe hơi
                          </div>
                          <div
                            className="search_item"
                            data-coll-id={2099413}
                            title="Nội thất, kiến trúc"
                          >
                            Nội thất, kiến trúc
                          </div>
                          <div
                            className="search_item"
                            data-coll-id={2099412}
                            title="Thể thao, du lịch"
                          >
                            Thể thao, du lịch
                          </div>
                          <div
                            className="search_item"
                            data-coll-id={2099411}
                            title="Đồ chơi và game"
                          >
                            Đồ chơi và game
                          </div>
                          <div
                            className="search_item"
                            data-coll-id={2099410}
                            title="Thế giới nước hoa"
                          >
                            Thế giới nước hoa
                          </div>
                          <div
                            className="search_item"
                            data-coll-id={2099409}
                            title="Trang điểm"
                          >
                            Trang điểm
                          </div>
                          <div
                            className="search_item"
                            data-coll-id={2099408}
                            title="Chăm sóc da"
                          >
                            Chăm sóc da
                          </div>
                          <div
                            className="search_item"
                            data-coll-id={2099407}
                            title="Chăm sóc tóc"
                          >
                            Chăm sóc tóc
                          </div>
                          <div
                            className="search_item"
                            data-coll-id={2099406}
                            title="Làm đẹp"
                          >
                            Làm đẹp
                          </div>
                          <div
                            className="search_item"
                            data-coll-id={2099405}
                            title="Mẹ, bé & đồ chơi"
                          >
                            Mẹ, bé &amp; đồ chơi
                          </div>
                          <div
                            className="search_item"
                            data-coll-id={2099404}
                            title="Trang sức nữ"
                          >
                            Trang sức nữ
                          </div>
                          <div
                            className="search_item"
                            data-coll-id={2099403}
                            title="Túi ví nữ"
                          >
                            Túi ví nữ
                          </div>
                          <div
                            className="search_item"
                            data-coll-id={2099402}
                            title="Giày dép nữ"
                          >
                            Giày dép nữ
                          </div>
                          <div
                            className="search_item"
                            data-coll-id={2099401}
                            title="Trang phục nữ"
                          >
                            Trang phục nữ
                          </div>
                          <div className="liner_search" />
                          <div className="search_item active" data-coll-id={0}>
                            Tất cả
                          </div>
                        </div>
                      </div>
                      <input
                        type="search"
                        name="query"
                        placeholder="Tìm kiếm... "
                        className="input-group-field st-default-search-input search-text"
                        autoComplete="off"
                        required
                      />
                      <span className="input-group-btn">
                        <button className="btn icon-fallback-text">
                          <i className="fa fa-search" />
                        </button>
                      </span>
                    </form>
                    <ul className="keysearch">
                      <li>
                        <a title="iPhone" href="/search?query=iPhone">
                          iPhone
                        </a>
                      </li>
                      <li>
                        <a title="iPad Pro" href="/search?query=iPad%20Pro">
                          iPad Pro
                        </a>
                      </li>
                      <li>
                        <a
                          title="Samsung Note 10"
                          href="/search?query=Samsung%20Note%2010"
                        >
                          Samsung Note 10
                        </a>
                      </li>
                      <li>
                        <a title="Xiaomi" href="/search?query=Xiaomi">
                          Xiaomi
                        </a>
                      </li>
                      <li>
                        <a
                          title="Apple Watch"
                          href="/search?query=Apple%20Watch"
                        >
                          Apple Watch
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="rightcart">
                  <div className="cartsearch">
                    <div className="searchhd hidden-md">
                      <form
                        action="/search"
                        method="get"
                        className="input-group search-bar"
                        role="search"
                      >
                        <input
                          type="text"
                          name="query"
                          autoComplete="off"
                          required
                          placeholder="Tìm kiếm..."
                          className="input-group-field auto-search"
                        />
                        <button
                          type="submit"
                          className="visible_index btn icon-fallback-text"
                        >
                          <i className="fa fa-search" />
                        </button>
                      </form>
                    </div>
                    <div className="carthd">
                      <div className="mini-cart text-xs-center">
                        <div className="heading-cart cart_header">
                          <Link href="/cart">
                            <a className="img_hover_cart" title="Giỏ hàng">
                              <div className="icon_hotline">
                                <img
                                  src="//bizweb.dktcdn.net/100/374/880/themes/748270/assets/shopping-bag.svg?1656725435979"
                                  alt="Giỏ hàng"
                                />
                                <span className="bolds cartext">
                                  Giỏ hàng
                                  <span className="count_item count_item_pr">
                                    0
                                  </span>
                                </span>
                              </div>
                            </a>
                          </Link>
                        </div>
                        <div className="top-cart-content">
                          <ul
                            id="cart-sidebar"
                            className="mini-products-list count_li"
                          >
                            <div className="no-item">
                              <p>Không có sản phẩm nào.</p>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accout">
                    <div className="tkname">
                      <div>
                        <img
                          src="//bizweb.dktcdn.net/100/374/880/themes/748270/assets/user.svg?1656725435979"
                          alt="khách hàng"
                        />
                        <span>
                          Khách<span>Tài khoản</span>
                        </span>
                      </div>
                    </div>

                    <div className="group_ac">
                      {isAuthenticate() ? (
                        <div className="">
                          {isAuthenticate().user.role === 1 ? (
                            <Link href="/admin">
                              <a className="btnx">Admin</a>
                            </Link>
                          ) : (
                            ''
                          )}

                          <a onClick={() => logout()}>Đăng xuất</a>
                        </div>
                      ) : (
                        <div className="">
                          <Link href="/signin">
                            <a className="btnx">Đăng nhập</a>
                          </Link>
                          <Link href="/signup">
                            <a>Đăng ký</a>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section menupc">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-mega hidden-sm hidden-xs">
                <CategoryHead />
              </div>
              <div className="col-lg-9 col-md-9">
                <nav className="header-nav">
                  <ul className="item_big">
                    <li className="nav-item active ">
                      <Link href="/">
                        <a className="a-img" title="Trang chủ">
                          <span>Trang chủ</span>
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item  has-mega">
                      <Link href="/products">
                        <a className="a-img" title="Sản phẩm">
                          <span>Sản phẩm</span>
                          <i className="fa fa-angle-down" />
                        </a>
                      </Link>
                      <div className="mega-content">
                        <div className="level0-wrapper2">
                          <div className="nav-block nav-block-center">
                            <ul className="level0">
                              <li className="level1 parent item">
                                {' '}
                                <h2 className="h4">
                                  <a
                                    href="/dien-tu-va-cong-nghe"
                                    title="Điện tử và công nghệ"
                                  >
                                    Điện tử và công nghệ
                                  </a>
                                </h2>
                                <ul className="level1">
                                  <li className="level2">
                                    <i className="fa fa-angle-right" />{' '}
                                    <a href="/may-tinh" title="Máy tính">
                                      <span>Máy tính</span>
                                    </a>{' '}
                                  </li>
                                  <li className="level2">
                                    <i className="fa fa-angle-right" />{' '}
                                    <a href="/dien-thoai" title="Điện thoại">
                                      <span>Điện thoại</span>
                                    </a>{' '}
                                  </li>
                                  <li className="level2">
                                    <i className="fa fa-angle-right" />{' '}
                                    <a href="/tivi" title="Tivi">
                                      <span>Tivi</span>
                                    </a>{' '}
                                  </li>
                                  <li className="level2">
                                    <i className="fa fa-angle-right" />{' '}
                                    <a href="/dinh-vi" title="Định vị">
                                      <span>Định vị</span>
                                    </a>{' '}
                                  </li>
                                  <li className="level2">
                                    <i className="fa fa-angle-right" />{' '}
                                    <a href="/smart-watch" title="Smart watch">
                                      <span>Smart watch</span>
                                    </a>{' '}
                                  </li>
                                </ul>
                              </li>
                              <li className="level1 parent item">
                                {' '}
                                <h2 className="h4">
                                  <a
                                    href="/dong-ho-hang-hieu"
                                    title="Đồng hồ hàng hiệu"
                                  >
                                    Đồng hồ hàng hiệu
                                  </a>
                                </h2>
                                <ul className="level1">
                                  <li className="level2">
                                    <i className="fa fa-angle-right" />{' '}
                                    <a href="/dong-ho-nam" title="Đồng hồ nam">
                                      <span>Đồng hồ nam</span>
                                    </a>{' '}
                                  </li>
                                  <li className="level2">
                                    <i className="fa fa-angle-right" />{' '}
                                    <a href="/dong-ho-nu" title="Đồng hồ nữ">
                                      <span>Đồng hồ nữ</span>
                                    </a>{' '}
                                  </li>
                                  <li className="level2">
                                    <i className="fa fa-angle-right" />{' '}
                                    <a
                                      href="/dong-ho-be-trai"
                                      title="Đồng hồ bé trai"
                                    >
                                      <span>Đồng hồ bé trai</span>
                                    </a>{' '}
                                  </li>
                                  <li className="level2">
                                    <i className="fa fa-angle-right" />{' '}
                                    <a
                                      href="/dong-ho-be-gai"
                                      title="Đồng hồ bé gái"
                                    >
                                      <span>Đồng hồ bé gái</span>
                                    </a>{' '}
                                  </li>
                                </ul>
                              </li>
                              <li className="level1 parent item">
                                {' '}
                                <h2 className="h4">
                                  <a
                                    href="/thoi-trang-phu-kien"
                                    title="Thời trang & phụ kiện"
                                  >
                                    Thời trang &amp; phụ kiện
                                  </a>
                                </h2>
                                <ul className="level1">
                                  <li className="level2">
                                    <i className="fa fa-angle-right" />{' '}
                                    <a
                                      href="/trang-phuc-nu"
                                      title="Trang phục nữ"
                                    >
                                      <span>Trang phục nữ</span>
                                    </a>{' '}
                                  </li>
                                  <li className="level2">
                                    <i className="fa fa-angle-right" />{' '}
                                    <a href="/giay-dep-nu" title="Giày dép nữ">
                                      <span>Giày dép nữ</span>
                                    </a>{' '}
                                  </li>
                                  <li className="level2">
                                    <i className="fa fa-angle-right" />{' '}
                                    <a href="/tui-vi-nu" title="Túi ví nữ">
                                      <span>Túi ví nữ</span>
                                    </a>{' '}
                                  </li>
                                  <li className="level2">
                                    <i className="fa fa-angle-right" />{' '}
                                    <a
                                      href="/trang-suc-nu"
                                      title="Trang sức nữ"
                                    >
                                      <span>Trang sức nữ</span>
                                    </a>{' '}
                                  </li>
                                </ul>
                              </li>
                              <li className="level1 item">
                                {' '}
                                <h2 className="h4">
                                  <a
                                    href="/me-be-do-choi"
                                    title="Mẹ, bé & đồ chơi"
                                  >
                                    <span>Mẹ, bé &amp; đồ chơi</span>
                                  </a>{' '}
                                </h2>
                              </li>
                              <li className="level1 parent item">
                                {' '}
                                <h2 className="h4">
                                  <a href="/lam-dep" title="Làm đẹp">
                                    Làm đẹp
                                  </a>
                                </h2>
                                <ul className="level1">
                                  <li className="level2">
                                    <i className="fa fa-angle-right" />{' '}
                                    <a
                                      href="/cham-soc-toc"
                                      title="Chăm sóc tóc"
                                    >
                                      <span>Chăm sóc tóc</span>
                                    </a>{' '}
                                  </li>
                                  <li className="level2">
                                    <i className="fa fa-angle-right" />{' '}
                                    <a href="/cham-soc-da" title="Chăm sóc da">
                                      <span>Chăm sóc da</span>
                                    </a>{' '}
                                  </li>
                                  <li className="level2">
                                    <i className="fa fa-angle-right" />{' '}
                                    <a href="/trang-diem" title="Trang điểm">
                                      <span>Trang điểm</span>
                                    </a>{' '}
                                  </li>
                                </ul>
                              </li>
                              <li className="level1 item">
                                {' '}
                                <h2 className="h4">
                                  <a
                                    href="/the-gioi-nuoc-hoa"
                                    title="Thế giới nước hoa"
                                  >
                                    <span>Thế giới nước hoa</span>
                                  </a>{' '}
                                </h2>
                              </li>
                              <li className="level1 item">
                                {' '}
                                <h2 className="h4">
                                  <a
                                    href="/do-choi-va-game"
                                    title="Đồ chơi và game"
                                  >
                                    <span>Đồ chơi và game</span>
                                  </a>{' '}
                                </h2>
                              </li>
                              <li className="level1 item">
                                {' '}
                                <h2 className="h4">
                                  <a
                                    href="/the-thao-du-lich"
                                    title="Thể thao, du lịch"
                                  >
                                    <span>Thể thao, du lịch</span>
                                  </a>{' '}
                                </h2>
                              </li>
                              <li className="level1 parent item">
                                {' '}
                                <h2 className="h4">
                                  <a
                                    href="/noi-that-kien-truc"
                                    title="Nội thất, kiến trúc"
                                  >
                                    Nội thất, kiến trúc
                                  </a>
                                </h2>
                                <ul className="level1">
                                  <li className="level2">
                                    <i className="fa fa-angle-right" />{' '}
                                    <a href="/phong-khach" title="Phòng khách">
                                      <span>Phòng khách</span>
                                    </a>{' '}
                                  </li>
                                  <li className="level2">
                                    <i className="fa fa-angle-right" />{' '}
                                    <a href="/phong-bep" title="Phòng bếp">
                                      <span>Phòng bếp</span>
                                    </a>{' '}
                                  </li>
                                  <li className="level2">
                                    <i className="fa fa-angle-right" />{' '}
                                    <a href="/phong-ngu" title="Phòng ngủ">
                                      <span>Phòng ngủ</span>
                                    </a>{' '}
                                  </li>
                                  <li className="level2">
                                    <i className="fa fa-angle-right" />{' '}
                                    <a href="/phong-tam" title="Phòng tắm">
                                      <span>Phòng tắm</span>
                                    </a>{' '}
                                  </li>
                                </ul>
                              </li>
                              <li className="level1 item">
                                {' '}
                                <h2 className="h4">
                                  <a
                                    href="/phu-tung-xe-hoi"
                                    title="Phụ tùng xe hơi"
                                  >
                                    <span>Phụ tùng xe hơi</span>
                                  </a>{' '}
                                </h2>
                              </li>
                              <li className="level1 item">
                                {' '}
                                <h2 className="h4">
                                  <a href="/do-gia-dung" title="Đồ gia dụng">
                                    <span>Đồ gia dụng</span>
                                  </a>{' '}
                                </h2>
                              </li>
                              <li className="level1 item">
                                {' '}
                                <h2 className="h4">
                                  <a href="/cho-thu-cung" title="Cho thú cưng">
                                    <span>Cho thú cưng</span>
                                  </a>{' '}
                                </h2>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item ">
                      <a className="a-img" href="/lien-he" title="Liên hệ">
                        <span>Liên hệ</span>
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a
                        className="a-img"
                        href="/ve-chung-toi"
                        title="Về chúng tôi"
                      >
                        <span>Về chúng tôi</span>
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a className="a-img" href="/tin-tuc" title="Tin tức">
                        <span>Tin tức</span>
                        <i className="fa fa-angle-down" />
                      </a>
                      <ul className="item_small">
                        <li>
                          <a href="/tin-cong-nghe" title="Tin công nghệ">
                            Tin công nghệ{' '}
                          </a>
                        </li>
                        <li>
                          <a href="/tin-meo-vat" title="Tin mẹo vặt">
                            Tin mẹo vặt{' '}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item ">
                      <a
                        className="a-img"
                        href="/khuyen-mai"
                        title="Khuyến mại"
                      >
                        <span>Khuyến mại</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapmenu_right d-lg">
          <div className="wrapmenu">
            <div className="wrapmenu_full menumain_full">
              <div className="containers">
                {/* Menu mobile */}
                <div className="contenttop">
                  <div className="section margin-bottom-10 margin-top-20"></div>
                </div>
                <div className="menu_mobile">
                  <ul className="ul_collections">
                    <li className="level0 level-top parent">
                      <Link href="/">Trang chủ</Link>
                    </li>
                    <li className="level0 level-top parent">
                      <a href="/collections/all">Sản phẩm</a>
                      <i className="fa fa-plus" />
                      <ul className="level0" style={{ display: 'none' }}>
                        <li className="level1 ">
                          <a href="/dien-tu-va-cong-nghe">
                            {' '}
                            <span>Điện tử và công nghệ</span>{' '}
                          </a>
                          <i className="fa fa-plus" />
                          <ul className="level1" style={{ display: 'none' }}>
                            <li className="level2 ">
                              <a href="/may-tinh">
                                <span>Máy tính</span>
                              </a>
                            </li>
                            <li className="level2 ">
                              <a href="/dien-thoai">
                                <span>Điện thoại</span>
                              </a>
                            </li>
                            <li className="level2 ">
                              <a href="/tivi">
                                <span>Tivi</span>
                              </a>
                            </li>
                            <li className="level2 ">
                              <a href="/dinh-vi">
                                <span>Định vị</span>
                              </a>
                            </li>
                            <li className="level2 ">
                              <a href="/smart-watch">
                                <span>Smart watch</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="level1 ">
                          <a href="/dong-ho-hang-hieu">
                            {' '}
                            <span>Đồng hồ hàng hiệu</span>{' '}
                          </a>
                          <i className="fa fa-plus" />
                          <ul className="level1" style={{ display: 'none' }}>
                            <li className="level2 ">
                              <a href="/dong-ho-nam">
                                <span>Đồng hồ nam</span>
                              </a>
                            </li>
                            <li className="level2 ">
                              <a href="/dong-ho-nu">
                                <span>Đồng hồ nữ</span>
                              </a>
                            </li>
                            <li className="level2 ">
                              <a href="/dong-ho-be-trai">
                                <span>Đồng hồ bé trai</span>
                              </a>
                            </li>
                            <li className="level2 ">
                              <a href="/dong-ho-be-gai">
                                <span>Đồng hồ bé gái</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="level1 ">
                          <a href="/thoi-trang-phu-kien">
                            {' '}
                            <span>Thời trang &amp; phụ kiện</span>{' '}
                          </a>
                          <i className="fa fa-plus" />
                          <ul className="level1" style={{ display: 'none' }}>
                            <li className="level2 ">
                              <a href="/trang-phuc-nu">
                                <span>Trang phục nữ</span>
                              </a>
                            </li>
                            <li className="level2 ">
                              <a href="/giay-dep-nu">
                                <span>Giày dép nữ</span>
                              </a>
                            </li>
                            <li className="level2 ">
                              <a href="/tui-vi-nu">
                                <span>Túi ví nữ</span>
                              </a>
                            </li>
                            <li className="level2 ">
                              <a href="/trang-suc-nu">
                                <span>Trang sức nữ</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="level1 ">
                          <a href="/me-be-do-choi">
                            {' '}
                            <span>Mẹ, bé &amp; đồ chơi</span>{' '}
                          </a>
                        </li>
                        <li className="level1 ">
                          <a href="/lam-dep">
                            {' '}
                            <span>Làm đẹp</span>{' '}
                          </a>
                          <i className="fa fa-plus" />
                          <ul className="level1" style={{ display: 'none' }}>
                            <li className="level2 ">
                              <a href="/cham-soc-toc">
                                <span>Chăm sóc tóc</span>
                              </a>
                            </li>
                            <li className="level2 ">
                              <a href="/cham-soc-da">
                                <span>Chăm sóc da</span>
                              </a>
                            </li>
                            <li className="level2 ">
                              <a href="/trang-diem">
                                <span>Trang điểm</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="level1 ">
                          <a href="/the-gioi-nuoc-hoa">
                            {' '}
                            <span>Thế giới nước hoa</span>{' '}
                          </a>
                        </li>
                        <li className="level1 ">
                          <a href="/do-choi-va-game">
                            {' '}
                            <span>Đồ chơi và game</span>{' '}
                          </a>
                        </li>
                        <li className="level1 ">
                          <a href="/the-thao-du-lich">
                            {' '}
                            <span>Thể thao, du lịch</span>{' '}
                          </a>
                        </li>
                        <li className="level1 ">
                          <a href="/noi-that-kien-truc">
                            {' '}
                            <span>Nội thất, kiến trúc</span>{' '}
                          </a>
                          <i className="fa fa-plus" />
                          <ul className="level1" style={{ display: 'none' }}>
                            <li className="level2 ">
                              <a href="/phong-khach">
                                <span>Phòng khách</span>
                              </a>
                            </li>
                            <li className="level2 ">
                              <a href="/phong-bep">
                                <span>Phòng bếp</span>
                              </a>
                            </li>
                            <li className="level2 ">
                              <a href="/phong-ngu">
                                <span>Phòng ngủ</span>
                              </a>
                            </li>
                            <li className="level2 ">
                              <a href="/phong-tam">
                                <span>Phòng tắm</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="level1 ">
                          <a href="/phu-tung-xe-hoi">
                            {' '}
                            <span>Phụ tùng xe hơi</span>{' '}
                          </a>
                        </li>
                        <li className="level1 ">
                          <a href="/do-gia-dung">
                            {' '}
                            <span>Đồ gia dụng</span>{' '}
                          </a>
                        </li>
                        <li className="level1 ">
                          <a href="/cho-thu-cung">
                            {' '}
                            <span>Cho thú cưng</span>{' '}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="level0 level-top parent">
                      <a href="/lien-he">Liên hệ</a>
                    </li>
                    <li className="level0 level-top parent">
                      <a href="/ve-chung-toi">Về chúng tôi</a>
                    </li>
                    <li className="level0 level-top parent">
                      <a href="/tin-tuc">Tin tức</a>
                      <i className="fa fa-plus" />
                      <ul className="level0" style={{ display: 'none' }}>
                        <li className="level1 ">
                          <a href="/tin-cong-nghe">
                            {' '}
                            <span>Tin công nghệ</span>{' '}
                          </a>
                        </li>
                        <li className="level1 ">
                          <a href="/tin-meo-vat">
                            {' '}
                            <span>Tin mẹo vặt</span>{' '}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="level0 level-top parent">
                      <a href="/khuyen-mai">Khuyến mại</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
