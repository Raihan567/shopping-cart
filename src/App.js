import "./App.css";
import Data from "./components/back/data/Data";
import Header from "./components/front/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/front/products/Products";
function App() {
  const { productItems } = Data;
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="products"
            element={<Products productItems={productItems} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
