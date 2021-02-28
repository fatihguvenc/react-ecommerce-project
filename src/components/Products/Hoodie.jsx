import React from "react";
import HoodieResults from './HoodieResults'


const Hoodie = ({ products, onAddToCart }) => {

const colSize = "4"
  return(
           <div className="row py-3">
            {products.map(product => (
              product.categories ? product.categories.map(item => item.slug.includes("hoodie") ? 
              <div className={`col-sm-${colSize} mb-5`}>
              <HoodieResults 
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

export default Hoodie