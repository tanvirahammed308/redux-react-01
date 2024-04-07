import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products,setProducts]=useState([]);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setProducts(data)
    })
  },[])
  return (
    <div>
      <h3>Total products:{products.length}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {
          products.map((product)=><Product key={product.id} product={product}></Product>)
        }
      </div>
    </div>
  )
}

export default Products