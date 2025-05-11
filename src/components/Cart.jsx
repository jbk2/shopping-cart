import { CartProvider, useCart } from "/src/contexts/CartContext"
import CartProduct from "./CartProduct";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, cartTotal } = useCart()
  const cartItemsQuantity = cartItems.length;

  if(cartItemsQuantity < 1) {
    return(
      <p id="cart" className="m-10 w-fit mx-auto text-4xl font-light">
        No items in cart - shop
        { ' ' }
        <Link to={'/catalogue'} className="hover:cursor-pointer
          text-blue-800 inline-block hover:text-blue-700 hover:scale-[1.02]
          transition-transform transform underline">
            here
        </Link>
      </p>
    )
  }

  const subTotal = cartTotal();
  const delivery = subTotal * 0.05;
  const tax = subTotal * 0.2;
  const total = subTotal + delivery + tax;

  return(
    <div data-testid="cart" className="flex m-10 justify-around">
      <div id="cart-products" className=" flex flex-col gap-6">
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
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box max-w-md border p-4">
          <legend className="fieldset-legend text-xl">Make payment</legend>
          <div className="flex gap-4">
            <div>
              <label className="label">First Name</label>
              <input type="text" className="input" placeholder="John" />
            </div>
            <div>
              <label className="label">Last Name</label>
              <input type="text" className="input" placeholder="Smith" />
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <label className="label">Address 1</label>
              <input type="text" className="input" placeholder="house no.1" />
            </div>
            <div>
              <label className="label">Address 1</label>
              <input type="text" className="input" placeholder="Apple Street" />
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <label className="label">Address 3</label>
              <input type="text" className="input" placeholder="Bannana Village" />
            </div>
            <div>
              <label className="label">Address 4</label>
              <input type="text" className="input" placeholder="Appleton" />
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <label className="label">Address 5</label>
              <input type="text" className="input" placeholder="Orange County" />
            </div>
            {/* <div>
              <label className="label">Address 6</label>
              <input type="text" className="input" placeholder="AB12 34C" />
            </div> */}
          </div>
          <hr  className="border-gray-300 my-4"/>
          <div className="flex gap-4">
            <div>
              <label className="label">Cardholder Name</label>
              <input type="text" className="input" placeholder="Jack Smith"/>
            </div>
            <div>
              <label className="label">Card Number</label>
              <input type="text" className="input" placeholder="1234 5678 9876 5432"/>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <label className="label">Expiration Date</label>
              <input type="text" className="input" placeholder="01/01/2021"/>
            </div>
            <div>
              <label className="label">Security Code</label>
              <input type="text" className="input" placeholder="- - -"/>
            </div>
          </div>
          <button class="btn btn-primary mt-4">Pay now</button>
        </fieldset>
      </div>
    </div>
  )
}