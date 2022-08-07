import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import useSWR from 'swr';
import useProducts from '../../hook/use-products'
import { ProductType } from '../../models/Products';
import { toast } from 'react-toastify'
import useCart from '../../hook/use-cart'

type ProductProps = {
    product: ProductType[];
};
const ProductDetail = (props: ProductProps) => {

    const router = useRouter();
    const { id } = router.query;
    const { data, error } = useSWR(id ? `/products/${id}` : null);
    if (!data) <div>Loading...</div>;
    if (error) <div>Error</div>;
    const {

        addToCart,
        increaseItemInCart,
        decreaseItemInCart,
        removeItemInCart,
        increase } = useCart()

    return (
        <div className="container">
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
                                    <a className="changeurl" href="/dien-tu-va-cong-nghe">
                                        <span>Điện tử và công nghệ</span>
                                    </a>
                                    <span className="mr_lr">
                                        &nbsp;
                                        <i className="fa fa-angle-right" />
                                        &nbsp;
                                    </span>
                                </li>
                                <li>
                                    <strong>
                                        <span>{data?.name}</span>
                                    </strong>
                                </li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg_product clearfix">
                <div className="section wrap-padding-15 wp_product_main clearfix">
                    <div className="details-product section">
                        <div className="row ">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <h1 className="title-product">
                                    {/* {props.product.price} */}
                                    {data?.name}
                                </h1>
                                <div className="row">
                                    <div className="product-detail-left product-images col-xs-12 col-sm-12 col-md-12 col-lg-6">
                                        <div className="wrapbb">
                                            <div className="col_large_default large-image">
                                                <a
                                                    href="//bizweb.dktcdn.net/thumb/1024x1024/100/374/880/products/7329f4ef40e4ead01e089872faf6ae.jpg?v=1577471328247"
                                                    data-rel="prettyPhoto[product-gallery]"
                                                >
                                                    <div
                                                        style={{ height: 545, width: 545 }}
                                                        className="zoomWrapper"
                                                    >
                                                        <div
                                                            style={{ height: 545, width: 545 }}
                                                            className="zoomWrapper"
                                                        >
                                                            <img
                                                                className="checkurl img-responsive"
                                                                id="img_01"
                                                                src={data?.image}
                                                                alt="Điện thoại Honor 7X 64GB/4GB 3 camera"
                                                                style={{ position: "absolute" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="hidden">
                                                    <div className="item">
                                                        <a
                                                            href="https://bizweb.dktcdn.net/100/374/880/products/9f200aeb9e4faefac19b794dd8c454.jpg?v=1577471328247"
                                                            title="Điện thoại Honor 7X 64GB/4GB 3 camera"
                                                            data-image="https://bizweb.dktcdn.net/100/374/880/products/9f200aeb9e4faefac19b794dd8c454.jpg?v=1577471328247"
                                                            data-zoom-image="https://bizweb.dktcdn.net/100/374/880/products/9f200aeb9e4faefac19b794dd8c454.jpg?v=1577471328247"
                                                            data-rel="prettyPhoto[product-gallery]"
                                                        ></a>
                                                    </div>
                                                    <div className="item">
                                                        <a
                                                            href="https://bizweb.dktcdn.net/100/374/880/products/98353e2ea8dd704a5d12fcb3d0f95b.jpg?v=1577471328247"
                                                            title="Điện thoại Honor 7X 64GB/4GB 3 camera"
                                                            data-image="https://bizweb.dktcdn.net/100/374/880/products/98353e2ea8dd704a5d12fcb3d0f95b.jpg?v=1577471328247"
                                                            data-zoom-image="https://bizweb.dktcdn.net/100/374/880/products/98353e2ea8dd704a5d12fcb3d0f95b.jpg?v=1577471328247"
                                                            data-rel="prettyPhoto[product-gallery]"
                                                        ></a>
                                                    </div>
                                                    <div className="item">
                                                        <a
                                                            href="https://bizweb.dktcdn.net/100/374/880/products/0674951702f59f784bfa5cc9334877.jpg?v=1577471328247"
                                                            title="Điện thoại Honor 7X 64GB/4GB 3 camera"
                                                            data-image="https://bizweb.dktcdn.net/100/374/880/products/0674951702f59f784bfa5cc9334877.jpg?v=1577471328247"
                                                            data-zoom-image="https://bizweb.dktcdn.net/100/374/880/products/0674951702f59f784bfa5cc9334877.jpg?v=1577471328247"
                                                            data-rel="prettyPhoto[product-gallery]"
                                                        ></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="thumb_left">
                                                <div
                                                    id="gallery_02"
                                                    className="thumbnail-product thumb_product_details slick-initialized slick-slider"
                                                >
                                                    <div aria-live="polite" className="slick-list draggable">
                                                        <div
                                                            className="slick-track"
                                                            role="listbox"
                                                            style={{
                                                                opacity: 1,
                                                                width: 436,
                                                                transform: "translate3d(0px, 0px, 0px)"
                                                            }}
                                                        >
                                                            <div
                                                                className="item slick-slide slick-current slick-active"
                                                                data-slick-index={0}
                                                                aria-hidden="false"
                                                                tabIndex={-1}
                                                                role="option"
                                                                aria-describedby="slick-slide10"
                                                                style={{ width: 109 }}
                                                            >
                                                                <a
                                                                    href="javascript:;"
                                                                    data-zoom-image="//bizweb.dktcdn.net/thumb/1024x1024/100/374/880/products/7329f4ef40e4ead01e089872faf6ae.jpg?v=1577471328247"
                                                                    tabIndex={0}
                                                                >
                                                                    <img
                                                                        className="lazyload loaded"
                                                                        data-img="//bizweb.dktcdn.net/thumb/1024x1024/100/374/880/products/7329f4ef40e4ead01e089872faf6ae.jpg?v=1577471328247"
                                                                        src="//bizweb.dktcdn.net/thumb/small/100/374/880/products/7329f4ef40e4ead01e089872faf6ae.jpg?v=1577471328247"
                                                                        data-src="//bizweb.dktcdn.net/thumb/small/100/374/880/products/7329f4ef40e4ead01e089872faf6ae.jpg?v=1577471328247"
                                                                        alt="Điện thoại Honor 7X 64GB/4GB 3 camera"
                                                                        data-was-processed="true"
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div
                                                                className="item slick-slide slick-active"
                                                                data-slick-index={1}
                                                                aria-hidden="false"
                                                                tabIndex={-1}
                                                                role="option"
                                                                aria-describedby="slick-slide11"
                                                                style={{ width: 109 }}
                                                            >
                                                                <a
                                                                    href="javascript:;"
                                                                    data-zoom-image="//bizweb.dktcdn.net/thumb/1024x1024/100/374/880/products/9f200aeb9e4faefac19b794dd8c454.jpg?v=1577471328247"
                                                                    tabIndex={0}
                                                                >
                                                                    <img
                                                                        className="lazyload loaded"
                                                                        data-img="//bizweb.dktcdn.net/thumb/1024x1024/100/374/880/products/9f200aeb9e4faefac19b794dd8c454.jpg?v=1577471328247"
                                                                        src="//bizweb.dktcdn.net/thumb/small/100/374/880/products/9f200aeb9e4faefac19b794dd8c454.jpg?v=1577471328247"
                                                                        data-src="//bizweb.dktcdn.net/thumb/small/100/374/880/products/9f200aeb9e4faefac19b794dd8c454.jpg?v=1577471328247"
                                                                        alt="Điện thoại Honor 7X 64GB/4GB 3 camera"
                                                                        data-was-processed="true"
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div
                                                                className="item slick-slide slick-active"
                                                                data-slick-index={2}
                                                                aria-hidden="false"
                                                                tabIndex={-1}
                                                                role="option"
                                                                aria-describedby="slick-slide12"
                                                                style={{ width: 109 }}
                                                            >
                                                                <a
                                                                    href="javascript:;"
                                                                    data-zoom-image="//bizweb.dktcdn.net/thumb/1024x1024/100/374/880/products/98353e2ea8dd704a5d12fcb3d0f95b.jpg?v=1577471328247"
                                                                    tabIndex={0}
                                                                >
                                                                    <img
                                                                        className="lazyload loaded"
                                                                        data-img="//bizweb.dktcdn.net/thumb/1024x1024/100/374/880/products/98353e2ea8dd704a5d12fcb3d0f95b.jpg?v=1577471328247"
                                                                        src="//bizweb.dktcdn.net/thumb/small/100/374/880/products/98353e2ea8dd704a5d12fcb3d0f95b.jpg?v=1577471328247"
                                                                        data-src="//bizweb.dktcdn.net/thumb/small/100/374/880/products/98353e2ea8dd704a5d12fcb3d0f95b.jpg?v=1577471328247"
                                                                        alt="Điện thoại Honor 7X 64GB/4GB 3 camera"
                                                                        data-was-processed="true"
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div
                                                                className="item slick-slide slick-active"
                                                                data-slick-index={3}
                                                                aria-hidden="false"
                                                                tabIndex={-1}
                                                                role="option"
                                                                aria-describedby="slick-slide13"
                                                                style={{ width: 109 }}
                                                            >
                                                                <a
                                                                    href="javascript:;"
                                                                    data-zoom-image="//bizweb.dktcdn.net/thumb/1024x1024/100/374/880/products/0674951702f59f784bfa5cc9334877.jpg?v=1577471328247"
                                                                    tabIndex={0}
                                                                >
                                                                    <img
                                                                        className="lazyload loaded"
                                                                        data-img="//bizweb.dktcdn.net/thumb/1024x1024/100/374/880/products/0674951702f59f784bfa5cc9334877.jpg?v=1577471328247"
                                                                        src="//bizweb.dktcdn.net/thumb/small/100/374/880/products/0674951702f59f784bfa5cc9334877.jpg?v=1577471328247"
                                                                        data-src="//bizweb.dktcdn.net/thumb/small/100/374/880/products/0674951702f59f784bfa5cc9334877.jpg?v=1577471328247"
                                                                        alt="Điện thoại Honor 7X 64GB/4GB 3 camera"
                                                                        data-was-processed="true"
                                                                    />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 details-pro">
                                        <form
                                            encType="multipart/form-data"
                                            id="add-to-cart-form"
                                            action="/cart/add"
                                            method="post"
                                            className="form_background form-inline margin-bottom-0"
                                        >
                                            <div
                                                className="fw w_100"
                                                itemProp="offers"
                                                itemType="https://schema.org/Offer"
                                            >
                                                <div className="group-status">
                                                    <span className="first_status hidden">
                                                        Thương hiệu: <span className="status_name">Honor</span>
                                                    </span>
                                                </div>
                                                <div className="price-box">
                                                    <div className="special-price">
                                                        <span className="price product-price">{data?.price}₫</span>
                                                        <meta itemProp="price" />
                                                        <meta itemProp="priceCurrency" content="VND" />
                                                    </div>{" "}
                                                    {/* Giá */}
                                                    <span className="first_status status_2 d-none">
                                                        <span className="status_name availabel">
                                                            <link
                                                                itemProp="availability"
                                                                href="http://schema.org/InStock"
                                                            />
                                                            Còn hàng
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="product-summary">
                                                    <div className="rte">
                                                        <em>{data?.description}</em>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-product section">
                                                <div className="box-variant clearfix ">
                                                    <input
                                                        type="hidden"
                                                        name="variantId"
                                                        defaultValue={29842224}
                                                    />
                                                </div>
                                                <div className="form-group form_button_details margin-top-15">
                                                    <div className="form_product_content type1 ">
                                                        <div className="soluong soluong_type_1 show">
                                                            <label className="section margin-bottom-10">
                                                                Số lượng:
                                                            </label>
                                                            <div className="custom input_number_product custom-btn-number form-control">
                                                                <button
                                                                    className="btn_num num_1 button button_qty"

                                                                    type="button"
                                                                >
                                                                    <i className="fas fa-minus-circle" />
                                                                </button>
                                                                <input
                                                                    type="text"
                                                                    id="qtym"
                                                                    name="quantity"
                                                                    defaultValue={1}
                                                                    maxLength={3}
                                                                    className="form-control prd_quantity"

                                                                />
                                                                <button
                                                                    className="btn_num num_2 button button_qty"
                                                                    type="button"
                                                                >
                                                                    <i className="fas fa-plus-circle" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="button_actions clearfix">
                                                            <button
                                                                type="submit"
                                                                className="btn btn_base normal_button btn_add_cart btn-cart add_to_cart"
                                                            >
                                                                <button onClick={() => addToCart(data,()=>{toast('theem giỏ hàng thành công')})}>
                                                                    <span className="text_1">
                                                                        <i className="fas fa-shopping-basket" /> Thêm vào
                                                                        giỏ hàng
                                                                    </span>
                                                                </button>

                                                            </button>
                                                            <button
                                                                type="submit"
                                                                className="btn fast btn_base btn_add_cart btn-cart"
                                                            >
                                                                <span className="text_1">
                                                                    <i className="fas fa-check" /> Mua ngay
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="section form_contactproduct">
                                            <a
                                                className="block scale_hover a-center"
                                                href="#"
                                                title="alt"
                                            >
                                                <img
                                                    src="//bizweb.dktcdn.net/100/374/880/themes/748270/assets/banner_product_details.jpg?1656725435979"
                                                    alt="alt"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="wrap_tab_ed section">
                                    <div className="tab_h">
                                        <div className="section bg_white">
                                            {/* Nav tabs */}
                                            <div className="product-tab e-tabs not-dqtab">
                                                <ul className="tabs tabs-title clearfix">
                                                    <li className="tab-link current" data-tab="tab-1">
                                                        <h3>
                                                            <span>Thông tin chi tiết</span>
                                                        </h3>
                                                    </li>
                                                    <li className="tab-link" data-tab="tab-2">
                                                        <h3>
                                                            <span>Chính sách bảo hành</span>
                                                        </h3>
                                                    </li>
                                                </ul>
                                                <div className="tab-float">
                                                    <div
                                                        id="tab-1"
                                                        className="tab-content content_extab current"
                                                    >
                                                        <div className="rte product_getcontent">
                                                            <h5>
                                                                <strong>Thiết kế hiện đại</strong>
                                                            </h5>
                                                            <p>
                                                                Điện Thoại Honor 7X&nbsp;với thiết kế hiện đại và
                                                                cuốn hút, được làm bằng kim loại nhôm giúp máy toát
                                                                lên vẻ ngoài sang trọng. Máy khá mỏng chỉ 7.6mm nặng
                                                                khoảng 165g&nbsp;kết hợp với 4 góc được bo tròn nhẹ
                                                                nên cảm giác cầm trên tay điện thoại&nbsp;Honor
                                                                7X&nbsp;khá là thoải mái, vừa vặn trong lòng bàn
                                                                tay. Cùng với mặt kính cường lực giúp tránh những va
                                                                chạm không may xảy ra khi sử dụng điện thoại, máy
                                                                cũng được cấp chuẩn IP67 về khả năng chống nước và
                                                                bụi đảm bảo an toàn, độ bền.
                                                            </p>
                                                            <p style={{ textAlign: "center" }}>
                                                                <img
                                                                    data-thumb="large"
                                                                    original-height={900}
                                                                    original-width={900}
                                                                    src="//bizweb.dktcdn.net/thumb/large/100/310/856/files/9f200aeb9e4faefac19b794dd8c45452.jpg?v=1524585091709"
                                                                />
                                                            </p>
                                                            <h5>
                                                                <strong>Màn hình viền cực mỏng</strong>
                                                            </h5>
                                                            <p>
                                                                Được trang bị màn hình kích thước 5.93 inch, độ phân
                                                                giải Full HD (1080 x 2160) pixels với tỉ lệ hiển thị
                                                                18:9, trên tấm nền LTPS LCD mang lại những hình ảnh
                                                                sắc nét với màu sắc trung thực. Nhờ tối ưu phần viền
                                                                cực mỏng&nbsp;Honor 7X đưa được một không gian hiển
                                                                thị rộng đáp ứng hoàn hảo nhu cầu xem phim, chơi
                                                                game giải trí trên màn hình lớn.
                                                            </p>
                                                            <h5>
                                                                <strong>Hiệu năng ổn định</strong>
                                                            </h5>
                                                            <p>
                                                                Máy hoạt động trên nền tảng Android 8.0 với giao
                                                                diện người dùng EMUI 5.1 và có sức mạnh xử lý được
                                                                cung cấp bởi con chip HiSilicon Kirin 659, 8 nhân
                                                                xung nhịp 2.3GHz với bộ nhớ RAM lên đến
                                                                4GB,&nbsp;Honor 7X&nbsp;thực hiện mọi tác vụ nặng
                                                                nhất một cách dễ dàng, từ lướt web, giải trí, xem
                                                                phim đến chơi mượt những tựa game đồ họa nặng hiện
                                                                nay. Bên cạnh đó, với bộ nhớ trong 64GB chiếc điện
                                                                thoại Honor&nbsp;giúp người dùng lưu trữ được rất
                                                                nhiều dữ liệu cũng như thoải mái chụp ảnh, quay
                                                                video.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div id="tab-2" className="tab-content content_extab">
                                                        <div className="rte">Nội dung tùy chỉnh viết ở đây</div>
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
                <div className="section_wishlist section margin-bottom-40">
                    <h2 className="title_modules">
                        <a href="/dien-tu-va-cong-nghe" title="Sản phẩm cùng loại">
                            Sản phẩm cùng loại
                        </a>
                    </h2>
                    <div className="owl_product_news slick_wishlist slick-initialized slick-slider">
                        <button
                            type="button"
                            data-role="none"
                            className="slick-prev slick-arrow"
                            aria-label="Previous"
                            role="button"
                            aria-disabled="false"
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
                                    width: 1440,
                                    transform: "translate3d(-288px, 0px, 0px)"
                                }}
                            >
                                <div
                                    className="item slick-slide"
                                    data-slick-index={0}
                                    aria-hidden="true"
                                    tabIndex={-1}
                                    role="option"
                                    aria-describedby="slick-slide00"
                                    style={{ width: 258 }}
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
                                                    tabIndex={-1}
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
                                                        tabIndex={-1}
                                                    >
                                                        <i className="fas fa-search-plus" />
                                                    </a>
                                                    <input
                                                        className="hidden"
                                                        type="hidden"
                                                        name="variantId"
                                                        defaultValue={29842223}
                                                        tabIndex={-1}
                                                    />
                                                    <button
                                                        className="hidden-xs btn btn-cart btn btn-views left-to"
                                                        title="Nhiều lựa chọn"
                                                        type="button"
                                                        tabIndex={-1}
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
                                                        tabIndex={-1}
                                                    >
                                                        Điện thoại Xiaomi Redmi Note 4
                                                    </a>
                                                </h3>
                                                <div className="price-box">3.990.000₫</div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div
                                    className="item slick-slide slick-active"
                                    data-slick-index={1}
                                    aria-hidden="false"
                                    tabIndex={-1}
                                    role="option"
                                    aria-describedby="slick-slide01"
                                    style={{ width: 258 }}
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
                                <div
                                    className="item slick-slide slick-active"
                                    data-slick-index={2}
                                    aria-hidden="false"
                                    tabIndex={-1}
                                    role="option"
                                    aria-describedby="slick-slide02"
                                    style={{ width: 258 }}
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
                                                            'url("//bizweb.dktcdn.net/100/374/880/themes/748270/assets/sale_label.png?1656725435979")'
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
                                                    <span className="compare-price">5.590.000₫</span>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div
                                    className="item slick-slide slick-active"
                                    data-slick-index={3}
                                    aria-hidden="false"
                                    tabIndex={-1}
                                    role="option"
                                    aria-describedby="slick-slide03"
                                    style={{ width: 258 }}
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
                                                            'url("//bizweb.dktcdn.net/100/374/880/themes/748270/assets/sale_label.png?1656725435979")'
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
                                                    <span className="compare-price">5.900.000₫</span>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div
                                    className="item slick-slide slick-current slick-active"
                                    data-slick-index={4}
                                    aria-hidden="false"
                                    tabIndex={-1}
                                    role="option"
                                    aria-describedby="slick-slide04"
                                    style={{ width: 258 }}
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
                        <button
                            type="button"
                            data-role="none"
                            className="slick-next slick-arrow slick-disabled"
                            aria-label="Next"
                            role="button"
                            style={{ display: "block" }}
                            aria-disabled="true"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductDetail