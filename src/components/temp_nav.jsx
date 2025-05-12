import { Link } from 'react-router-dom'
import CartNavEl from './CartNavEl'

export default function Navbar() {
  
  return(  
    <header className="bg-blue-100">
      <div id="promo-banner" className="bg-blue-200">
        <p className='max-w-[20rem] mx-auto text-sm italic font-kyiv-sans animate-weight-color-pulse py-1'>
          2 for 1 summer sale now on -
          <Link to="/catalogue">shop here</Link>
        </p>
      </div>
      <div id="content" className="flex items-center justify-between py-4 mx-6">
        <Link to="/">
          <h1 id="logo-type" className="font-kyiv-sans font-[650] text-2xl">E-comm Store</h1>
        </Link>
        <CartNavEl />
      </div>
      <hr className='border-blue-200'></hr>
    </header>
  )
}