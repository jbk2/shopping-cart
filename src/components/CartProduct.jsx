export default function CartProduct({item}) {
  const product = item.product;

  return(
    <ul>
      <li>{product.description}</li>
      <li>{product.price}</li>
    </ul>
  )
}