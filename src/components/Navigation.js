import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
          <i class="bi bi-camera-reels-fill d-inline-block align-text-middle"></i>
          &nbsp;&nbsp;My Media Trainer
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/VideoSingleTextQuestion">
                  Video - Text
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/VideoSelectResponse">
                  Video - Select
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;