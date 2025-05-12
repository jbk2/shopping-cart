import Navbar from "../components/Navbar.jsx";
import Catalogue from "../components/Catalogue";
import { useState, useEffect } from "react";

export default function CataloguePage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then((response) => {
        if(response.status >= 400) {
          throw new Error('server error')
        }
        return response.json()
      })
      .then(response => setProducts(response))
      .catch((error) => setError(error))
      .finally(() => { 
        setLoading(false)
      })
    }, []);

    useEffect(() => {
      console.log("Products updated:", products);
    }, [products]);
  

  return(
    <>
      <Navbar />
      <Catalogue products={products}/>
    </>
  )
}