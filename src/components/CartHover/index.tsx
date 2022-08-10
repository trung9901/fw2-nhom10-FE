import React from 'react';

import useCart from './../../hook/use-cart';
import Image from 'next/image';
import Link from 'next/Link';
type Props = {};

const CartHover = (props: Props) => {
  const {
    cart,
    addToCart,
    increaseItemInCart,
    decreaseItemInCart,
    removeItemInCart,
  } = useCart();
  return (
    <div className="no-item">
      {!cart ? <p> Không có sản phẩm nào</p> : <p> đi tới trang giỏ hàng</p>}
    </div>
  );
};

export default CartHover;
