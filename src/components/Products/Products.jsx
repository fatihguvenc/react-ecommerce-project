import React, { useState } from "react";
import ProductResults from './ProductResults'


const Products = ({ products, onAddToCart }) => {

 const [load, setLoad] = useState(9)
 const loadMore = () => {
      setLoad(value => value + 9)
    }

 const colSize = "4"

 const cardList = products.slice(0, load).map(product => (
    <div className={`col-sm-${colSize} mb-5`}>
      <ProductResults 
        key={product.id} 
        product={product} 
        onAddToCart={onAddToCart}
      />
    </div>
  ))

  return (
    <main className="">
       <div className="row py-3">
            {cardList}
            <button 
            className="load-more mx-auto" 
            onClick={loadMore}
           >
            LOAD MORE
           </button>
        </div>

    </main>
  );
};

export default Products;

