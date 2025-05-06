import { useState } from 'react';

export default function CartNavEl() {

  
  const [ cartItems, setCartItems ] = useState(0);

  return(
    <div id="cart" className='flex items-center' data-testid="cart">
      <i className="fa-solid fa-cart-shopping"></i>
      <p>Cart Items -
        <span id='cart-count'>{ cartItems }</span>
      </p>
    </div>
  )

}