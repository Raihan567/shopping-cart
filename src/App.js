import "./App.css";
import Data from "./components/back/data/Data";
import Header from "./components/front/header/Header";
function App() {
  const { productItem } = Data;
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
