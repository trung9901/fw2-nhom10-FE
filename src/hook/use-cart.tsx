import swr, { mutate } from "swr"

const useCart = () => {
    const {data, error } = swr("/cart")
    const increase = (id:any) => {
        const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
        const cartItem = cartItems.find((item: any) => item._id === id);
        cartItem.quantity 
        // mutate(localStorage.setItem('cart', JSON.stringify(cartItems)));

    }
    return {
        data,
        error,
        increase
    }
}
export default useCart;
