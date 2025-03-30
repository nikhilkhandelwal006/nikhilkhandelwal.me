import React from "react";
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home/Home";
import About from "./pages/About/About"
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Projects from "./pages/Projects/Projects";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div className="app">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
