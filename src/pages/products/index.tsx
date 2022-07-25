import React from 'react'

type Props = {}

const ProductPage = (props: Props) => {
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
                                        <a href="/">
                                            <span>Trang chủ</span>
                                        </a>
                                        <span className="mr_lr">
                                            &nbsp;
                                            <i className="fa fa-angle-right" />
                                            &nbsp;
                                        </span>
                                    </li>
                                    <li>
                                        <strong>
                                            <span> Tất cả sản phẩm</span>
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
                                                        <a className="nav-link" href="/">
                                                            Trang chủ
                                                        </a>
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
                                                                <a className="nav-link" href="/dong-ho-hang-hieu">
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
                                                                        <a className="nav-link" href="/dong-ho-be-trai">
                                                                            Đồng hồ bé trai
                                                                        </a>
                                                                    </li>
                                                                    <li className="nav-item lv3">
                                                                        <a className="nav-link" href="/dong-ho-be-gai">
                                                                            Đồng hồ bé gái
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu nav-item">
                                                                <a className="nav-link" href="/thoi-trang-phu-kien">
                                                                    Thời trang &amp; phụ kiện
                                                                </a>
                                                                <i className="fa fa-angle-right" />
                                                                <ul className="dropdown-menu">
                                                                    <li className="nav-item lv3">
                                                                        <a className="nav-link" href="/trang-phuc-nu">
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
                                                                        <a className="nav-link" href="/trang-suc-nu">
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
                                                                        <a className="nav-link" href="/cham-soc-toc">
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
                                                                <a className="nav-link" href="/the-gioi-nuoc-hoa">
                                                                    Thế giới nước hoa
                                                                </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" href="/do-choi-va-game">
                                                                    Đồ chơi và game
                                                                </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" href="/the-thao-du-lich">
                                                                    Thể thao, du lịch
                                                                </a>
                                                            </li>
                                                            <li className="dropdown-submenu nav-item">
                                                                <a className="nav-link" href="/noi-that-kien-truc">
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
                                                style={{ display: "none" }}
                                            >
                                                <div className="filter-container__selected-filter-header clearfix">
                                                    <span className="filter-container__selected-filter-header-title">
                                                        <i className="fa fa-arrow-left hidden-sm-up" /> Bạn chọn
                                                    </span>
                                                    <a
                                                        href="javascript:void(0)"
                                                        onClick="clearAllFiltered()"
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
                                                    <ul style={{ overflow: "visible" }}>
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
                                                                        style={{ backgroundColor: "#F1C40F" }}
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
                                                                        style={{ backgroundColor: "#9B59B6" }}
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
                                                                        style={{ backgroundColor: "#E74C3C" }}
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
                                                                        style={{ backgroundColor: "#2ECC71" }}
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
                                                                        style={{ backgroundColor: "#FF00CC" }}
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
                                                                        style={{ backgroundColor: "#E67E22" }}
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
                                                    style={{ display: "block" }}
                                                >
                                                    Previous
                                                </button>
                                                <div aria-live="polite" className="slick-list draggable">
                                                    <div
                                                        className="slick-track"
                                                        role="listbox"
                                                        style={{
                                                            opacity: 1,
                                                            width: 2076,
                                                            transform: "translate3d(0px, 0px, 0px)"
                                                        }}
                                                    >
                                                        <div
                                                            className="item_category slick-slide slick-current slick-active"
                                                            data-slick-index={0}
                                                            aria-hidden="false"
                                                            tabIndex={-1}
                                                            role="option"
                                                            aria-describedby="slick-slide00"
                                                            style={{ width: 143 }}
                                                        >
                                                            <div
                                                                className="item"
                                                                onClick="location.href='/dien-tu-va-cong-nghe';"
                                                            >
                                                                <div className="thumb_s">
                                                                    <a
                                                                        className="image"
                                                                        href="/dien-tu-va-cong-nghe"
                                                                        title="Điện tử và công nghệ"
                                                                        tabIndex={0}
                                                                    >
                                                                        <img
                                                                            className="lazyload loaded"
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
                                                        <div
                                                            className="item_category slick-slide slick-active"
                                                            data-slick-index={1}
                                                            aria-hidden="false"
                                                            tabIndex={-1}
                                                            role="option"
                                                            aria-describedby="slick-slide01"
                                                            style={{ width: 143 }}
                                                        >
                                                            <div
                                                                className="item"
                                                                onClick="location.href='/dong-ho-hang-hieu';"
                                                            >
                                                                <div className="thumb_s">
                                                                    <a
                                                                        className="image"
                                                                        href="/dong-ho-hang-hieu"
                                                                        title="Đồng hồ hàng hiệu"
                                                                        tabIndex={0}
                                                                    >
                                                                        <img
                                                                            className="lazyload loaded"
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
                                                        <div
                                                            className="item_category slick-slide slick-active"
                                                            data-slick-index={2}
                                                            aria-hidden="false"
                                                            tabIndex={-1}
                                                            role="option"
                                                            aria-describedby="slick-slide02"
                                                            style={{ width: 143 }}
                                                        >
                                                            <div
                                                                className="item"
                                                                onClick="location.href='/thoi-trang-phu-kien';"
                                                            >
                                                                <div className="thumb_s">
                                                                    <a
                                                                        className="image"
                                                                        href="/thoi-trang-phu-kien"
                                                                        title="Thời trang & phụ kiện"
                                                                        tabIndex={0}
                                                                    >
                                                                        <img
                                                                            className="lazyload loaded"
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
                                                        <div
                                                            className="item_category slick-slide slick-active"
                                                            data-slick-index={3}
                                                            aria-hidden="false"
                                                            tabIndex={-1}
                                                            role="option"
                                                            aria-describedby="slick-slide03"
                                                            style={{ width: 143 }}
                                                        >
                                                            <div
                                                                className="item"
                                                                onClick="location.href='/me-be-do-choi';"
                                                            >
                                                                <div className="thumb_s">
                                                                    <a
                                                                        className="image"
                                                                        href="/me-be-do-choi"
                                                                        title="Mẹ, bé & đồ chơi"
                                                                        tabIndex={0}
                                                                    >
                                                                        <img
                                                                            className="lazyload loaded"
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
                                                        <div
                                                            className="item_category slick-slide slick-active"
                                                            data-slick-index={4}
                                                            aria-hidden="false"
                                                            tabIndex={-1}
                                                            role="option"
                                                            aria-describedby="slick-slide04"
                                                            style={{ width: 143 }}
                                                        >
                                                            <div
                                                                className="item"
                                                                onClick="location.href='/lam-dep';"
                                                            >
                                                                <div className="thumb_s">
                                                                    <a
                                                                        className="image"
                                                                        href="/lam-dep"
                                                                        title="Làm đẹp"
                                                                        tabIndex={0}
                                                                    >
                                                                        <img
                                                                            className="lazyload loaded"
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
                                                        <div
                                                            className="item_category slick-slide"
                                                            data-slick-index={5}
                                                            aria-hidden="true"
                                                            tabIndex={-1}
                                                            role="option"
                                                            aria-describedby="slick-slide05"
                                                            style={{ width: 143 }}
                                                        >
                                                            <div
                                                                className="item"
                                                                onClick="location.href='/the-gioi-nuoc-hoa';"
                                                            >
                                                                <div className="thumb_s">
                                                                    <a
                                                                        className="image"
                                                                        href="/the-gioi-nuoc-hoa"
                                                                        title="Thế giới nước hoa"
                                                                        tabIndex={-1}
                                                                    >
                                                                        <img
                                                                            className="lazyload"
                                                                            src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="
                                                                            data-src="//bizweb.dktcdn.net/thumb/compact/100/374/880/collections/ct5.png?v=1577470543683"
                                                                            alt="Thế giới nước hoa"
                                                                        />
                                                                    </a>
                                                                    <div className="info">
                                                                        <h4 className="title_cate_">
                                                                            <a
                                                                                href="/the-gioi-nuoc-hoa"
                                                                                title="Thế giới nước hoa"
                                                                                tabIndex={-1}
                                                                            >
                                                                                Thế giới nước hoa
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="item_category slick-slide"
                                                            data-slick-index={6}
                                                            aria-hidden="true"
                                                            tabIndex={-1}
                                                            role="option"
                                                            aria-describedby="slick-slide06"
                                                            style={{ width: 143 }}
                                                        >
                                                            <div
                                                                className="item"
                                                                onClick="location.href='/do-choi-va-game';"
                                                            >
                                                                <div className="thumb_s">
                                                                    <a
                                                                        className="image"
                                                                        href="/do-choi-va-game"
                                                                        title="Đồ chơi và game"
                                                                        tabIndex={-1}
                                                                    >
                                                                        <img
                                                                            className="lazyload"
                                                                            src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="
                                                                            data-src="//bizweb.dktcdn.net/thumb/compact/100/374/880/collections/ct12.png?v=1577470573337"
                                                                            alt="Đồ chơi và game"
                                                                        />
                                                                    </a>
                                                                    <div className="info">
                                                                        <h4 className="title_cate_">
                                                                            <a
                                                                                href="/do-choi-va-game"
                                                                                title="Đồ chơi và game"
                                                                                tabIndex={-1}
                                                                            >
                                                                                Đồ chơi và game
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="item_category slick-slide"
                                                            data-slick-index={7}
                                                            aria-hidden="true"
                                                            tabIndex={-1}
                                                            role="option"
                                                            aria-describedby="slick-slide07"
                                                            style={{ width: 143 }}
                                                        >
                                                            <div
                                                                className="item"
                                                                onClick="location.href='/the-thao-du-lich';"
                                                            >
                                                                <div className="thumb_s">
                                                                    <a
                                                                        className="image"
                                                                        href="/the-thao-du-lich"
                                                                        title="Thể thao, du lịch"
                                                                        tabIndex={-1}
                                                                    >
                                                                        <img
                                                                            className="lazyload"
                                                                            src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="
                                                                            data-src="//bizweb.dktcdn.net/thumb/compact/100/374/880/collections/ct10-c7ca391b-3881-4926-8973-3b0057a7967d.png?v=1577470604167"
                                                                            alt="Thể thao, du lịch"
                                                                        />
                                                                    </a>
                                                                    <div className="info">
                                                                        <h4 className="title_cate_">
                                                                            <a
                                                                                href="/the-thao-du-lich"
                                                                                title="Thể thao, du lịch"
                                                                                tabIndex={-1}
                                                                            >
                                                                                Thể thao, du lịch
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="item_category slick-slide"
                                                            data-slick-index={8}
                                                            aria-hidden="true"
                                                            tabIndex={-1}
                                                            role="option"
                                                            aria-describedby="slick-slide08"
                                                            style={{ width: 143 }}
                                                        >
                                                            <div
                                                                className="item"
                                                                onClick="location.href='/noi-that-kien-truc';"
                                                            >
                                                                <div className="thumb_s">
                                                                    <a
                                                                        className="image"
                                                                        href="/noi-that-kien-truc"
                                                                        title="Nội thất, kiến trúc"
                                                                        tabIndex={-1}
                                                                    >
                                                                        <img
                                                                            className="lazyload"
                                                                            src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="
                                                                            data-src="//bizweb.dktcdn.net/thumb/compact/100/374/880/collections/ct14.png?v=1577470610790"
                                                                            alt="Nội thất, kiến trúc"
                                                                        />
                                                                    </a>
                                                                    <div className="info">
                                                                        <h4 className="title_cate_">
                                                                            <a
                                                                                href="/noi-that-kien-truc"
                                                                                title="Nội thất, kiến trúc"
                                                                                tabIndex={-1}
                                                                            >
                                                                                Nội thất, kiến trúc
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="item_category slick-slide"
                                                            data-slick-index={9}
                                                            aria-hidden="true"
                                                            tabIndex={-1}
                                                            role="option"
                                                            aria-describedby="slick-slide09"
                                                            style={{ width: 143 }}
                                                        >
                                                            <div
                                                                className="item"
                                                                onClick="location.href='/phu-tung-xe-hoi';"
                                                            >
                                                                <div className="thumb_s">
                                                                    <a
                                                                        className="image"
                                                                        href="/phu-tung-xe-hoi"
                                                                        title="Phụ tùng xe hơi"
                                                                        tabIndex={-1}
                                                                    >
                                                                        <img
                                                                            className="lazyload"
                                                                            src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="
                                                                            data-src="//bizweb.dktcdn.net/thumb/compact/100/374/880/collections/ct4.png?v=1577470658733"
                                                                            alt="Phụ tùng xe hơi"
                                                                        />
                                                                    </a>
                                                                    <div className="info">
                                                                        <h4 className="title_cate_">
                                                                            <a
                                                                                href="/phu-tung-xe-hoi"
                                                                                title="Phụ tùng xe hơi"
                                                                                tabIndex={-1}
                                                                            >
                                                                                Phụ tùng xe hơi
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="item_category slick-slide"
                                                            data-slick-index={10}
                                                            aria-hidden="true"
                                                            tabIndex={-1}
                                                            role="option"
                                                            aria-describedby="slick-slide010"
                                                            style={{ width: 143 }}
                                                        >
                                                            <div
                                                                className="item"
                                                                onClick="location.href='/do-gia-dung';"
                                                            >
                                                                <div className="thumb_s">
                                                                    <a
                                                                        className="image"
                                                                        href="/do-gia-dung"
                                                                        title="Đồ gia dụng"
                                                                        tabIndex={-1}
                                                                    >
                                                                        <img
                                                                            className="lazyload"
                                                                            src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="
                                                                            data-src="//bizweb.dktcdn.net/thumb/compact/100/374/880/collections/ct17.png?v=1577470678823"
                                                                            alt="Đồ gia dụng"
                                                                        />
                                                                    </a>
                                                                    <div className="info">
                                                                        <h4 className="title_cate_">
                                                                            <a
                                                                                href="/do-gia-dung"
                                                                                title="Đồ gia dụng"
                                                                                tabIndex={-1}
                                                                            >
                                                                                Đồ gia dụng
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="item_category slick-slide"
                                                            data-slick-index={11}
                                                            aria-hidden="true"
                                                            tabIndex={-1}
                                                            role="option"
                                                            aria-describedby="slick-slide011"
                                                            style={{ width: 143 }}
                                                        >
                                                            <div
                                                                className="item"
                                                                onClick="location.href='/cho-thu-cung';"
                                                            >
                                                                <div className="thumb_s">
                                                                    <a
                                                                        className="image"
                                                                        href="/cho-thu-cung"
                                                                        title="Cho thú cưng"
                                                                        tabIndex={-1}
                                                                    >
                                                                        <img
                                                                            className="lazyload"
                                                                            src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="
                                                                            data-src="//bizweb.dktcdn.net/thumb/compact/100/374/880/collections/ct18.png?v=1577470728620"
                                                                            alt="Cho thú cưng"
                                                                        />
                                                                    </a>
                                                                    <div className="info">
                                                                        <h4 className="title_cate_">
                                                                            <a
                                                                                href="/cho-thu-cung"
                                                                                title="Cho thú cưng"
                                                                                tabIndex={-1}
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
                                                <button
                                                    type="button"
                                                    data-role="none"
                                                    className="slick-next slick-arrow"
                                                    aria-label="Next"
                                                    role="button"
                                                    style={{ display: "block" }}
                                                    aria-disabled="false"
                                                >
                                                    Next
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="first clearfix">
                                        <h1 className="h1_title">Tất cả sản phẩm</h1>
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
                                                                            <a
                                                                                href="javascript:;"
                                                                                onClick="sortby('published-on:desc')"
                                                                            >
                                                                                Theo ngày đăng
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="javascript:;"
                                                                                onClick="sortby('alpha-asc')"
                                                                            >
                                                                                A → Z
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="javascript:;"
                                                                                onClick="sortby('alpha-desc')"
                                                                            >
                                                                                Z → A
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="javascript:;"
                                                                                onClick="sortby('price-asc')"
                                                                            >
                                                                                Giá tăng dần
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="javascript:;"
                                                                                onClick="sortby('price-desc')"
                                                                            >
                                                                                Giá giảm dần
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="javascript:;"
                                                                                onClick="sortby('created-desc')"
                                                                            >
                                                                                Hàng mới nhất
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="javascript:;"
                                                                                onClick="sortby('created-asc')"
                                                                            >
                                                                                Hàng cũ nhất
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="javascript:;"
                                                                                onClick="sortby('quantity-descending')"
                                                                            >
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
                                                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 product-col">
                                                        <div className="item_product_main margin-bottom-15">
                                                            <form
                                                                action="/cart/add"
                                                                method="post"
                                                                className="variants product-action"
                                                                data-id="product-actions-16610444"
                                                                encType="multipart/form-data"
                                                            >
                                                                <div className="product-thumbnail">
                                                                    <a
                                                                        className="image_thumb scale_hover"
                                                                        href="/ban-ibie-rec-f-chan-den-mau-kem"
                                                                        title="Bàn IBIE Rec-F chân đen màu kem"
                                                                    >
                                                                        <img
                                                                            className="lazyload loaded"
                                                                            src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/a6262f97a6f41dded346b37a0aaece-c1369390-32b5-4f97-a259-46ca3535447c.jpg?v=1577497546640"
                                                                            data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/a6262f97a6f41dded346b37a0aaece-c1369390-32b5-4f97-a259-46ca3535447c.jpg?v=1577497546640"
                                                                            alt="Bàn IBIE Rec-F chân đen màu kem"
                                                                            data-was-processed="true"
                                                                        />
                                                                    </a>
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
                                                                        <a
                                                                            href="/ban-ibie-rec-f-chan-den-mau-kem"
                                                                            title="Bàn IBIE Rec-F chân đen màu kem"
                                                                        >
                                                                            Bàn IBIE Rec-F chân đen màu kem
                                                                        </a>
                                                                    </h3>
                                                                    <div className="price-box">1.299.000₫</div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 product-col">
                                                        <div className="item_product_main margin-bottom-15">
                                                            <form
                                                                action="/cart/add"
                                                                method="post"
                                                                className="variants product-action"
                                                                data-id="product-actions-16610442"
                                                                encType="multipart/form-data"
                                                            >
                                                                <div className="product-thumbnail">
                                                                    <a
                                                                        className="image_thumb scale_hover"
                                                                        href="/giuong-ngu-doi-malmila"
                                                                        title="Giường ngủ đôi Malmila"
                                                                    >
                                                                        <img
                                                                            className="lazyload loaded"
                                                                            src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/4e58d3b1bc76ab5bd06557d719845d-8e690f5c-a66b-40c3-93a0-acbbdb7c12cd.jpg?v=1577497505000"
                                                                            data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/4e58d3b1bc76ab5bd06557d719845d-8e690f5c-a66b-40c3-93a0-acbbdb7c12cd.jpg?v=1577497505000"
                                                                            alt="Giường ngủ đôi Malmila"
                                                                            data-was-processed="true"
                                                                        />
                                                                    </a>
                                                                    <div className="action">
                                                                        <a
                                                                            title="Xem nhanh"
                                                                            href="/giuong-ngu-doi-malmila"
                                                                            data-handle="giuong-ngu-doi-malmila"
                                                                            className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                                                        >
                                                                            <i className="fas fa-search-plus" />
                                                                        </a>
                                                                        <input
                                                                            type="hidden"
                                                                            name="variantId"
                                                                            defaultValue={29845329}
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
                                                                        <a
                                                                            href="/giuong-ngu-doi-malmila"
                                                                            title="Giường ngủ đôi Malmila"
                                                                        >
                                                                            Giường ngủ đôi Malmila
                                                                        </a>
                                                                    </h3>
                                                                    <div className="price-box">10.490.000₫</div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 product-col">
                                                        <div className="item_product_main margin-bottom-15">
                                                            <form
                                                                action="/cart/add"
                                                                method="post"
                                                                className="variants product-action"
                                                                data-id="product-actions-16610440"
                                                                encType="multipart/form-data"
                                                            >
                                                                <div className="product-thumbnail">
                                                                    <a
                                                                        className="image_thumb scale_hover"
                                                                        href="/giuong-ngu-boc-vai-kieu-dang-hien-dai"
                                                                        title="Giường ngủ bọc vải kiểu dáng hiện đại"
                                                                    >
                                                                        <img
                                                                            className="lazyload loaded"
                                                                            src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/06af91156e3c8cf76d2b15f212a7fc-01523697-5154-432b-9dc6-f1bf353f8a51.jpg?v=1577497470450"
                                                                            data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/06af91156e3c8cf76d2b15f212a7fc-01523697-5154-432b-9dc6-f1bf353f8a51.jpg?v=1577497470450"
                                                                            alt="Giường ngủ bọc vải kiểu dáng hiện đại"
                                                                            data-was-processed="true"
                                                                        />
                                                                    </a>
                                                                    <div className="action">
                                                                        <a
                                                                            title="Xem nhanh"
                                                                            href="/giuong-ngu-boc-vai-kieu-dang-hien-dai"
                                                                            data-handle="giuong-ngu-boc-vai-kieu-dang-hien-dai"
                                                                            className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                                                        >
                                                                            <i className="fas fa-search-plus" />
                                                                        </a>
                                                                        <input
                                                                            type="hidden"
                                                                            name="variantId"
                                                                            defaultValue={29845327}
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
                                                                        <a
                                                                            href="/giuong-ngu-boc-vai-kieu-dang-hien-dai"
                                                                            title="Giường ngủ bọc vải kiểu dáng hiện đại"
                                                                        >
                                                                            Giường ngủ bọc vải kiểu dáng hiện đại
                                                                        </a>
                                                                    </h3>
                                                                    <div className="price-box">16.490.000₫</div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 product-col">
                                                        <div className="item_product_main margin-bottom-15">
                                                            <form
                                                                action="/cart/add"
                                                                method="post"
                                                                className="variants product-action"
                                                                data-id="product-actions-16610434"
                                                                encType="multipart/form-data"
                                                            >
                                                                <div className="product-thumbnail">
                                                                    <a
                                                                        className="image_thumb scale_hover"
                                                                        href="/ban-rec-t-trang-va-ghe-den-ibie-ib16c"
                                                                        title="Bàn Rec-T trắng và ghế đen IBIE IB16C"
                                                                    >
                                                                        <img
                                                                            className="lazyload loaded"
                                                                            src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/dbc1f618339c73fd42830958cd41cd-f6e7f51d-dc1d-4c8c-9d18-62b2db6c5ec2-412a6748-36cb-4607-9a18-86c290b11d20.jpg?v=1577497386050"
                                                                            data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/dbc1f618339c73fd42830958cd41cd-f6e7f51d-dc1d-4c8c-9d18-62b2db6c5ec2-412a6748-36cb-4607-9a18-86c290b11d20.jpg?v=1577497386050"
                                                                            alt="Bàn Rec-T trắng và ghế đen IBIE IB16C"
                                                                            data-was-processed="true"
                                                                        />
                                                                    </a>
                                                                    <div className="action">
                                                                        <a
                                                                            title="Xem nhanh"
                                                                            href="/ban-rec-t-trang-va-ghe-den-ibie-ib16c"
                                                                            data-handle="ban-rec-t-trang-va-ghe-den-ibie-ib16c"
                                                                            className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                                                        >
                                                                            <i className="fas fa-search-plus" />
                                                                        </a>
                                                                        <input
                                                                            type="hidden"
                                                                            name="variantId"
                                                                            defaultValue={29845321}
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
                                                                        <a
                                                                            href="/ban-rec-t-trang-va-ghe-den-ibie-ib16c"
                                                                            title="Bàn Rec-T trắng và ghế đen IBIE IB16C"
                                                                        >
                                                                            Bàn Rec-T trắng và ghế đen IBIE IB16C
                                                                        </a>
                                                                    </h3>
                                                                    <div className="price-box">2.550.000₫</div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 product-col">
                                                        <div className="item_product_main margin-bottom-15">
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
                                                                        >
                                                                            <i className="fas fa-search-plus" />
                                                                        </a>
                                                                        <input
                                                                            type="hidden"
                                                                            name="variantId"
                                                                            defaultValue={29842224}
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
                                                                        <a
                                                                            href="/dien-thoai-honor-7x-64gb-4gb-3-camera"
                                                                            title="Điện thoại Honor 7X 64GB/4GB 3 camera"
                                                                        >
                                                                            Điện thoại Honor 7X 64GB/4GB 3 camera
                                                                        </a>
                                                                    </h3>
                                                                    <div className="price-box">5.490.000₫</div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 product-col">
                                                        <div className="item_product_main margin-bottom-15">
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
                                                                    >
                                                                        <img
                                                                            className="lazyload"
                                                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                                                            data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/mph1075h1u2769d20170708t101837-257fde55-9593-4828-b325-c098b3da3aac.jpg?v=1577471327120"
                                                                            alt="Điện thoại Xiaomi Redmi Note 4"
                                                                        />
                                                                    </a>
                                                                    <div className="action">
                                                                        <a
                                                                            title="Xem nhanh"
                                                                            href="/dien-thoai-xiaomi-redmi-note-4"
                                                                            data-handle="dien-thoai-xiaomi-redmi-note-4"
                                                                            className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                                                        >
                                                                            <i className="fas fa-search-plus" />
                                                                        </a>
                                                                        <input
                                                                            className="hidden"
                                                                            type="hidden"
                                                                            name="variantId"
                                                                            defaultValue={29842223}
                                                                        />
                                                                        <button
                                                                            className="hidden-xs btn btn-cart btn btn-views left-to"
                                                                            title="Nhiều lựa chọn"
                                                                            type="button"
                                                                            onClick="window.location.href='/dien-thoai-xiaomi-redmi-note-4'"
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
                                                                        >
                                                                            Điện thoại Xiaomi Redmi Note 4
                                                                        </a>
                                                                    </h3>
                                                                    <div className="price-box">3.990.000₫</div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 product-col">
                                                        <div className="item_product_main margin-bottom-15">
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
                                                                    >
                                                                        <img
                                                                            className="lazyload"
                                                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                                                            data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/f08e0e8a8c06ae2d12cbd3ccaedbf9.jpg?v=1577471325000"
                                                                            alt="iPhone 6 32GB - hàng chính hãng"
                                                                        />
                                                                    </a>
                                                                    <div className="action">
                                                                        <a
                                                                            title="Xem nhanh"
                                                                            href="/iphone-6-32gb-hang-chinh-hang"
                                                                            data-handle="iphone-6-32gb-hang-chinh-hang"
                                                                            className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
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
                                                                        >
                                                                            iPhone 6 32GB - hàng chính hãng
                                                                        </a>
                                                                    </h3>
                                                                    <div className="price-box">6.990.000₫</div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 product-col">
                                                        <div className="item_product_main margin-bottom-15">
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
                                                                    >
                                                                        <img
                                                                            className="lazyload"
                                                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                                                            data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/0u4939d20170926t1409476909912.jpg?v=1577471325000"
                                                                            alt="Điện thoại Xiaomi Mi A1 64GB/4GB"
                                                                        />
                                                                    </a>
                                                                    <span
                                                                        className="smart lazyload"
                                                                        data-src="//bizweb.dktcdn.net/100/374/880/themes/748270/assets/sale_label.png?1656725435979"
                                                                    />
                                                                    <div className="action">
                                                                        <a
                                                                            title="Xem nhanh"
                                                                            href="/dien-thoai-xiaomi-mi-a1-64gb-4gb"
                                                                            data-handle="dien-thoai-xiaomi-mi-a1-64gb-4gb"
                                                                            className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
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
                                                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 product-col">
                                                        <div className="item_product_main margin-bottom-15">
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
                                                                    >
                                                                        <img
                                                                            className="lazyload"
                                                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                                                            data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/samsunggalaxyj7black1u504d2016.jpg?v=1577471324203"
                                                                            alt="Điện thoại Samsung Galaxy J7 Prime"
                                                                        />
                                                                    </a>
                                                                    <span
                                                                        className="smart lazyload"
                                                                        data-src="//bizweb.dktcdn.net/100/374/880/themes/748270/assets/sale_label.png?1656725435979"
                                                                    />
                                                                    <div className="action">
                                                                        <a
                                                                            title="Xem nhanh"
                                                                            href="/dien-thoai-samsung-galaxy-j7-prime"
                                                                            data-handle="dien-thoai-samsung-galaxy-j7-prime"
                                                                            className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                                                        >
                                                                            <i className="fas fa-search-plus" />
                                                                        </a>
                                                                        <input
                                                                            type="hidden"
                                                                            name="variantId"
                                                                            defaultValue={29842220}
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
                                                                        <a
                                                                            href="/dien-thoai-samsung-galaxy-j7-prime"
                                                                            title="Điện thoại Samsung Galaxy J7 Prime"
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
                                                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 product-col">
                                                        <div className="item_product_main margin-bottom-15">
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
                                                                    >
                                                                        <img
                                                                            className="lazyload"
                                                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                                                            data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/1348fb2bd0f05cdebcf54b3f03d8bf.jpg?v=1577471323167"
                                                                            alt="Điện Thoại Xiaomi Redmi 5 16GB"
                                                                        />
                                                                    </a>
                                                                    <div className="action">
                                                                        <a
                                                                            title="Xem nhanh"
                                                                            href="/dien-thoai-xiaomi-redmi-5-16gb"
                                                                            data-handle="dien-thoai-xiaomi-redmi-5-16gb"
                                                                            className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                                                        >
                                                                            <i className="fas fa-search-plus" />
                                                                        </a>
                                                                        <input
                                                                            type="hidden"
                                                                            name="variantId"
                                                                            defaultValue={29842219}
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
                                                                        <a
                                                                            href="/dien-thoai-xiaomi-redmi-5-16gb"
                                                                            title="Điện Thoại Xiaomi Redmi 5 16GB"
                                                                        >
                                                                            Điện Thoại Xiaomi Redmi 5 16GB
                                                                        </a>
                                                                    </h3>
                                                                    <div className="price-box">2.700.000₫</div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 product-col">
                                                        <div className="item_product_main margin-bottom-15">
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
                                                                    >
                                                                        <img
                                                                            className="lazyload"
                                                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                                                            data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/779db757e1a7de8820fb21a47e2af4.jpg?v=1577471321977"
                                                                            alt="Điện thoại BlackBerry KEYone Black Edition"
                                                                        />
                                                                    </a>
                                                                    <div className="action">
                                                                        <a
                                                                            title="Xem nhanh"
                                                                            href="/dien-thoai-blackberry-keyone-black-edition"
                                                                            data-handle="dien-thoai-blackberry-keyone-black-edition"
                                                                            className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                                                        >
                                                                            <i className="fas fa-search-plus" />
                                                                        </a>
                                                                        <input
                                                                            type="hidden"
                                                                            name="variantId"
                                                                            defaultValue={29842218}
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
                                                                        <a
                                                                            href="/dien-thoai-blackberry-keyone-black-edition"
                                                                            title="Điện thoại BlackBerry KEYone Black Edition"
                                                                        >
                                                                            Điện thoại BlackBerry KEYone Black Edition
                                                                        </a>
                                                                    </h3>
                                                                    <div className="price-box">15.890.000₫</div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 product-col">
                                                        <div className="item_product_main margin-bottom-15">
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
                                                                    >
                                                                        <img
                                                                            className="lazyload"
                                                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                                                            data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/1u5395d20170803t122400533902.jpg?v=1577471320537"
                                                                            alt="Điện thoại OPPO F3 - hàng chính hãng"
                                                                        />
                                                                    </a>
                                                                    <div className="action">
                                                                        <a
                                                                            title="Xem nhanh"
                                                                            href="/dien-thoai-oppo-f3-hang-chinh-hang"
                                                                            data-handle="dien-thoai-oppo-f3-hang-chinh-hang"
                                                                            className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                                                        >
                                                                            <i className="fas fa-search-plus" />
                                                                        </a>
                                                                        <input
                                                                            className="hidden"
                                                                            type="hidden"
                                                                            name="variantId"
                                                                            defaultValue={29842216}
                                                                        />
                                                                        <button
                                                                            className="hidden-xs btn btn-cart btn btn-views left-to"
                                                                            title="Nhiều lựa chọn"
                                                                            type="button"
                                                                            onClick="window.location.href='/dien-thoai-oppo-f3-hang-chinh-hang'"
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
                                                                        >
                                                                            Điện thoại OPPO F3 - hàng chính hãng
                                                                        </a>
                                                                    </h3>
                                                                    <div className="price-box">5.100.000₫</div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 product-col">
                                                        <div className="item_product_main margin-bottom-15">
                                                            <form
                                                                action="/cart/add"
                                                                method="post"
                                                                className="variants product-action"
                                                                data-id="product-actions-16610198"
                                                                encType="multipart/form-data"
                                                            >
                                                                <div className="product-thumbnail">
                                                                    <a
                                                                        className="image_thumb scale_hover"
                                                                        href="/laptop-lenovo-ideapad-120s"
                                                                        title="Laptop Lenovo IdeaPad 120S"
                                                                    >
                                                                        <img
                                                                            className="lazyload"
                                                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                                                            data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/2482bfdfc7288c3f4bf7505e5d4554.jpg?v=1577471319450"
                                                                            alt="Laptop Lenovo IdeaPad 120S"
                                                                        />
                                                                    </a>
                                                                    <div className="action">
                                                                        <a
                                                                            title="Xem nhanh"
                                                                            href="/laptop-lenovo-ideapad-120s"
                                                                            data-handle="laptop-lenovo-ideapad-120s"
                                                                            className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                                                        >
                                                                            <i className="fas fa-search-plus" />
                                                                        </a>
                                                                        <input
                                                                            type="hidden"
                                                                            name="variantId"
                                                                            defaultValue={29842215}
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
                                                                        <a
                                                                            href="/laptop-lenovo-ideapad-120s"
                                                                            title="Laptop Lenovo IdeaPad 120S"
                                                                        >
                                                                            Laptop Lenovo IdeaPad 120S
                                                                        </a>
                                                                    </h3>
                                                                    <div className="price-box">5.990.000₫</div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 product-col">
                                                        <div className="item_product_main margin-bottom-15">
                                                            <form
                                                                action="/cart/add"
                                                                method="post"
                                                                className="variants product-action"
                                                                data-id="product-actions-16610197"
                                                                encType="multipart/form-data"
                                                            >
                                                                <div className="product-thumbnail">
                                                                    <a
                                                                        className="image_thumb scale_hover"
                                                                        href="/man-hinh-dell-u2417h-24inch-fullhd"
                                                                        title="Màn hình Dell U2417H 24inch FullHD"
                                                                    >
                                                                        <img
                                                                            className="lazyload"
                                                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                                                            data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/u2417hu579d20160829t1403374680.jpg?v=1577471318000"
                                                                            alt="Màn hình Dell U2417H 24inch FullHD"
                                                                        />
                                                                    </a>
                                                                    <div className="action">
                                                                        <a
                                                                            title="Xem nhanh"
                                                                            href="/man-hinh-dell-u2417h-24inch-fullhd"
                                                                            data-handle="man-hinh-dell-u2417h-24inch-fullhd"
                                                                            className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                                                        >
                                                                            <i className="fas fa-search-plus" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="product-info">
                                                                    <h3 className="product-name">
                                                                        <a
                                                                            href="/man-hinh-dell-u2417h-24inch-fullhd"
                                                                            title="Màn hình Dell U2417H 24inch FullHD"
                                                                        >
                                                                            Màn hình Dell U2417H 24inch FullHD
                                                                        </a>
                                                                    </h3>
                                                                    <div className="price-box">5.410.000₫</div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 product-col">
                                                        <div className="item_product_main margin-bottom-15">
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
                                                                    >
                                                                        <img
                                                                            className="lazyload"
                                                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                                                            data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/gw22701u579d20161011t162311244.jpg?v=1577471317463"
                                                                            alt="Màn hình BenQ GW2270 22inch FullHD"
                                                                        />
                                                                    </a>
                                                                    <span
                                                                        className="smart lazyload"
                                                                        data-src="//bizweb.dktcdn.net/100/374/880/themes/748270/assets/sale_label.png?1656725435979"
                                                                    />
                                                                    <div className="action">
                                                                        <a
                                                                            title="Xem nhanh"
                                                                            href="/man-hinh-benq-gw2270-22inch-fullhd"
                                                                            data-handle="man-hinh-benq-gw2270-22inch-fullhd"
                                                                            className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                                                        >
                                                                            <i className="fas fa-search-plus" />
                                                                        </a>
                                                                        <input
                                                                            type="hidden"
                                                                            name="variantId"
                                                                            defaultValue={29842213}
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
                                                                        <a
                                                                            href="/man-hinh-benq-gw2270-22inch-fullhd"
                                                                            title="Màn hình BenQ GW2270 22inch FullHD"
                                                                        >
                                                                            Màn hình BenQ GW2270 22inch FullHD
                                                                        </a>
                                                                    </h3>
                                                                    <div className="price-box">
                                                                        1.990.000₫&nbsp;
                                                                        <span className="compare-price">
                                                                            2.590.000₫
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 product-col">
                                                        <div className="item_product_main margin-bottom-15">
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
                                                                    >
                                                                        <img
                                                                            className="lazyload"
                                                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                                                            data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/cf5ed92fca0b0bd3dff9d6a85b44c3.jpg?v=1577471316343"
                                                                            alt="Laptop HP Envy 13-ad158TU 3MR80PA"
                                                                        />
                                                                    </a>
                                                                    <div className="action">
                                                                        <a
                                                                            title="Xem nhanh"
                                                                            href="/laptop-hp-envy-13-ad158tu-3mr80pa"
                                                                            data-handle="laptop-hp-envy-13-ad158tu-3mr80pa"
                                                                            className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                                                        >
                                                                            <i className="fas fa-search-plus" />
                                                                        </a>
                                                                        <input
                                                                            type="hidden"
                                                                            name="variantId"
                                                                            defaultValue={29842212}
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
                                                                        <a
                                                                            href="/laptop-hp-envy-13-ad158tu-3mr80pa"
                                                                            title="Laptop HP Envy 13-ad158TU 3MR80PA"
                                                                        >
                                                                            Laptop HP Envy 13-ad158TU 3MR80PA
                                                                        </a>
                                                                    </h3>
                                                                    <div className="price-box">18.690.000₫</div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 product-col">
                                                        <div className="item_product_main margin-bottom-15">
                                                            <form
                                                                action="/cart/add"
                                                                method="post"
                                                                className="variants product-action"
                                                                data-id="product-actions-16610194"
                                                                encType="multipart/form-data"
                                                            >
                                                                <div className="product-thumbnail">
                                                                    <a
                                                                        className="image_thumb scale_hover"
                                                                        href="/macbook-pro-2017-mptr2"
                                                                        title="Macbook Pro 2017 MPTR2"
                                                                    >
                                                                        <img
                                                                            className="lazyload"
                                                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                                                            data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/1u5395d20170808t102711996650.jpg?v=1577471315383"
                                                                            alt="Macbook Pro 2017 MPTR2"
                                                                        />
                                                                    </a>
                                                                    <div className="action">
                                                                        <a
                                                                            title="Xem nhanh"
                                                                            href="/macbook-pro-2017-mptr2"
                                                                            data-handle="macbook-pro-2017-mptr2"
                                                                            className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                                                        >
                                                                            <i className="fas fa-search-plus" />
                                                                        </a>
                                                                        <input
                                                                            type="hidden"
                                                                            name="variantId"
                                                                            defaultValue={29842211}
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
                                                                        <a
                                                                            href="/macbook-pro-2017-mptr2"
                                                                            title="Macbook Pro 2017 MPTR2"
                                                                        >
                                                                            Macbook Pro 2017 MPTR2
                                                                        </a>
                                                                    </h3>
                                                                    <div className="price-box">55.000.000₫</div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 product-col">
                                                        <div className="item_product_main margin-bottom-15">
                                                            <form
                                                                action="/cart/add"
                                                                method="post"
                                                                className="variants product-action"
                                                                data-id="product-actions-16610193"
                                                                encType="multipart/form-data"
                                                            >
                                                                <div className="product-thumbnail">
                                                                    <a
                                                                        className="image_thumb scale_hover"
                                                                        href="/man-hinh-lg-24mp88hv-s-24inch-fullhd"
                                                                        title="Màn hình LG 24MP88HV-S 24inch FullHD"
                                                                    >
                                                                        <img
                                                                            className="lazyload"
                                                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                                                            data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/f5f3ac20e04def435321cd85e4e72a.jpg?v=1577471314590"
                                                                            alt="Màn hình LG 24MP88HV-S 24inch FullHD"
                                                                        />
                                                                    </a>
                                                                    <span
                                                                        className="smart lazyload"
                                                                        data-src="//bizweb.dktcdn.net/100/374/880/themes/748270/assets/sale_label.png?1656725435979"
                                                                    />
                                                                    <div className="action">
                                                                        <a
                                                                            title="Xem nhanh"
                                                                            href="/man-hinh-lg-24mp88hv-s-24inch-fullhd"
                                                                            data-handle="man-hinh-lg-24mp88hv-s-24inch-fullhd"
                                                                            className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                                                        >
                                                                            <i className="fas fa-search-plus" />
                                                                        </a>
                                                                        <input
                                                                            type="hidden"
                                                                            name="variantId"
                                                                            defaultValue={29842210}
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
                                                                        <a
                                                                            href="/man-hinh-lg-24mp88hv-s-24inch-fullhd"
                                                                            title="Màn hình LG 24MP88HV-S 24inch FullHD"
                                                                        >
                                                                            Màn hình LG 24MP88HV-S 24inch FullHD
                                                                        </a>
                                                                    </h3>
                                                                    <div className="price-box">
                                                                        4.690.000₫&nbsp;
                                                                        <span className="compare-price">
                                                                            5.990.000₫
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 product-col">
                                                        <div className="item_product_main margin-bottom-15">
                                                            <form
                                                                action="/cart/add"
                                                                method="post"
                                                                className="variants product-action"
                                                                data-id="product-actions-16610192"
                                                                encType="multipart/form-data"
                                                            >
                                                                <div className="product-thumbnail">
                                                                    <a
                                                                        className="image_thumb scale_hover"
                                                                        href="/apple-imac-2017-mne92-27"
                                                                        title="Apple iMac 2017 MNE92 27"
                                                                    >
                                                                        <img
                                                                            className="lazyload"
                                                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                                                            data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/51a288e0786fd6942e04ee0d1448a4.jpg?v=1577471313607"
                                                                            alt="Apple iMac 2017 MNE92 27"
                                                                        />
                                                                    </a>
                                                                    <div className="action">
                                                                        <a
                                                                            title="Xem nhanh"
                                                                            href="/apple-imac-2017-mne92-27"
                                                                            data-handle="apple-imac-2017-mne92-27"
                                                                            className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                                                        >
                                                                            <i className="fas fa-search-plus" />
                                                                        </a>
                                                                        <input
                                                                            type="hidden"
                                                                            name="variantId"
                                                                            defaultValue={29842209}
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
                                                                        <a
                                                                            href="/apple-imac-2017-mne92-27"
                                                                            title="Apple iMac 2017 MNE92 27"
                                                                        >
                                                                            Apple iMac 2017 MNE92 27
                                                                        </a>
                                                                    </h3>
                                                                    <div className="price-box">46.000.000₫</div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 product-col">
                                                        <div className="item_product_main margin-bottom-15">
                                                            <form
                                                                action="/cart/add"
                                                                method="post"
                                                                className="variants product-action"
                                                                data-id="product-actions-16610191"
                                                                encType="multipart/form-data"
                                                            >
                                                                <div className="product-thumbnail">
                                                                    <a
                                                                        className="image_thumb scale_hover"
                                                                        href="/man-hinh-gaming-lg-27mp68vq-p"
                                                                        title="Màn hình gaming LG 27MP68VQ-P"
                                                                    >
                                                                        <img
                                                                            className="lazyload"
                                                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                                                            data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/0u5367d20170629t140225968048.jpg?v=1577471312520"
                                                                            alt="Màn hình gaming LG 27MP68VQ-P"
                                                                        />
                                                                    </a>
                                                                    <div className="action">
                                                                        <a
                                                                            title="Xem nhanh"
                                                                            href="/man-hinh-gaming-lg-27mp68vq-p"
                                                                            data-handle="man-hinh-gaming-lg-27mp68vq-p"
                                                                            className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                                                        >
                                                                            <i className="fas fa-search-plus" />
                                                                        </a>
                                                                        <input
                                                                            type="hidden"
                                                                            name="variantId"
                                                                            defaultValue={29842208}
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
                                                                        <a
                                                                            href="/man-hinh-gaming-lg-27mp68vq-p"
                                                                            title="Màn hình gaming LG 27MP68VQ-P"
                                                                        >
                                                                            Màn hình gaming LG 27MP68VQ-P
                                                                        </a>
                                                                    </h3>
                                                                    <div className="price-box">5.050.000₫</div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 product-col">
                                                        <div className="item_product_main margin-bottom-15">
                                                            <form
                                                                action="/cart/add"
                                                                method="post"
                                                                className="variants product-action"
                                                                data-id="product-actions-16610190"
                                                                encType="multipart/form-data"
                                                            >
                                                                <div className="product-thumbnail">
                                                                    <a
                                                                        className="image_thumb scale_hover"
                                                                        href="/ipad-pro-10-5-inch-64gb-wifi"
                                                                        title="iPad Pro 10.5 inch 64GB Wifi"
                                                                    >
                                                                        <img
                                                                            className="lazyload"
                                                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                                                            data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/1u2769d20170622t151452947848.jpg?v=1577471311407"
                                                                            alt="iPad Pro 10.5 inch 64GB Wifi"
                                                                        />
                                                                    </a>
                                                                    <div className="action">
                                                                        <a
                                                                            title="Xem nhanh"
                                                                            href="/ipad-pro-10-5-inch-64gb-wifi"
                                                                            data-handle="ipad-pro-10-5-inch-64gb-wifi"
                                                                            className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                                                        >
                                                                            <i className="fas fa-search-plus" />
                                                                        </a>
                                                                        <input
                                                                            type="hidden"
                                                                            name="variantId"
                                                                            defaultValue={29842207}
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
                                                                        <a
                                                                            href="/ipad-pro-10-5-inch-64gb-wifi"
                                                                            title="iPad Pro 10.5 inch 64GB Wifi"
                                                                        >
                                                                            iPad Pro 10.5 inch 64GB Wifi
                                                                        </a>
                                                                    </h3>
                                                                    <div className="price-box">17.000.000₫</div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 product-col">
                                                        <div className="item_product_main margin-bottom-15">
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
                                                                        >
                                                                            <i className="fas fa-search-plus" />
                                                                        </a>
                                                                        <input
                                                                            type="hidden"
                                                                            name="variantId"
                                                                            defaultValue={29842206}
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
                                                                        <a
                                                                            href="/ipad-mini-4-128gb-wifi"
                                                                            title="iPad Mini 4 128GB WiFi"
                                                                        >
                                                                            iPad Mini 4 128GB WiFi
                                                                        </a>
                                                                    </h3>
                                                                    <div className="price-box">12.000.000₫</div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 product-col">
                                                        <div className="item_product_main margin-bottom-15">
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
                                                                        >
                                                                            <i className="fas fa-search-plus" />
                                                                        </a>
                                                                        <input
                                                                            type="hidden"
                                                                            name="variantId"
                                                                            defaultValue={29842205}
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
                                                                        <a
                                                                            href="/ipad-pro-9-7-inch-wifi-cellular"
                                                                            title="iPad Pro 9.7 inch Wifi Cellular"
                                                                        >
                                                                            iPad Pro 9.7 inch Wifi Cellular
                                                                        </a>
                                                                    </h3>
                                                                    <div className="price-box">9.000.000₫</div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 product-col">
                                                        <div className="item_product_main margin-bottom-15">
                                                            <form
                                                                action="/cart/add"
                                                                method="post"
                                                                className="variants product-action"
                                                                data-id="product-actions-16610187"
                                                                encType="multipart/form-data"
                                                            >
                                                                <div className="product-thumbnail">
                                                                    <a
                                                                        className="image_thumb scale_hover"
                                                                        href="/smart-tivi-toshiba-43-inch-4k"
                                                                        title="Smart Tivi Toshiba 43 inch 4K"
                                                                    >
                                                                        <img
                                                                            className="lazyload"
                                                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                                                            data-src="//bizweb.dktcdn.net/thumb/large/100/374/880/products/4121c4d0a678e4ff32ad91c8862b20.jpg?v=1577471308650"
                                                                            alt="Smart Tivi Toshiba 43 inch 4K"
                                                                        />
                                                                    </a>
                                                                    <span
                                                                        className="smart lazyload"
                                                                        data-src="//bizweb.dktcdn.net/100/374/880/themes/748270/assets/sale_label.png?1656725435979"
                                                                    />
                                                                    <div className="action">
                                                                        <a
                                                                            title="Xem nhanh"
                                                                            href="/smart-tivi-toshiba-43-inch-4k"
                                                                            data-handle="smart-tivi-toshiba-43-inch-4k"
                                                                            className="xem_nhanh btn right-to quick-view btn-views hidden-xs hidden-sm hidden-md"
                                                                        >
                                                                            <i className="fas fa-search-plus" />
                                                                        </a>
                                                                        <input
                                                                            type="hidden"
                                                                            name="variantId"
                                                                            defaultValue={29842204}
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
                                                                        <a
                                                                            href="/smart-tivi-toshiba-43-inch-4k"
                                                                            title="Smart Tivi Toshiba 43 inch 4K"
                                                                        >
                                                                            Smart Tivi Toshiba 43 inch 4K
                                                                        </a>
                                                                    </h3>
                                                                    <div className="price-box">
                                                                        7.290.000₫&nbsp;
                                                                        <span className="compare-price">
                                                                            9.590.000₫
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
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
                                                                <a
                                                                    className="page-link"
                                                                    onClick="doSearch(2)"
                                                                    href="javascript:;"
                                                                >
                                                                    2
                                                                </a>
                                                            </li>
                                                            <li className="page-item">
                                                                <a
                                                                    className="page-link"
                                                                    onClick="doSearch(3)"
                                                                    href="javascript:;"
                                                                >
                                                                    3
                                                                </a>
                                                            </li>
                                                            <li className="page-item">
                                                                <a
                                                                    className="page-link"
                                                                    onClick="doSearch(4)"
                                                                    href="javascript:;"
                                                                >
                                                                    4
                                                                </a>
                                                            </li>
                                                            <li className="page-item hidden-xs">
                                                                <a
                                                                    className="page-link"
                                                                    onClick="doSearch(2)"
                                                                    href="javascript:;"
                                                                >
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
                                <div id="open-filters" className="open-filters d-lg-none d-xl-none">
                                    <i className="fa fa-filter" />
                                    <span>Lọc</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ProductPage