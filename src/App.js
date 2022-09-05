import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useThemeHook } from './globalComponents/ThemeProvider';
import Header from './components/Header';

//Pages
// import Home from './Pages/Home';
// import Cart from './Pages/Cart';


function App() {
  const [theme] = useThemeHook();
  return (
    <main className={theme? 'bg-black': 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto'}}>
      <Header/>
    </main>
  );
}

export default App;