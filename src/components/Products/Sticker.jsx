import React from "react";
import StickerResults from './StickerResults'


const Sticker = ({ products, onAddToCart }) => {

const colSize = "4"
  return(
           <div className="row py-3">
            {products.map(product => (
              product.categories ? product.categories.map(item => item.slug.includes("sticker") ? 
              <div className={`col-sm-${colSize} mb-5`}>
              <StickerResults 
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

export default Sticker