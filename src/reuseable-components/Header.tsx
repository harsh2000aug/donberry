import React, { useState } from "react";
import logo from "../images/logo.png";
import "./HeaderFooter.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Biography", path: "/" },
    { name: "Schedule", path: "/schedule" },
    { name: "Music", path: "/music" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo" onClick={() => navigate("/")}>
            <img src={logo} alt="" />
          </div>
          <div className={`hf-nav-menu ${menuOpen ? "show-menu" : ""}`}>
            <ul>
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className={location.pathname === item.path ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="book-now">
            <button>Book Now</button>
          </div>
          <div
            className={`hf-menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
