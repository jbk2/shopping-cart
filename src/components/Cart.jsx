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
    <div className="flex m-10">
      <div id="cart-products" className="w-[65vw] flex flex-col gap-6">
        {cartItems.map(item => 
          <CartProduct key={item.product.id} item={item} />
        )} 
      </div>
      <div id="cart-form">
        Form section here
      </div>
    </div>
  )
}