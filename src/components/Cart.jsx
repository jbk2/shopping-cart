import { CartProvider, useCart } from "../contexts/CartContext"
import CartProduct from "./CartProduct";

export default function Cart() {

  const { cartItems } = useCart()
  const cartItemsQuantity = cartItems.length;

  if(cartItemsQuantity < 1) {
    return(
      <p>No items in cart</p>
    )
  }

  return(
    <>
      <div id="cart-products">
        {cartItems.map(item => 
          <CartProduct item={item} />
        )} 
      </div>
      <div id="cart-form">
        Form section here
      </div>
    </>
  )
}