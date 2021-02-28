import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Link } from "react-router-dom";

const style = {
  width: "18rem"
};

const FavoritesResults = ({ product, onAddToCart }) => {
  const { favorites } = useContext(GlobalContext);
  const { removeFromFavorites } = useContext(GlobalContext);

  return (
    <div className="row">
      <h4 className="text-center">Favorites</h4>
      {favorites.length > 0 ? (
        favorites.map(product => (
          <div className="card mx-auto mb-5 mt-3 card-box" style={style}>
            <Link to={`/favorites/${product.id}`}>
              <img
                height="290"
                src={product.media.source}
                className="card-img-top px-0"
                alt="..."
              />
            </Link>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <div className="d-flex justify-content-between mt-5">
                <button
                  className="w-100 basket-button p-2 me-4 text-uppercase"
                  onClick={() => onAddToCart(product.id, 1)}
                >
                  add to cart
                </button>
                <p className="fw-bold my-auto p-2 text-big fs-5 price-area">
                  {product.price.formatted_with_symbol}
                </p>
              </div>
              <button
                className="button"
                onClick={() => removeFromFavorites(product.id)}
              >
                <i className="fas fa-times" />
              </button>
            </div>
          </div>
        ))
      ) : (
        <h2 className="text-center mt-5">No favorites</h2>
      )}
    </div>
  );
};

export default FavoritesResults;
