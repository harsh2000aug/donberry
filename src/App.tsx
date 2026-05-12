import React from "react";
import logo from "./logo.svg";
import "./App.css";

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
