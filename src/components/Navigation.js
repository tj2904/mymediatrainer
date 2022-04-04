import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
          <i className="bi bi-camera-reels-fill d-inline-block align-text-middle"></i>
          &nbsp;&nbsp;My Media Trainer
          </NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
          <div className="collapse navbar-collapse" id="navbar">
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
                <NavLink className="nav-link" to="/Scenario1">
                Cyber Interview
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