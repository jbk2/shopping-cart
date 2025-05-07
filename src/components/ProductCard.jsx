import { useState } from 'react';

export default function ProductCard({ product, addToCart }) {
  const [ quantity, setQuantity ] = useState(0);
  
  function handleAddToCart() {
    if(quantity > 0) { handleAddToCart(product, quantity) }
  };

  return(
    <div id={ product.id } className="p-3 border-1 rounded-lg max-w-60">
      <h3 className="font-bold text-lg">{product.title}</h3>
      <img src={product.image} alt={product.title} className="object-cover max-h-40"/>
      <label for="noOfItems">No. Of Items</label>
      <input
        className="border-1 rounded w-10 ml-2 pl-1"
        name="noOfItems"
        type="number"
        min="0"
        step="1"
        onChange={(e) => setQuantity(e.target.value)}
      >
      </input>
      <button onClick={handleAddToCart} >Add to cart</button>
    </div>  
  )
}