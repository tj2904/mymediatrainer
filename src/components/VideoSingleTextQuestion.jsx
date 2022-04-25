import React from "react";
import ReactPlayer from "react-player/lazy";
import { NavLink } from "react-router-dom";

function VideoSingleTextQuestion() {
  return (
    <div className="videoSingleText">
      <div className="container">
        <div className="row align-items-top my-5">
          <div className="col-lg-7">
            <div className="player-wrapper">
              <ReactPlayer
                className="react=player"
                url="https://www.dropbox.com/sh/u14d3axzv3a0nol/AAAC8Y4TkuMXZHCsiB0G9alEa/Interview%20-%20clip%204.mov"
                controls="true"
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div className="col-lg-5">
            <h1>Cyber Scenario</h1>
            <p>How would you answer this question? </p>{" "}
            <p>Jot down your response in a short sentence or two. </p>
            <p>
              <strong> Maximum allowed time on this task: 60 seconds</strong>{" "}
            </p>
            <p>
              That’s all very well but doesn’t the fact that this could happen
              suggest that you just aren’t taking your customers’ privacy
              seriously?
            </p>
            <p>
              How would you feel if your personal data was put up for sale on
              the dark web by criminals? I’m assuming you’re not one of the
              customers affected - are you?
            </p>
          </div>
        </div>

        <form className="mt-4 pt-2">
          <label for="questionResponse" className="form-label">
            Enter your written answer below:
          </label>
          <textarea
            rows="3"
            className="form-control mb-2"
            id="questionResponse"
            placeholder="That's a great question thanks. I think that..."
          />
          <div className="response-end text-end pb-2">
            <button type="" className="btn btn-primary">
              Submit Answer
            </button>
          </div>
        </form>

        <div className="response-end text-end pb-4 d-grid gap-2 d-md-flex justify-content-md-end">
          <NavLink className="nav-link btn btn-primary text-light" to="/upload">
            Final Question
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default VideoSingleTextQuestion;
