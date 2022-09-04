import React from "react";
import "./Product.css";
const Products = ({ productItems, handleAddProduct }) => {
 
  return (
    <div className="product">
      {productItems.map((productItem) => (
        <div className="card">
          <div key={productItem.id} className="img-grid">
            <img src={productItem.image} alt={productItem.name} />
          </div>
          <div className="title-text">
            <h3>{productItem.name}</h3>
          </div>
          <div className="price-text">
            <p>{productItem.price} BDT</p>
          </div>
          <div className="add-to-cart-btn">
            <button onClick={()=>handleAddProduct(productItem)}>Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
