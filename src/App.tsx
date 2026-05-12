import React from "react";
import Header from "./reuseable-components/Header";
import "./App.css";
import Footer from "./reuseable-components/Footer";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>{/* <Route path="/" element={<Homepage />} /> */}</Routes>
      <Footer />
    </div>
  );
}

export default App;
