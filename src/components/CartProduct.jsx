import { useCart } from "../contexts/CartContext";

export default function CartProduct({item}) {
  const { addToCart, removeFromCart } = useCart();
  const product = item.product;
  const quantity = item.quantity;
  const itemTotal = product.price * quantity

  function handleRemoveProduct() {
    removeFromCart(product);
  }

  function updateCart(quantity) {
    addToCart(product, quantity)
  }

  return(
    <div className="card card-side bg-base-100 shadow-sm max-w-[600px] h-40">
      
      <figure className="ml-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-[70%]"
        />
      </figure>
      <div className="card-body ml-6">
        <h2 className="card-title line-clamp-1">{product.title}</h2>
        {/* <p className="line-clamp-1"></p> */}
        <div className="card-actions flex items-center gap-40">
          <select defaultValue={`${quantity}`} className="select w-24"
            onChange={(e) => updateCart(Number(e.target.value))}
          >
            <option value={1}>Qty 1</option>
            <option value={2}>Qty 2</option>
            <option value={3}>Qty 3</option>
            <option value={4}>Qty 4</option>
            <option value={5}>Qty 5</option>
            <option value={6}>Qty 6</option>
            <option value={7}>Qty 7</option>
            <option value={8}>Qty 8</option>
            <option value={9}>Qty 9</option>
            <option value={10}>Qty 10</option>
            <option value={11}>Qty 11</option>
            <option value={12}>Qty 12</option>
          </select>
          <p className="font-medium text-xl">
            <span className="mr-1 text-sm font-medium italic">£</span>
            { itemTotal }
          </p>
        </div>
      </div>
      <button className="self-start size-5 bg-blue-950 text-white text-[0.6rem]
         leading-none relative -top-1.5 -right-1.5 flex items-center justify-center
        rounded-full hover:cursor-pointer"
        onClick={handleRemoveProduct}
      >
          X
        </button>
    </div>

    // <ul>
    //   <li>{product.description}</li>
    //   <li>{product.price}</li>
    // </ul>
  )
}