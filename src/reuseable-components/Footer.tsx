import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footer">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="foot-menu">
              <ul>
                <li>
                  <Link to="">Privacy</Link>
                </li>
                <li>
                  <Link to="">Terms</Link>
                </li>
              </ul>
            </div>
            <div className="copyright">
              <p>© 2026 DON BARRY. THE ORCHESTRATED SILENCE.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
