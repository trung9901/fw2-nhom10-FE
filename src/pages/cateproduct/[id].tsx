/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';
import Link from 'next/link';
import CateProducts from '../categories/CateProducts';
import useSWR from 'swr';
import { useRouter } from 'next/router';
type Props = {};

const CateByProductPage = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;

  const { data:cate ,error } = useSWR(`http://localhost:8000/api/cateproduct/${id}`);
  if (!cate) return <div className="">Loading</div>
  if (error) return <div className="">False</div>
  return (
    <div className="bodywrap">
      <div className="section wrap_background">
        <section className="bread-crumb">
          <span className="crumb-border" />
          <div className="container">
            <div className="rows">
              <div className="col-xs-12 a-left">
                <ul className="breadcrumb">
                  <li className="home">
                    <Link href="/">
                      <span>Trang chủ</span>
                    </Link>
                    <span className="mr_lr">
                      &nbsp;
                      <i className="fa fa-angle-right" />
                      &nbsp;
                    </span>
                  </li>
                  <li>
                    <strong>
                      <span>{cate.category.name}</span>
                    </strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div className="container ">
          <div className="bg_collection section">
            <div className="row">
              <aside className="dqdt-sidebar sidebar left-content col-lg-3 col-md-4 col-sm-4">
                <div className="wrap_background_aside asidecollection">
                  <aside className="aside-item sidebar-category collection-category">
                    <div className="aside-title">
                      <h2 className="title-head margin-top-0 cate">
                        <span>Danh mục sản phẩm</span>
                      </h2>
                    </div>
                    <div className="aside-content">
                      <nav className="nav-category navbar-toggleable-md">
                        <ul className="nav navbar-pills">
                          <li className="nav-item">
                            <Link className="nav-link" href="/">
                              Trang chủ
                            </Link>
                          </li>
                          <li className="nav-item">
                            <a href="/collections/all" className="nav-link">
                              Sản phẩm
                            </a>
                            <i className="fa fa-angle-right" />
                            <ul className="dropdown-menu">
                              <li className="dropdown-submenu nav-item">
                                <a
                                  className="nav-link"
                                  href="/dien-tu-va-cong-nghe"
                                >
                                  Điện tử và công nghệ
                                </a>
                                <i className="fa fa-angle-right" />
                                <ul className="dropdown-menu">
                                  <li className="nav-item lv3">
                                    <a className="nav-link" href="/may-tinh">
                                      Máy tính
                                    </a>
                                  </li>
                                  <li className="nav-item lv3">
                                    <a className="nav-link" href="/dien-thoai">
                                      Điện thoại
                                    </a>
                                  </li>
                                  <li className="nav-item lv3">
                                    <a className="nav-link" href="/tivi">
                                      Tivi
                                    </a>
                                  </li>
                                  <li className="nav-item lv3">
                                    <a className="nav-link" href="/dinh-vi">
                                      Định vị
                                    </a>
                                  </li>
                                  <li className="nav-item lv3">
                                    <a className="nav-link" href="/smart-watch">
                                      Smart watch
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="dropdown-submenu nav-item">
                                <a
                                  className="nav-link"
                                  href="/dong-ho-hang-hieu"
                                >
                                  Đồng hồ hàng hiệu
                                </a>
                                <i className="fa fa-angle-right" />
                                <ul className="dropdown-menu">
                                  <li className="nav-item lv3">
                                    <a className="nav-link" href="/dong-ho-nam">
                                      Đồng hồ nam
                                    </a>
                                  </li>
                                  <li className="nav-item lv3">
                                    <a className="nav-link" href="/dong-ho-nu">
                                      Đồng hồ nữ
                                    </a>
                                  </li>
                                  <li className="nav-item lv3">
                                    <a
                                      className="nav-link"
                                      href="/dong-ho-be-trai"
                                    >
                                      Đồng hồ bé trai
                                    </a>
                                  </li>
                                  <li className="nav-item lv3">
                                    <a
                                      className="nav-link"
                                      href="/dong-ho-be-gai"
                                    >
                                      Đồng hồ bé gái
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="dropdown-submenu nav-item">
                                <a
                                  className="nav-link"
                                  href="/thoi-trang-phu-kien"
                                >
                                  Thời trang &amp; phụ kiện
                                </a>
                                <i className="fa fa-angle-right" />
                                <ul className="dropdown-menu">
                                  <li className="nav-item lv3">
                                    <a
                                      className="nav-link"
                                      href="/trang-phuc-nu"
                                    >
                                      Trang phục nữ
                                    </a>
                                  </li>
                                  <li className="nav-item lv3">
                                    <a className="nav-link" href="/giay-dep-nu">
                                      Giày dép nữ
                                    </a>
                                  </li>
                                  <li className="nav-item lv3">
                                    <a className="nav-link" href="/tui-vi-nu">
                                      Túi ví nữ
                                    </a>
                                  </li>
                                  <li className="nav-item lv3">
                                    <a
                                      className="nav-link"
                                      href="/trang-suc-nu"
                                    >
                                      Trang sức nữ
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="/me-be-do-choi">
                                  Mẹ, bé &amp; đồ chơi
                                </a>
                              </li>
                              <li className="dropdown-submenu nav-item">
                                <a className="nav-link" href="/lam-dep">
                                  Làm đẹp
                                </a>
                                <i className="fa fa-angle-right" />
                                <ul className="dropdown-menu">
                                  <li className="nav-item lv3">
                                    <a
                                      className="nav-link"
                                      href="/cham-soc-toc"
                                    >
                                      Chăm sóc tóc
                                    </a>
                                  </li>
                                  <li className="nav-item lv3">
                                    <a className="nav-link" href="/cham-soc-da">
                                      Chăm sóc da
                                    </a>
                                  </li>
                                  <li className="nav-item lv3">
                                    <a className="nav-link" href="/trang-diem">
                                      Trang điểm
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  href="/the-gioi-nuoc-hoa"
                                >
                                  Thế giới nước hoa
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="/do-choi-va-game">
                                  Đồ chơi và game
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  href="/the-thao-du-lich"
                                >
                                  Thể thao, du lịch
                                </a>
                              </li>
                              <li className="dropdown-submenu nav-item">
                                <a
                                  className="nav-link"
                                  href="/noi-that-kien-truc"
                                >
                                  Nội thất, kiến trúc
                                </a>
                                <i className="fa fa-angle-right" />
                                <ul className="dropdown-menu">
                                  <li className="nav-item lv3">
                                    <a className="nav-link" href="/phong-khach">
                                      Phòng khách
                                    </a>
                                  </li>
                                  <li className="nav-item lv3">
                                    <a className="nav-link" href="/phong-bep">
                                      Phòng bếp
                                    </a>
                                  </li>
                                  <li className="nav-item lv3">
                                    <a className="nav-link" href="/phong-ngu">
                                      Phòng ngủ
                                    </a>
                                  </li>
                                  <li className="nav-item lv3">
                                    <a className="nav-link" href="/phong-tam">
                                      Phòng tắm
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="/phu-tung-xe-hoi">
                                  Phụ tùng xe hơi
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="/do-gia-dung">
                                  Đồ gia dụng
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="/cho-thu-cung">
                                  Cho thú cưng
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/lien-he">
                              Liên hệ
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/ve-chung-toi">
                              Về chúng tôi
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/tin-tuc" className="nav-link">
                              Tin tức
                            </a>
                            <i className="fa fa-angle-right" />
                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <a className="nav-link" href="/tin-cong-nghe">
                                  Tin công nghệ
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="/tin-meo-vat">
                                  Tin mẹo vặt
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/khuyen-mai">
                              Khuyến mại
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </aside>
                  <div className="filter-content aside-filter">
                    <div className="filter-container">
                      <div
                        className="filter-container__selected-filter"
                        style={{ display: 'none' }}
                      >
                        <div className="filter-container__selected-filter-header clearfix">
                          <span className="filter-container__selected-filter-header-title">
                            <i className="fa fa-arrow-left hidden-sm-up" /> Bạn
                            chọn
                          </span>
                          <a
                            href="javascript:void(0)"
                            className="filter-container__clear-all"
                          >
                            Bỏ hết <i className="fa fa-angle-right" />
                          </a>
                        </div>
                        <div className="filter-container__selected-filter-list">
                          <ul />
                        </div>
                      </div>
                      {/* Lọc Thuong hieu */}
                      <aside className="aside-item aside-itemxx filter-type">
                        <div className="aside-title">
                          <h2 className="title-head margin-top-0">
                            <span>Thương hiệu</span>
                          </h2>
                        </div>
                        <div className="aside-content filter-group padding-10">
                          <ul>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-adidas">
                                  <input
                                    type="checkbox"
                                    id="filter-adidas"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Adidas"
                                    defaultValue='("Adidas")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Adidas
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-anmum">
                                  <input
                                    type="checkbox"
                                    id="filter-anmum"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Anmum"
                                    defaultValue='("Anmum")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Anmum
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-apple">
                                  <input
                                    type="checkbox"
                                    id="filter-apple"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Apple"
                                    defaultValue='("Apple")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Apple
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-aqua">
                                  <input
                                    type="checkbox"
                                    id="filter-aqua"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Aqua"
                                    defaultValue='("Aqua")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Aqua
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-argo">
                                  <input
                                    type="checkbox"
                                    id="filter-argo"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Argo"
                                    defaultValue='("Argo")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Argo
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-asanzo">
                                  <input
                                    type="checkbox"
                                    id="filter-asanzo"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Asanzo"
                                    defaultValue='("Asanzo")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Asanzo
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-benq">
                                  <input
                                    type="checkbox"
                                    id="filter-benq"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Benq"
                                    defaultValue='("Benq")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Benq
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-blackberry">
                                  <input
                                    type="checkbox"
                                    id="filter-blackberry"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="BlackBerry"
                                    defaultValue='("BlackBerry")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  BlackBerry
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-bouncie">
                                  <input
                                    type="checkbox"
                                    id="filter-bouncie"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Bouncie"
                                    defaultValue='("Bouncie")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Bouncie
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-craftoy">
                                  <input
                                    type="checkbox"
                                    id="filter-craftoy"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Craftoy"
                                    defaultValue='("Craftoy")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Craftoy
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-dell">
                                  <input
                                    type="checkbox"
                                    id="filter-dell"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Dell"
                                    defaultValue='("Dell")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Dell
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-diamond">
                                  <input
                                    type="checkbox"
                                    id="filter-diamond"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Diamond"
                                    defaultValue='("Diamond")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Diamond
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-electrolux">
                                  <input
                                    type="checkbox"
                                    id="filter-electrolux"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Electrolux"
                                    defaultValue='("Electrolux")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Electrolux
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-footprints">
                                  <input
                                    type="checkbox"
                                    id="filter-footprints"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Footprints"
                                    defaultValue='("Footprints")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Footprints
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-fujicook">
                                  <input
                                    type="checkbox"
                                    id="filter-fujicook"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Fujicook"
                                    defaultValue='("Fujicook")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Fujicook
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-goldsun">
                                  <input
                                    type="checkbox"
                                    id="filter-goldsun"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Goldsun"
                                    defaultValue='("Goldsun")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Goldsun
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-happycook">
                                  <input
                                    type="checkbox"
                                    id="filter-happycook"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="HappyCook"
                                    defaultValue='("HappyCook")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  HappyCook
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-hapu">
                                  <input
                                    type="checkbox"
                                    id="filter-hapu"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Hapu"
                                    defaultValue='("Hapu")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Hapu
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-headguard">
                                  <input
                                    type="checkbox"
                                    id="filter-headguard"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="HeadGuard"
                                    defaultValue='("HeadGuard")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  HeadGuard
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-hitachi">
                                  <input
                                    type="checkbox"
                                    id="filter-hitachi"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Hitachi"
                                    defaultValue='("Hitachi")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Hitachi
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-honor">
                                  <input
                                    type="checkbox"
                                    id="filter-honor"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Honor"
                                    defaultValue='("Honor")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Honor
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-hp">
                                  <input
                                    type="checkbox"
                                    id="filter-hp"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="HP"
                                    defaultValue='("HP")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  HP
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-hura">
                                  <input
                                    type="checkbox"
                                    id="filter-hura"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Hura"
                                    defaultValue='("Hura")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Hura
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-korean">
                                  <input
                                    type="checkbox"
                                    id="filter-korean"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Korean"
                                    defaultValue='("Korean")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Korean
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-lenovo">
                                  <input
                                    type="checkbox"
                                    id="filter-lenovo"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Lenovo"
                                    defaultValue='("Lenovo")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Lenovo
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-lg">
                                  <input
                                    type="checkbox"
                                    id="filter-lg"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="LG"
                                    defaultValue='("LG")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  LG
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-midea">
                                  <input
                                    type="checkbox"
                                    id="filter-midea"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Midea"
                                    defaultValue='("Midea")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Midea
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-mira">
                                  <input
                                    type="checkbox"
                                    id="filter-mira"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Mira"
                                    defaultValue='("Mira")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Mira
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-newis">
                                  <input
                                    type="checkbox"
                                    id="filter-newis"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Newis"
                                    defaultValue='("Newis")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Newis
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-nike">
                                  <input
                                    type="checkbox"
                                    id="filter-nike"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Nike"
                                    defaultValue='("Nike")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Nike
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-norwich">
                                  <input
                                    type="checkbox"
                                    id="filter-norwich"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Norwich"
                                    defaultValue='("Norwich")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Norwich
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-oppo">
                                  <input
                                    type="checkbox"
                                    id="filter-oppo"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="OPPO"
                                    defaultValue='("OPPO")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  OPPO
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-panasonic">
                                  <input
                                    type="checkbox"
                                    id="filter-panasonic"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Panasonic"
                                    defaultValue='("Panasonic")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Panasonic
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-pensonic">
                                  <input
                                    type="checkbox"
                                    id="filter-pensonic"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Pensonic"
                                    defaultValue='("Pensonic")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Pensonic
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-philips">
                                  <input
                                    type="checkbox"
                                    id="filter-philips"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Philips"
                                    defaultValue='("Philips")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Philips
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-rec-f">
                                  <input
                                    type="checkbox"
                                    id="filter-rec-f"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Rec-F"
                                    defaultValue='("Rec-F")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Rec-F
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-samsung">
                                  <input
                                    type="checkbox"
                                    id="filter-samsung"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Samsung"
                                    defaultValue='("Samsung")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Samsung
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-sanyo">
                                  <input
                                    type="checkbox"
                                    id="filter-sanyo"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Sanyo"
                                    defaultValue='("Sanyo")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Sanyo
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-sharp">
                                  <input
                                    type="checkbox"
                                    id="filter-sharp"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Sharp"
                                    defaultValue='("Sharp")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Sharp
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-sony">
                                  <input
                                    type="checkbox"
                                    id="filter-sony"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Sony"
                                    defaultValue='("Sony")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Sony
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-tcl">
                                  <input
                                    type="checkbox"
                                    id="filter-tcl"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="TCL"
                                    defaultValue='("TCL")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  TCL
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-thai-lan">
                                  <input
                                    type="checkbox"
                                    id="filter-thai-lan"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Thái Lan"
                                    defaultValue='("Thái Lan")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Thái Lan
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-toshiba">
                                  <input
                                    type="checkbox"
                                    id="filter-toshiba"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Toshiba"
                                    defaultValue='("Toshiba")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Toshiba
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-veilisr">
                                  <input
                                    type="checkbox"
                                    id="filter-veilisr"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="VEILISR"
                                    defaultValue='("VEILISR")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  VEILISR
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-viet-nam">
                                  <input
                                    type="checkbox"
                                    id="filter-viet-nam"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Việt Nam"
                                    defaultValue='("Việt Nam")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Việt Nam
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-xiaomi">
                                  <input
                                    type="checkbox"
                                    id="filter-xiaomi"
                                    data-group="PRODUCT_VENDOR"
                                    data-field="vendor.filter_key"
                                    data-text="Xiaomi"
                                    defaultValue='("Xiaomi")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Xiaomi
                                </label>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </aside>
                      {/* End Lọc Thuong hieu */}
                      {/* Lọc Loại */}
                      <aside className="aside-item aside-itemxx filter-type">
                        <div className="aside-title">
                          <h2 className="title-head margin-top-0">
                            <span>Kiểu dáng</span>
                          </h2>
                        </div>
                        <div className="aside-content filter-group padding-10">
                          <ul>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-cho-me-cho-be">
                                  <input
                                    type="checkbox"
                                    id="filter-cho-me-cho-be"
                                    data-group="PRODUCT_TYPE"
                                    data-field="product_type.filter_key"
                                    data-text=""
                                    defaultValue='("Cho mẹ, cho bé")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Cho mẹ, cho bé
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-dien-thoai">
                                  <input
                                    type="checkbox"
                                    id="filter-dien-thoai"
                                    data-group="PRODUCT_TYPE"
                                    data-field="product_type.filter_key"
                                    data-text=""
                                    defaultValue='("Điện thoại")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Điện thoại
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-do-nha-bep">
                                  <input
                                    type="checkbox"
                                    id="filter-do-nha-bep"
                                    data-group="PRODUCT_TYPE"
                                    data-field="product_type.filter_key"
                                    data-text=""
                                    defaultValue='("Đồ nhà bếp")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Đồ nhà bếp
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-giay-co-cao">
                                  <input
                                    type="checkbox"
                                    id="filter-giay-co-cao"
                                    data-group="PRODUCT_TYPE"
                                    data-field="product_type.filter_key"
                                    data-text=""
                                    defaultValue='("Giày cổ cao")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Giày cổ cao
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-giay-co-thap">
                                  <input
                                    type="checkbox"
                                    id="filter-giay-co-thap"
                                    data-group="PRODUCT_TYPE"
                                    data-field="product_type.filter_key"
                                    data-text=""
                                    defaultValue='("Giày cổ thấp")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Giày cổ thấp
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-giay-da-bong">
                                  <input
                                    type="checkbox"
                                    id="filter-giay-da-bong"
                                    data-group="PRODUCT_TYPE"
                                    data-field="product_type.filter_key"
                                    data-text=""
                                    defaultValue='("Giày đá bóng")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Giày đá bóng
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-giay-tang-chieu-cao">
                                  <input
                                    type="checkbox"
                                    id="filter-giay-tang-chieu-cao"
                                    data-group="PRODUCT_TYPE"
                                    data-field="product_type.filter_key"
                                    data-text=""
                                    defaultValue='("Giày tăng chiều cao")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Giày tăng chiều cao
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-giay-vai">
                                  <input
                                    type="checkbox"
                                    id="filter-giay-vai"
                                    data-group="PRODUCT_TYPE"
                                    data-field="product_type.filter_key"
                                    data-text=""
                                    defaultValue='("Giày vải")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Giày vải
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-laptop">
                                  <input
                                    type="checkbox"
                                    id="filter-laptop"
                                    data-group="PRODUCT_TYPE"
                                    data-field="product_type.filter_key"
                                    data-text=""
                                    defaultValue='("Laptop")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Laptop
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-lo-vi-song">
                                  <input
                                    type="checkbox"
                                    id="filter-lo-vi-song"
                                    data-group="PRODUCT_TYPE"
                                    data-field="product_type.filter_key"
                                    data-text=""
                                    defaultValue='("Lò vi sóng")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Lò vi sóng
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-man-hinh">
                                  <input
                                    type="checkbox"
                                    id="filter-man-hinh"
                                    data-group="PRODUCT_TYPE"
                                    data-field="product_type.filter_key"
                                    data-text=""
                                    defaultValue='("Màn hình")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Màn hình
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-may-giat">
                                  <input
                                    type="checkbox"
                                    id="filter-may-giat"
                                    data-group="PRODUCT_TYPE"
                                    data-field="product_type.filter_key"
                                    data-text=""
                                    defaultValue='("Máy giặt")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Máy giặt
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-noi-com-dien">
                                  <input
                                    type="checkbox"
                                    id="filter-noi-com-dien"
                                    data-group="PRODUCT_TYPE"
                                    data-field="product_type.filter_key"
                                    data-text=""
                                    defaultValue='("Nồi cơm điện")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Nồi cơm điện
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-noi-that">
                                  <input
                                    type="checkbox"
                                    id="filter-noi-that"
                                    data-group="PRODUCT_TYPE"
                                    data-field="product_type.filter_key"
                                    data-text=""
                                    defaultValue='("Nội thất")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Nội thất
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-slip-on">
                                  <input
                                    type="checkbox"
                                    id="filter-slip-on"
                                    data-group="PRODUCT_TYPE"
                                    data-field="product_type.filter_key"
                                    data-text=""
                                    defaultValue='("Slip-on")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Slip-on
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-sneaker">
                                  <input
                                    type="checkbox"
                                    id="filter-sneaker"
                                    data-group="PRODUCT_TYPE"
                                    data-field="product_type.filter_key"
                                    data-text=""
                                    defaultValue='("Sneaker")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Sneaker
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-tablet">
                                  <input
                                    type="checkbox"
                                    id="filter-tablet"
                                    data-group="PRODUCT_TYPE"
                                    data-field="product_type.filter_key"
                                    data-text=""
                                    defaultValue='("Tablet")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Tablet
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-tivi">
                                  <input
                                    type="checkbox"
                                    id="filter-tivi"
                                    data-group="PRODUCT_TYPE"
                                    data-field="product_type.filter_key"
                                    data-text=""
                                    defaultValue='("Tivi")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Tivi
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-tu-lanh">
                                  <input
                                    type="checkbox"
                                    id="filter-tu-lanh"
                                    data-group="PRODUCT_TYPE"
                                    data-field="product_type.filter_key"
                                    data-text=""
                                    defaultValue='("Tủ lạnh")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Tủ lạnh
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-ultra-boots">
                                  <input
                                    type="checkbox"
                                    id="filter-ultra-boots"
                                    data-group="PRODUCT_TYPE"
                                    data-field="product_type.filter_key"
                                    data-text=""
                                    defaultValue='("Ultra boots")'
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Ultra boots
                                </label>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </aside>
                      {/* End Lọc Loại */}
                      {/* Lọc theo Tag (Màu sắc)*/}
                      <aside className="aside-item filter-tag-style-1">
                        <div className="aside-title">
                          <h2 className="title-head margin-top-0">
                            <span>Màu phổ biến</span>
                          </h2>
                        </div>
                        <div className="aside-content filter-group clearfix padding-10">
                          <ul style={{ overflow: 'visible' }}>
                            <li className="filter-item color filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-vang">
                                  <input
                                    type="checkbox"
                                    id="filter-vang"
                                    data-group="tag1"
                                    data-field="tags"
                                    data-text="Vàng"
                                    defaultValue="(Vàng)"
                                    data-operator="OR"
                                  />
                                  <i
                                    className="fa vang"
                                    style={{ backgroundColor: '#F1C40F' }}
                                  />
                                  Vàng
                                </label>
                              </span>
                            </li>
                            <li className="filter-item color filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-tim">
                                  <input
                                    type="checkbox"
                                    id="filter-tim"
                                    data-group="tag1"
                                    data-field="tags"
                                    data-text="Tím"
                                    defaultValue="(Tím)"
                                    data-operator="OR"
                                  />
                                  <i
                                    className="fa tim"
                                    style={{ backgroundColor: '#9B59B6' }}
                                  />
                                  Tím
                                </label>
                              </span>
                            </li>
                            <li className="filter-item color filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-do">
                                  <input
                                    type="checkbox"
                                    id="filter-do"
                                    data-group="tag1"
                                    data-field="tags"
                                    data-text="Đỏ"
                                    defaultValue="(Đỏ)"
                                    data-operator="OR"
                                  />
                                  <i
                                    className="fa do"
                                    style={{ backgroundColor: '#E74C3C' }}
                                  />
                                  Đỏ
                                </label>
                              </span>
                            </li>
                            <li className="filter-item color filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-xanh">
                                  <input
                                    type="checkbox"
                                    id="filter-xanh"
                                    data-group="tag1"
                                    data-field="tags"
                                    data-text="Xanh"
                                    defaultValue="(Xanh)"
                                    data-operator="OR"
                                  />
                                  <i
                                    className="fa xanh"
                                    style={{ backgroundColor: '#2ECC71' }}
                                  />
                                  Xanh
                                </label>
                              </span>
                            </li>
                            <li className="filter-item color filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-hong">
                                  <input
                                    type="checkbox"
                                    id="filter-hong"
                                    data-group="tag1"
                                    data-field="tags"
                                    data-text="Hồng"
                                    defaultValue="(Hồng)"
                                    data-operator="OR"
                                  />
                                  <i
                                    className="fa hong"
                                    style={{ backgroundColor: '#FF00CC' }}
                                  />
                                  Hồng
                                </label>
                              </span>
                            </li>
                            <li className="filter-item color filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-cam">
                                  <input
                                    type="checkbox"
                                    id="filter-cam"
                                    data-group="tag1"
                                    data-field="tags"
                                    data-text="Cam"
                                    defaultValue="(Cam)"
                                    data-operator="OR"
                                  />
                                  <i
                                    className="fa cam"
                                    style={{ backgroundColor: '#E67E22' }}
                                  />
                                  Cam
                                </label>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </aside>
                      {/* End Lọc theo Tag (Màu sắc)*/}
                      <aside className="aside-item sidebar-item filter-tag-style-1">
                        <div className="aside-title">
                          <h2 className="title-head margin-top-0">
                            <span>Kích cỡ</span>
                          </h2>
                        </div>
                        <div className="module-content aside-content filter-group padding-10">
                          <ul>
                            <li className="filter-item filter_size filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-nho">
                                  <input
                                    type="checkbox"
                                    id="filter-nho"
                                    data-group="tag2"
                                    data-field="tags"
                                    data-text="Nhỏ"
                                    defaultValue="('Nhỏ')"
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Nhỏ
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter_size filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-trung-binh">
                                  <input
                                    type="checkbox"
                                    id="filter-trung-binh"
                                    data-group="tag2"
                                    data-field="tags"
                                    data-text="Trung bình"
                                    defaultValue="('Trung bình')"
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Trung bình
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter_size filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-lon">
                                  <input
                                    type="checkbox"
                                    id="filter-lon"
                                    data-group="tag2"
                                    data-field="tags"
                                    data-text="Lớn"
                                    defaultValue="('Lớn')"
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Lớn
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter_size filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-32inch">
                                  <input
                                    type="checkbox"
                                    id="filter-32inch"
                                    data-group="tag2"
                                    data-field="tags"
                                    data-text="32inch"
                                    defaultValue="('32inch')"
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  32inch
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter_size filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-49inch">
                                  <input
                                    type="checkbox"
                                    id="filter-49inch"
                                    data-group="tag2"
                                    data-field="tags"
                                    data-text="49inch"
                                    defaultValue="('49inch')"
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  49inch
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter_size filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-55inch">
                                  <input
                                    type="checkbox"
                                    id="filter-55inch"
                                    data-group="tag2"
                                    data-field="tags"
                                    data-text="55inch"
                                    defaultValue="('55inch')"
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  55inch
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter_size filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-65inch">
                                  <input
                                    type="checkbox"
                                    id="filter-65inch"
                                    data-group="tag2"
                                    data-field="tags"
                                    data-text="65inch"
                                    defaultValue="('65inch')"
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  65inch
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter_size filter-item--check-box filter-item--green">
                              <span>
                                <label htmlFor="filter-75inch">
                                  <input
                                    type="checkbox"
                                    id="filter-75inch"
                                    data-group="tag2"
                                    data-field="tags"
                                    data-text="75inch"
                                    defaultValue="('75inch')"
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  75inch
                                </label>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </aside>
                      {/* Lọc giá */}
                      <aside className="aside-item filter-price">
                        <div className="aside-title">
                          <h2 className="title-head margin-top-0">
                            <span>Theo giá</span>
                          </h2>
                        </div>
                        <div className="aside-content filter-group padding-10">
                          <ul>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label
                                  data-filter="1-000-000d"
                                  htmlFor="filter-duoi-1-000-000d"
                                >
                                  <input
                                    type="checkbox"
                                    id="filter-duoi-1-000-000d"
                                    data-group="Khoảng giá"
                                    data-field="variants.price"
                                    data-text="Dưới 1.000.000đ"
                                    defaultValue="(<1000000)"
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Giá dưới 1.000.000đ
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label
                                  data-filter="2-000-000d"
                                  htmlFor="filter-1-000-000d-2-000-000d"
                                >
                                  <input
                                    type="checkbox"
                                    id="filter-1-000-000d-2-000-000d"
                                    data-group="Khoảng giá"
                                    data-field="variants.price"
                                    data-text="1.000.000đ - 2.000.000đ"
                                    defaultValue="(>1000000 AND <2000000)"
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  1.000.000đ - 2.000.000đ
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label
                                  data-filter="3-000-000d"
                                  htmlFor="filter-2-000-000d-3-000-000d"
                                >
                                  <input
                                    type="checkbox"
                                    id="filter-2-000-000d-3-000-000d"
                                    data-group="Khoảng giá"
                                    data-field="variants.price"
                                    data-text="2.000.000đ - 3.000.000đ"
                                    defaultValue="(>2000000 AND <3000000)"
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  2.000.000đ - 3.000.000đ
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label
                                  data-filter="5-000-000d"
                                  htmlFor="filter-3-000-000d-5-000-000d"
                                >
                                  <input
                                    type="checkbox"
                                    id="filter-3-000-000d-5-000-000d"
                                    data-group="Khoảng giá"
                                    data-field="variants.price"
                                    data-text="3.000.000đ - 5.000.000đ"
                                    defaultValue="(>3000000 AND <5000000)"
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  3.000.000đ - 5.000.000đ
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label
                                  data-filter="10-000-000d"
                                  htmlFor="filter-5-000-000d-10-000-000d"
                                >
                                  <input
                                    type="checkbox"
                                    id="filter-5-000-000d-10-000-000d"
                                    data-group="Khoảng giá"
                                    data-field="variants.price"
                                    data-text="5.000.000đ - 10.000.000đ"
                                    defaultValue="(>5000000 AND <10000000)"
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  5.000.000đ - 10.000.000đ
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label
                                  data-filter="20-000-000d"
                                  htmlFor="filter-10-000-000d-20-000-000d"
                                >
                                  <input
                                    type="checkbox"
                                    id="filter-10-000-000d-20-000-000d"
                                    data-group="Khoảng giá"
                                    data-field="variants.price"
                                    data-text="10.000.000đ - 20.000.000đ"
                                    defaultValue="(>10000000 AND <20000000)"
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  10.000.000đ - 20.000.000đ
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label
                                  data-filter="50-000-000d"
                                  htmlFor="filter-20-000-000d-50-000-000d"
                                >
                                  <input
                                    type="checkbox"
                                    id="filter-20-000-000d-50-000-000d"
                                    data-group="Khoảng giá"
                                    data-field="variants.price"
                                    data-text="20.000.000đ - 50.000.000đ"
                                    defaultValue="(>20000000 AND <50000000)"
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  20.000.000đ - 50.000.000đ
                                </label>
                              </span>
                            </li>
                            <li className="filter-item filter-item--check-box filter-item--green">
                              <span>
                                <label
                                  data-filter="50-000-000d"
                                  htmlFor="filter-tren50-000-000d"
                                >
                                  <input
                                    type="checkbox"
                                    id="filter-tren50-000-000d"
                                    data-group="Khoảng giá"
                                    data-field="variants.price"
                                    data-text="Trên 50.000.000đ"
                                    defaultValue="(>50000000)"
                                    data-operator="OR"
                                  />
                                  <i className="fa" />
                                  Giá trên 50.000.000đ
                                </label>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </aside>
                    </div>
                  </div>
                </div>
              </aside>
              <div className="main_container collection  col-lg-9 col-md-12 col-sm-12">
                <div className="mcollection">
                  <div className="last clearfix">
                    <div className="owlnav_cate clearfix">
                      <div className="owl_col_section owl_category slickcategory slick_margin slick-initialized slick-slider">
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
                        <CateProducts />
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
                  <div className="first clearfix">
                    <h1 className="h1_title">Các sản phẩm thuộc : {cate.category.name}</h1>
                    <div className="category-products products">
                      <div className="section border-bottom">
                        <div className="sortPagiBar margin-bottom-15">
                          <div className="bg-white sort-cate clearfix f-left">
                            <div id="sort-by">
                              <label className="left">Sắp xếp: </label>
                              <ul className="ul_col">
                                <li>
                                  <span>Thứ tự</span>
                                  <ul className="content_ul">
                                    <li>
                                      <a href="javascript:;">Theo ngày đăng</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">A → Z</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">Z → A</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">Giá tăng dần</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">Giá giảm dần</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">Hàng mới nhất</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">Hàng cũ nhất</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">
                                        Theo tồn kho giảm dần
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <section className="products-view products-view-grid collection_reponsive list_hover_pro">
                        <div className="row">
                          {cate.products?.map((product: any) => (
                            <div
                              className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 product-col"
                              key={product._id}
                            >
                              <div className="item_product_main margin-bottom-15">
                                <form
                                  action="/cart/add"
                                  method="post"
                                  className="variants product-action"
                                  data-id="product-actions-16610444"
                                  encType="multipart/form-data"
                                >
                                  <div className="product-thumbnail">
                                    <Link href={`/products/${product._id}`}>
                                      <a
                                        className="image_thumb scale_hover"
                                        title="Bàn IBIE Rec-F chân đen màu kem"
                                      >
                                        <img
                                          className="lazyload loaded"
                                          src={product?.image}
                                          data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/a6262f97a6f41dded346b37a0aaece-c1369390-32b5-4f97-a259-46ca3535447c.jpg?v=1577497546640"
                                          alt="Bàn IBIE Rec-F chân đen màu kem"
                                          data-was-processed="true"
                                        />
                                      </a>
                                    </Link>

                                    <div className="action">
                                      <a
                                        title="Xem nhanh"
                                        href="/ban-ibie-rec-f-chan-den-mau-kem"
                                        data-handle="ban-ibie-rec-f-chan-den-mau-kem"
                                        className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                      >
                                        <i className="fas fa-search-plus" />
                                      </a>
                                      <input
                                        type="hidden"
                                        name="variantId"
                                        defaultValue={29845331}
                                      />
                                      <button
                                        className="hidden-xs btn-buy btn-cart btn btn-views left-to add_to_cart active "
                                        title="Thêm vào giỏ hàng"
                                      >
                                        <i className="fas fa-shopping-basket iconcart" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="product-info">
                                    <h3 className="product-name">
                                      <Link href={`/products/${product._id}`}>
                                        <a>
                                          <div className="fw-bold text-uppercase">
                                            {product.name}
                                          </div>
                                        </a>
                                      </Link>
                                    </h3>
                                    <div className="price-box">
                                      {product.price} ₫
                                    </div>
                                    <div className="mt-1">
                                      {product.status == 1 ? (
                                        <span className="border border-white rounded bg-success text-white p-1">
                                          Còn Hàng
                                        </span>
                                      ) : (
                                        <span className="border border-white rounded bg-danger text-white p-1">
                                          Hết Hàng
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="section pagenav clearfix">
                          <nav className="clearfix relative nav_pagi w_100">
                            <ul className="pagination clearfix">
                              <li className="page-item disabled">
                                <a className="page-link" href="#">
                                  <i className="fa fa-angle-left" />
                                </a>
                              </li>
                              <li className="active page-item disabled">
                                <a className="page-link" href="javascript:;">
                                  1
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="javascript:;">
                                  2
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="javascript:;">
                                  3
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="javascript:;">
                                  4
                                </a>
                              </li>
                              <li className="page-item hidden-xs">
                                <a className="page-link" href="javascript:;">
                                  <i
                                    className="fa fa-angle-right"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
                <div
                  id="open-filters"
                  className="open-filters d-lg-none d-xl-none"
                >
                  <i className="fa fa-filter" />
                  <span>Lọc</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CateByProductPage;
