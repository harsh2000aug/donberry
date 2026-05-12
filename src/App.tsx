import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./reuseable-components/Header";
import Footer from "./reuseable-components/Footer";
import Homepage from "./components/Homepage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
