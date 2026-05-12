import React from "react";
import donberry from "../images/landing-page.png";
import "./style.css";
const Homepage = () => {
  return (
    <>
      <section className="gap">
        <div className="container">
          <div className="landing-area">
            <div className="left-side col-50">
              <img src={donberry} alt="" />
            </div>
            <div className="right-side col-50">
              <span>MASTER OF RESONANCE</span>
              <h1>
                The <br /> Sound of <br /> Shadow
              </h1>
              <p>
                Don Barry redefined the role of the acoustic bass in modern
                jazz. His approach focuses on the resonance of wood and the
                gravity of timing, creating a foundation that breathes with the
                ensemble.
              </p>
              <div className="explore-wrapper">
                <div className="line"></div>
                <button className="explore-btn">EXPLORE MORE</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gap latest-work">
        <div className="container">
          <div className="common-text">
            <h1>Latest Work</h1>
            <p>FEATURED COMPOSITION • 2024</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
