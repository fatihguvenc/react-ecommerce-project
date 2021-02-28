import React from "react";
import { useParams, Link } from "react-router-dom";

const FavoritesDetails = ({ products, onAddToCart }) => {
  const { favoritesID } = useParams();

  return (
    <div>
      {products
        .filter(item => item.id === favoritesID)
        .map(item => (
          <div className="row">
            <div className="col-12 mt-2">
              <Link className="back-arrow" to="/">
                <i class="fas fa-arrow-left" />
                <span>Back</span>
              </Link>
            </div>
            <div className="col-sm-6 mt-5">
              <img className="w-100 rounded" src={item.media.source} alt="" />
            </div>
            <div className="col-sm-6 mt-5 d-flex flex-column px-5">
              <h4 className="fw-bold ">{item.name}</h4>
              <div className="star d-flex me-2 mt-2">
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <h6 className="">(5,148)</h6>
              </div>
              <div className="d-flex mt-5">
                <div className="size p-2 me-3">XS</div>
                <div className="size p-2 me-3">S</div>
                <div className="size p-2 me-3">M</div>
                <div className="size p-2 me-3">L</div>
                <div className="size p-2 me-3">XL</div>
              </div>
              <div className="d-flex mt-5 align-items-center">
                <h6 className="fw-bold fs-5 m-0 me-5 price-area py-2 px-3">
                  {item.price.formatted_with_symbol}
                </h6>
                <button
                  className="cart-button fw-bold text-uppercase border-0 px-5 py-2 text-white"
                  onClick={() => onAddToCart(item.id, 1)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <hr className="mt-5" />
            <div className="col-12 mt-4 ">
              <div
                className="card-text p-2"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default FavoritesDetails;
