import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <i className="fas fa-chess-queen"></i>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span>
              <i className="fas fa-bars" style={{ color: "#fff" }}></i>
            </span>
          </button>

          <div
            class={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link " href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/about">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/portfolio">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
