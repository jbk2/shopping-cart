import { CartProvider, useCart } from "/src/contexts/CartContext"
import CartProduct from "./CartProduct";

export default function Cart() {
  const { cartItems, cartTotal } = useCart()
  const cartItemsQuantity = cartItems.length;

  if(cartItemsQuantity < 1) {
    return(
      <p  id="cart">No items in cart</p>
    )
  }

  const subTotal = cartTotal();
  const delivery = subTotal * 0.05;
  const tax = subTotal * 0.2;
  const total = subTotal + delivery + tax;

  return(
    <div data-testid="cart" className="flex m-10">
      <div id="cart-products" className="w-[65vw] flex flex-col gap-6">
        {cartItems.map(item => 
          <CartProduct key={item.product.id} item={item} />
        )}
        <div id="totals">
          <div className="card card-side bg-base-100 shadow-sm max-w-[600px] h-34 p-4">
            <ul className="w-full mr-8">
              <li className="flex flex-row justify-between">
                <p className="font-medium text-sm">Subtotal</p>
                <p className="font-medium text-sm">£{subTotal.toFixed(2)}</p>
              </li>
              <li className="flex flex-row justify-between">
                <p className="font-light text-sm">Delivery</p>
                <p className="font-light text-sm">£{delivery.toFixed(2)}</p>
              </li>
              <li className="flex flex-row justify-between">
                <p className="font-light text-sm">Tax</p>
                <p className="font-light text-sm">£{tax.toFixed(2)}</p>
              </li>
              <li className="flex flex-row justify-between mt-2">
                <p className="font-bold underline">Total</p>
                <p className="font-bold underline">£{total.toFixed(2)}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div data-testid="cart">
        Form section here
      </div>
    </div>
  )
}