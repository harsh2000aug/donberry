import React from "react";
import donberry from "../images/landing-page.png";
const Homepage = () => {
  return (
    <>
      <section className="gap">
        <div className="container">
          <div className="landing-area">
            <div className="left-side">
              <img src={donberry} alt="" />
            </div>
            <div className="right-side">
              <p>MASTER OF RESONANCE</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
