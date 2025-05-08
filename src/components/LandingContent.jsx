import { Link } from 'react-router-dom';
import stationary1 from "../assets/images/Hobo1.webp";
import stationary2 from "../assets/images/Hobo2.jpg";
import stationary3 from "../assets/images/Hobo3.jpg";

export default function LandingContent() {
  return(
    <div className="m-6 mt-10 flex gap-8 flex-wrap">
      <h1 id="banner-headline" className="text-7xl/snug font-kyiv-sans
        font-[700] w-3xl self-center">
        Beautiful stationary products
      </h1>
      <Link to="/catalogue">
        <img
          src={stationary1}
          alt=""
          className="min-w-m max-w-lg"
        />
      </Link>
      <Link to="/catalogue">
        <img
          src={stationary2}
          alt=""
          className="min-w-m max-w-lg"
        />
      </Link>
      <Link to="/catalogue">
        <img
          src={stationary3}
          alt=""
          className="min-w-m max-w-lg"
        />
      </Link>
    </div>
  )
}