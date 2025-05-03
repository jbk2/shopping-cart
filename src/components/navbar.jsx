import Cart from './cart'

export default function Navbar() {
  
  return(  
    <div>
      <div id="promo-banner" className="bg-blue-200">Promo banner</div>
      <div id="content" className="flex">
        <h1 id="logo-type" className="text-4xl">E-comm Store</h1>
        <Cart />
      </div>
    </div>
  )
}