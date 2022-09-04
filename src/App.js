import "./App.css";
import Data from "./components/back/data/Data";
import Header from "./components/front/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/front/products/Products";
import Cart from "./components/front/cart/Cart";
import Singup from "./components/signup/Singup";
import { useState } from "react";
function App() {
  const { productItems } = Data;
  const [cartItem, setCartItem] = useState([]);

  const handleAddProduct = (product) => {
    const existingProduct = cartItem.find((item) => item.id === product.id);
    if (existingProduct) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...existingProduct, quantity: existingProduct.quantity + 1 }
            : item
        )
      );
    }
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Products
                productItems={productItems}
                handleAddProduct={handleAddProduct}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart cartItem={cartItem} handleAddProduct={handleAddProduct} />
            }
          />
          <Route path="/signup" element={<Singup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
