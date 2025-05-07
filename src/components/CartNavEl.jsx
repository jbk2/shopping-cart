import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CartNavEl() {

  
  const [ cartItems, setCartItems ] = useState(0);

  return(
    <Link to='/cart'>
      <div id="cart" className='flex items-center' data-testid="cart">
        <i className="fa-solid fa-cart-shopping"></i>
        <p>Cart Items -
          <span id='cart-count'>{ cartItems }</span>
        </p>
      </div>
    </Link>
  )

}