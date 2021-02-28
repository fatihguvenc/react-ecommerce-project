import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Link } from "react-router-dom";

const style = {
  width: "18rem"
};

const SearchResults = ({ product, onAddToCart }) => {
  const { addToFavorites, favorites } = useContext(GlobalContext);

  let storedFavorites = favorites.find(
    findFavorites => findFavorites.id === product.id
  );
  const favoritesDisabled = storedFavorites ? true : false;

  return (
    <div className="card mx-auto card-box" style={style}>
      <Link to={`/search/${product.id}`}>
        <img
          height="290"
          src={product.media.source}
          className="card-img-top"
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
          onClick={() => addToFavorites(product)}
          disabled={favoritesDisabled}
        >
          <i className="far fa-heart" />
        </button>
      </div>
    </div>
  );
};

export default SearchResults;
