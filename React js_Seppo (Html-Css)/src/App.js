import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <div>
        <Header />
        <Home />
        <Footer />
        {/* Content will be rendered based on the routes */}
        <Routes>
          <Route path="/Home" exact element={<Home />} />
          <Route path="/header" exact element={<Header />} />
          <Route path="/footer" exact element={<Footer />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
