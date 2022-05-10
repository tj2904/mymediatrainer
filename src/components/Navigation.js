import React from "react";
import { NavLink } from "react-router-dom";

// This is the top nav bar.
// Use a NavLink component with the to="" parameter to add a link to a new page
// All other HTML is bootstrap / standard stuff

// NOTE - for links to work the path needs to be added here, in index.js in the components folder and
// the route needs to be in index.js in the root folder

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <i className="bi bi-camera-reels-fill d-inline-block align-text-middle"></i>
            &nbsp;&nbsp;My Media Trainer
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/Scenario1">
                  Cyber Scenario
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
