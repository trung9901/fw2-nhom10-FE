/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable jsx-a11y/alt-text */
import { useRouter } from 'next/router';
import React from 'react';
import useCart from '../../hook/use-cart';

import Image from 'next/image';
import { toast } from 'react-toastify';
type Props = {};

const CartPage = (props: Props) => {
  const router = useRouter();
  const {
    cart,
    addToCart,
    increaseItemInCart,
    decreaseItemInCart,
    removeItemInCart,
  } = useCart();
  
  const [cartItem,setCartItem] = React.useState<any[]>([])
  React.useEffect(() => {
    const carts:any = cart
    setCartItem(carts);
  },[cart])
  const increase = (id:any) =>{
    increaseItemInCart(id, ()=>{toast('thêm số lượng thành công')} )
  }
  const decrease = (id:any) =>{
    decreaseItemInCart(id,()=>{toast('giảm số lượng thành công')})
  }
  const remove = (id:any) =>{
    if(confirm('Are you sure you want to delete')){
      removeItemInCart(id,()=>{toast('xoá sp thành công')})
    }else{
      toast('xoá sp thất bại')
    }
    
  }
  
  

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
                <div style={{ width: '22%' }} className="a-left">
                  Ảnh sản phẩm
                </div>
                <div style={{ width: '28%' }} className="a-left">
                  Tên sản phẩm
                </div>
                <div style={{ width: '15%' }} className="a-left">
                  Giá bán lẻ
                </div>
                <div style={{ width: '10%' }} className="a-center">
                  Số lượng
                </div>
                <div style={{ width: '15%' }} className="a-center">
                  Tạm tính
                </div>
                <div style={{ width: '10%' }} className="a-center" />
              </div>
              <div className="cart-tbody">
                {cartItem?.map((item: any) => (
                  <div
                    className="item-cart productid-29842219"
                    key={item._id}
                  >
                    <div style={{ width: '15%' }} className="image">
                      <a
                        className="product-image a-left"
                        title="Điện Thoại Xiaomi Redmi 5 16GB"
                        href="/dien-thoai-xiaomi-redmi-5-16gb"
                      >
                        <Image
                          className=""
                          src={item?.image}
                          width={80}
                          height={80}
                          priority
                        />
                      </a>
                    </div>
                    <div
                      style={{ width: '30%' }}
                      className="a-left contentcart"
                    >
                      <h3 className="product-name">
                        {' '}
                        <a
                          className="text2line"
                          href="/dien-thoai-xiaomi-redmi-5-16gb"
                          title="Điện Thoại Xiaomi Redmi 5 16GB"
                        >
                          {item.name}
                        </a>{' '}
                      </h3>
                      <span className="cart-prices">
                        <span className="prices">{item.price}₫</span>
                      </span>
                      <span className="variant-title" />
                    </div>
                    <div style={{ width: '25%' }} className="a-center">
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
                          min={0}
                          className="check_number_here input-text number-sidebar input_pop input_pop qtyItem29842219"
                          id="qtyItem29842219"
                          name="Lines"
                          size={4}
                          value={item.quantity}
                        />
                        <button
                          className="increase_pop items-count btn-plus"
                          type="button"
                          onClick={()=>{increase(item._id)}}
                        >
                     
                          <i className="fas fa-plus-circle" />
                        </button>
                        <button
                          className="reduced_pop items-count btn-minus"
                          type="button"
                          onClick={()=>{decrease(item._id)}}
                        >
                     
                          <i className="fas fa-minus-circle" />
                        </button>
                      </div>
                    </div>
                    <div style={{ width: '12%' }} className="a-center">
                      <span className="cart-price">
                        <input type="hidden" name="sumprice" value={item.price * item.quantity} />
                        <span className="price">{item.price * item.quantity}₫</span>
                      </span>
                    </div>
                    <div style={{ width: '18%' }} className="a-center">
                      <a
                        className="remove-itemx remove-item-cart"
                        title="Xóa"
                        href="javascript:;"
                        data-id={29842219}
                        onClick={() =>remove(item._id)}
                      >
                        <span>
                          <i className="fa fa-times" />
                        </span>
                      </a>
                    </div>
                  </div>
                ))}
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
                           <td className="txt-right totals_price price_end f-right" >
                                   
                            ₫
                          </td>
                      
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <a href="/" className="form-cart-continue">
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
 
</section>);
};

export default CartPage;
