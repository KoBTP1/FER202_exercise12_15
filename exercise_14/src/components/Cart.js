import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function Cart() {
  const { cartItems, removeFromCart, clearCart, cartCount, totalValue } =
    useContext(CartContext);

  return (
    <div className="bg-light p-4 rounded border shadow-sm">
      <h4>Your Cart</h4>
      <p className="mb-1">
        Total Items: <strong>{cartCount}</strong>
      </p>
      <p className="mb-3">
        Total Value: <strong className="text-danger">${totalValue}</strong>
      </p>

      {cartItems.length === 0 ? (
        <p className="text-muted">Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <span className="fw-semibold">{item.name}</span>
                  <span className="text-muted ms-2">(${item.price})</span>
                </div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button className="btn btn-warning w-100" onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
