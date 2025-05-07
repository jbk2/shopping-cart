import FishMat1 from "../assets/images/FishMat1.jpg";
import FishMat2 from "../assets/images/FishMat2.webp";
import FishMat3 from "../assets/images/FishMat3.jpg";

export default function LandingContent() {
  return(
    <div className="m-6 mt-10 flex gap-8 flex-wrap">
      <h1 id="banner-headline" className="text-7xl/snug font-kyiv-sans
        font-[700] w-2xl self-center">
        Beautiful kitchen table products
      </h1>
      <a href="">
        <img
          src={FishMat1}
          alt=""
          className="min-w-m max-w-lg"
        />
      </a>
      <img
        src={FishMat2}
        alt=""
        className="min-w-m max-w-lg"
      />
      <img
        src={FishMat3}
        alt=""
        className="min-w-m max-w-lg"
      />
    </div>
  )
}