import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./reuseable-components/Header";
import Footer from "./reuseable-components/Footer";
import Homepage from "./components/Homepage";
import "./App.css";
import Schedule from "./components/Schedule";
import Contact from "./components/Contact";
import Music from "./components/Music";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/music" element={<Music />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
