import React from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = ({
  cart,
  handleUpdateQuantity,
  handleRemoveItem,
  handleEmptyCart,
  size
}) => {
  const EmptyCart = () => {
    return (
      <>
        <h4>You have no items in Your Shopping Cart</h4>
        <Link to="/">Go back and Add Some Items</Link>
      </>
    );
  };

  const FilledCart = () => {
    return (
      <div className="row">
        <div className="col-sm-8">
          {cart.line_items.map(item => (
            <CartItem
              item={item}
              key={item.id}
              handleUpdateQuantity={handleUpdateQuantity}
              handleRemoveItem={handleRemoveItem}
            />
          ))}
        </div>
        <div className="col-sm-4 mt-5 d-flex flex-column">
          <div className="mb-5">
            <span className="fw-bold total-price p-2 text-white border rounded">
              Total Price:{" "}
              <span className="text-dark">
                {cart.subtotal.formatted_with_symbol}
              </span>
            </span>
          </div>

          <div className="mb-2">
            <button
              className="basket-button p-2 fw-bold bg-danger"
              onClick={handleEmptyCart}
            >
              Empty Cart
            </button>
          </div>

          <Link to="/checkout">
            <button className="p-2 text-uppercase fw-bold basket-button">
              Checkout
            </button>
          </Link>
        </div>
        <hr />
      </div>
    );
  };

  if (!cart.line_items) return "Loading...";

  return (
    <div className="col-sm-12">
      <div className="row">
        <h1>Your Shopping Cart</h1>
        {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
      </div>
    </div>
  );
};

export default Cart;
