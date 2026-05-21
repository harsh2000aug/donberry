import React from "react";
import donberry from "../images/landing-page.png";
import guitar from "../images/guitar.png";
import { FaPlay } from "react-icons/fa";
import "./style.css";

const Homepage = () => {
  const PlayBtn: any = FaPlay;

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
            <h2>Latest Work</h2>
            <p>FEATURED COMPOSITION • 2024</p>
          </div>
          <section className="mc-section">
            <div className="mc-card">
              <div className="mc-image-area">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/UWnskuxP6T4"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mc-content">
                <h2>Ebony Curtains</h2>
                <p>
                  A solo bass odyssey recorded in a deconsecrated chapel in
                  Lyon. This piece explores natural reverb and the physical
                  limits of the instrument.
                </p>
                <div className="mc-tags">
                  <span>Solo Performance</span>
                  <span>Experimental Jazz</span>
                </div>
                <button className="mc-preview-btn">
                  <div className="mc-play-icon">
                    <PlayBtn />
                  </div>
                  <span>LISTEN TO PREVIEW</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="gap st-section">
        <div className="container">
          <div className="landing-area">
            <div className="right-side col-50">
              <span>SPECIAL CONTRIBUTION</span>
              <h2>Master of the Low End</h2>
              <p>
                Known for his impeccable timing and rich, woody tone, Don Barry
                has been the foundational heartbeat for some of the most
                influential jazz recordings of the decade. Explore the albums
                where his bass performance takes center stage.
              </p>
            </div>
            <div className="left-side col-50">
              <img src={guitar} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
