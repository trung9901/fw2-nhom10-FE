import React from 'react'

type Props = {}

const CartPage = (props: Props) => {
  return (
    <section className="main-cart-page main-container col1-layout">
      <div className="main container cartpcstyle">
        <div className="wrap_background_aside">
          <div className="header-cart">
            <div className="header-cart title_cart_pc hidden-sm hidden-xs"></div>
          </div>
          <div className="col-main cart_desktop_page cart-page">
            <div className="cart page_cart hidden-xs hidden-sm row ">
              <div className="col-lg-12 col-xl-12 col-md-12">
                <h1 className="title_cart">
                  <span>Giỏ hàng của bạn</span>
                </h1>
              </div>
              <form
                action="/cart"
                method="post"
                className="formcartpage col-lg-12 col-xl-12 col-md-12 margin-bottom-0"
              >
                <div className="bg-scroll">
                  <div className="cart-thead hidden">
                    <div style={{ width: "22%" }} className="a-left">
                      Ảnh sản phẩm
                    </div>
                    <div style={{ width: "28%" }} className="a-left">
                      Tên sản phẩm
                    </div>
                    <div style={{ width: "15%" }} className="a-left">
                      Giá bán lẻ
                    </div>
                    <div style={{ width: "10%" }} className="a-center">
                      Số lượng
                    </div>
                    <div style={{ width: "15%" }} className="a-center">
                      Tạm tính
                    </div>
                    <div style={{ width: "10%" }} className="a-center" />
                  </div>
                  <div className="cart-tbody">
                    <div className="item-cart productid-29842219">
                      <div style={{ width: "15%" }} className="image">
                        <a
                          className="product-image a-left"
                          title="Điện Thoại Xiaomi Redmi 5 16GB"
                          href="/dien-thoai-xiaomi-redmi-5-16gb"
                        >
                          <img
                            width={75}
                            height="auto"
                            alt="Điện Thoại Xiaomi Redmi 5 16GB"
                            src="//bizweb.dktcdn.net/thumb/compact/100/374/880/products/1348fb2bd0f05cdebcf54b3f03d8bf.jpg"
                          />
                        </a>
                      </div>
                      <div style={{ width: "30%" }} className="a-left contentcart">
                        <h3 className="product-name">
                          {" "}
                          <a
                            className="text2line"
                            href="/dien-thoai-xiaomi-redmi-5-16gb"
                            title="Điện Thoại Xiaomi Redmi 5 16GB"
                          >
                            Điện Thoại Xiaomi Redmi 5 16GB
                          </a>{" "}
                        </h3>
                        <span className="cart-prices">
                          <span className="prices">2.700.000₫</span>
                        </span>
                        <span className="variant-title" />
                      </div>
                      <div style={{ width: "25%" }} className="a-center">
                        <div className="input_qty_pr">
                          <input
                            className="variantID"
                            type="hidden"
                            name="variantId"
                            defaultValue={29842219}
                          />
                          <input
                            type="text"
                            maxLength={3}
                            readOnly=""
                            min={0}
                            className="check_number_here input-text number-sidebar input_pop input_pop qtyItem29842219"
                            id="qtyItem29842219"
                            name="Lines"
                            size={4}
                            defaultValue={1}
                          />
                          <button
                            onClick="var result = document.getElementById('qtyItem29842219'); var qtyItem29842219 = result.value; if( !isNaN( qtyItem29842219 )) result.value++;return false;"
                            className="increase_pop items-count btn-plus"
                            type="button"
                          >
                            <i className="fas fa-plus-circle" />
                          </button>
                          <button
                            onClick="var result = document.getElementById('qtyItem29842219'); var qtyItem29842219 = result.value; if( !isNaN( qtyItem29842219 ) && qtyItem29842219 > 1 ) result.value--;return false;"
                            disabled=""
                            className="reduced_pop items-count btn-minus"
                            type="button"
                          >
                            <i className="fas fa-minus-circle" />
                          </button>
                        </div>
                      </div>
                      <div style={{ width: "12%" }} className="a-center">
                        <span className="cart-price">
                          <span className="price">2.700.000₫</span>
                        </span>
                      </div>
                      <div style={{ width: "18%" }} className="a-center">
                        <a
                          className="remove-itemx remove-item-cart"
                          title="Xóa"
                          href="javascript:;"
                          data-id={29842219}
                        >
                          <span>
                            <i className="fa fa-times" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="col-lg-12 col-xl-12 col-md-12">
                <div className="wrapbottomcart">
                  <div className="section continued">
                    <div className="bg_cart shopping-cart-table-total">
                      <div className="table-total">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td className="total-text f-left">Tổng tiền</td>
                              <td className="txt-right totals_price price_end f-right">
                                2.700.000₫
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <a href="/collections/all" className="form-cart-continue">
                        <i className="fas fa-reply" />
                        Tiếp tục mua hàng
                      </a>
                      <a
                        href="/checkout"
                        className="btn-checkout-cart button_checkfor_buy"
                      >
                        <i className="fas fa-check" />
                        Tiến hành thanh toán
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrap_background_aside padding-top-15 margin-bottom-40 padding-left-0 padding-right-0 cartmbstyle">
        <div className="cart-mobile container">
          <form
            action="/cart"
            method="post"
            noValidate=""
            className="margin-bottom-0"
          >
            <div className="header-cart">
              <div className="title-cart title_cart_mobile">
                <h3>Giỏ hàng</h3>
              </div>
            </div>
            <div className="header-cart-content" style={{ background: "#fff" }}>
              <div className="cart_page_mobile content-product-list">
                <div className="item-product item productid-29842219 ">
                  <div className="item-product-cart-mobile">
                    <a href="/dien-thoai-xiaomi-redmi-5-16gb"></a>
                    <a
                      className="product-images1"
                      href=""
                      title="Điện Thoại Xiaomi Redmi 5 16GB"
                    >
                      <img
                        width={80}
                        height={150}
                        src="//bizweb.dktcdn.net/thumb/compact/100/374/880/products/1348fb2bd0f05cdebcf54b3f03d8bf.jpg"
                        alt="Điện Thoại Xiaomi Redmi 5 16GB"
                      />
                    </a>
                  </div>
                  <div className="title-product-cart-mobile">
                    <h3>
                      <a
                        href="/dien-thoai-xiaomi-redmi-5-16gb"
                        title="Điện Thoại Xiaomi Redmi 5 16GB"
                      >
                        Điện Thoại Xiaomi Redmi 5 16GB
                      </a>
                      <em style={{ fontSize: 11, display: "block" }} />
                    </h3>
                    <p>
                      Giá: <span>2.700.000₫</span>
                    </p>
                  </div>
                  <div className="select-item-qty-mobile">
                    <div className="txt_center">
                      <input
                        className="variantID"
                        type="hidden"
                        name="variantId"
                        defaultValue={29842219}
                      />
                      <button
                        onClick="var result = document.getElementById('qtyMobile29842219'); var qtyMobile29842219 = result.value; if( !isNaN( qtyMobile29842219 ) && qtyMobile29842219 > 1 ) result.value--;return false;"
                        className="reduced items-count btn-minus"
                        type="button"
                      >
                        <i className="fas fa-minus-circle" />
                      </button>
                      <input
                        type="text"
                        maxLength={3}
                        min={1}
                        className="input-text number-sidebar qtyMobile29842219"
                        id="qtyMobile29842219"
                        name="Lines"
                        size={4}
                        defaultValue={1}
                      />
                      <button
                        onClick="var result = document.getElementById('qtyMobile29842219'); var qtyMobile29842219 = result.value; if( !isNaN( qtyMobile29842219 )) result.value++;return false;"
                        className="increase items-count btn-plus"
                        type="button"
                      >
                        <i className="fas fa-plus-circle" />
                      </button>
                    </div>
                    <a
                      className="button remove-item remove-item-cart"
                      href="javascript:;"
                      data-id={29842219}
                    >
                      Xoá
                    </a>
                  </div>
                </div>
              </div>
              <div className="header-cart-price">
                <div className="title-cart">
                  <h3 className="text-xs-left">Tổng tiền</h3>
                  <a className="text-xs-right  totals_price_mobile">2.700.000₫</a>
                </div>
                <div className="checkout">
                  <button
                    className="btn-proceed-checkout-mobile"
                    title="Tiến hành thanh toán"
                    type="button"
                    onClick="window.location.href='/checkout'"
                  >
                    <span>Tiến hành thanh toán</span>
                  </button>
                  <button
                    className="btn btn-white f-left"
                    title="Tiếp tục mua hàng"
                    type="button"
                    onClick="window.location.href='/collections/all'"
                  >
                    <span>Tiếp tục mua hàng</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>

  )
}

export default CartPage