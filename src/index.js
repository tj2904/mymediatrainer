import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  // add additional components to this block as needed
  // add route inside the Routes block even if it isn't link in the NavBar
  Navigation,
  Footer,
  Scenario1,
  VideoSingleTextQuestion,
  VideoSelectResponse,
  VideoUpload,
  CyberInterview,
  Exit,
  Modal2
} from "./components";

ReactDOM.render(
  <Router>
    <div className="page-container">
      <div className="content-wrap">
        <Navigation />
        <Routes>
          <Route path="/" element={<Scenario1 />} />
          <Route path="/Scenario1" element={<Scenario1 />} />
          <Route
            path="/VideoSingleTextQuestion"
            element={<VideoSingleTextQuestion />}
          />
          <Route
            path="/VideoSelectResponse"
            element={<VideoSelectResponse />}
          />
          <Route path="/CyberInterview" element={<CyberInterview />} />
          <Route path="/upload" element={<VideoUpload />} />
          <Route path="/exit" element={<Exit />} />
          <Route path="/Modal2" element={<Modal2 />} />
        </Routes>
        <Footer />
      </div>
    </div>
  </Router>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
