import React from "react";
import "./Loader.css";
const Loader = () => {
  return (
    <div className="music-loader-main">
      <div className="music-loader">
        <div className="ring ring1"></div>
        <div className="ring ring2"></div>
        <div className="music-icon">♪</div>
        <span className="note note1">♫</span>
        <span className="note note2">♪</span>
        <span className="note note3">♬</span>
        <span className="note note4">♫</span>
      </div>
      <h2>Loading Upcoming Events...</h2>
    </div>
  );
};

export default Loader;
