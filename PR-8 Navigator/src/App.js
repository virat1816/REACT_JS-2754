import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Product from './component/Product';

function App() {
  return (
    <div>
    <Navbar />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" exact element={<About />} />
      <Route path="/product" exact element={<Product />} />
    </Routes>
  </div>
  );
}

export default App;
