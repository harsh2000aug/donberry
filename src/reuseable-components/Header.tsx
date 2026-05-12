import React, { useState } from "react";
import logo from "../images/logo.png";
import "./HeaderFooter.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState("Biography");

  const menuItems = [
    { name: "Biography", path: "/" },
    { name: "Schedule", path: "/schedule" },
    { name: "Music", path: "/music" },
    { name: "Video", path: "/video" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="nav-menu">
              <ul>
                {menuItems.map((item) => (
                  <li
                    key={item.name}
                    className={active === item.name ? "active" : ""}
                    onClick={() => setActive(item.name)}
                  >
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="book-now">
              <button>Book Now</button>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
