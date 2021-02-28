import React from "react";
import FavoritesResults from './FavoritesResults'


const Favorites = ({ product, onAddToCart }) => {

  return (
    <div className="row">
      <FavoritesResults 
        product={product} 
        onAddToCart={onAddToCart}
      />
    </div>
  )
}

export default Favorites

  