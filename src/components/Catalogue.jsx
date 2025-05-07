import ProductCard from './ProductCard'

export default function Catalogue({ products = []}) {
  return(
    <div className='flex flex-wrap gap-4 mt-10'>
      <p>Product catalogue goes here</p>
      
      { products.map((product) => {
          return(
            <ProductCard key={product.id} product={product} />
          )
        })
      }
    </div>
  )
};