import React from "react";
import MugResults from './MugResults'


const Mug = ({ products, onAddToCart }) => {

 const colSize = "4"
  return(
      <div className="row py-3">
        {products.map(product => (
          product.categories ? product.categories.map(item => item.slug.includes("mug") ? 
          <div className={`col-sm-${colSize} mb-5`}>
          <MugResults 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart}
          /> 
          </div>
          : console.log("yok")) 
          : console.log("yok")
        ))}
      </div>
  )
}

export default Mug