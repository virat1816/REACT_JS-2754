import { useState } from "react";
import { Route, Routes, routes  } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  const [value, setvalue] = useState({});

  const handle = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value });
  };
  console.log(value);
  return(
    <div>
      <h1>{}</h1>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/contact" exact element={<Contact/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;