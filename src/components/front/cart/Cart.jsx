import React from "react";

const Cart = ({ cartItem }) => {
  return (
    <div>
      <div className="carts-item">
        <div className="cart-items-header">
          <h1>Cart Items:</h1>
        </div>
        {cartItem.length === 0 && (
          <div className="cart-items-empty">No items are added </div>
        )}
        {cartItem.map((item) => (
          <div key={item.id} className="cart-item-list">
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
