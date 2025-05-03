import Cart from './Cart'

export default function Navbar() {
  
  return(  
    <header className="bg-blue-100">
      <div id="promo-banner" className="bg-blue-200">
        <p className='max-w-[20rem] mx-auto text-sm italic font-light py-1'>
          2 for the price of 1 summer sale - now on
        </p>
      </div>
      <div id="content" className="flex py-4">
        <h1 id="logo-type" className="font-kyiv-sans font-[850] text-4xl">E-comm Store</h1>
        <Cart />
      </div>
      <hr className='border-blue-200'></hr>
    </header>
  )
}