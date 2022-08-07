import React from 'react'
import useCart from './../../hook/use-cart';

type Props = {}

const CartItem = (props: Props) => {
    const { cart} = useCart()
    console.log(cart.length)
  return (
    <span className="count_item count_item_pr">
    {cart.length}
  </span>
  )
}

export default CartItem