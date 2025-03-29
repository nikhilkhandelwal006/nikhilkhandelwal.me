import React from "react";
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home/Home";
import About from "./pages/About/About"
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="app">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
