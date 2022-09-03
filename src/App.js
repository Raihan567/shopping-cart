import "./App.css";
import Data from "./components/back/data/Data";
import Header from "./components/front/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const { productItem } = Data;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Header />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
