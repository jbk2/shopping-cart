import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext'

export default function CartNavEl() {
  const { cartItems } = useCart();
  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return(
    <Link to='/cart'>
      <div id="cart" className='flex items-center' data-testid="cart">
        <i className="fa-solid fa-cart-shopping"></i>
        <p>Cart Items -
          <span id='cart-count'> { totalCartItems }</span>
        </p>
      </div>
    </Link>
  )
}