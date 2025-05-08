import { useContext, useState } from 'react';
import { useCart } from '../contexts/CartContext'

export default function ProductCard({ product }) {
  const [ quantity, setQuantity ] = useState(0);
  const { cartItems, addToCart, incrementCart, decrementCart, removeFromCart } = useCart();
  
  function handleAddToCart() {
    if(quantity > 0) { addToCart(product, quantity) }
  };

  return(
    <div id={ product.id } className="p-3 border-1 rounded-lg
      max-w-48 flex flex-col justify-between">
      <div className='' id='product-content'>
        <h3 className="font-bold text-lg line-clamp-2">{product.title}</h3>
        <img src={product.image} alt={product.title} className="object-contain
          max-h-40 mx-auto mt-2"/>
      </div>

      <div id='inputs' className='flex flex-col items-center mt-2'>
        <p id='price' className='block text-sm mb-1
          font-bold ml-1 self-start'>£{product.price}</p>
        <label htmlFor="noOfItems" className='font-bold text-xs'>No. Of Items</label>
        <div className='flex gap-2'>
          <input
            className="input w-12 h-8 pl-2"
            name="noOfItems"
            type="number"
            min="0"
            step="1"
            onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
          />
          <button onClick={handleAddToCart} className='btn btn-primary h-8 p-2'>Add to cart</button>
        </div>
      </div>
    </div>  
  )
}