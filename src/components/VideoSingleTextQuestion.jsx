import React from "react";
import ReactPlayer from "react-player/lazy";

function VideoSingleTextQuestion() {
  return (
    <div className="videoSingleText">
    <div className="container">
      <div className="row align-items-top my-5">
        <div className="col-lg-7">
            <div className="player-wrapper">
              <ReactPlayer
                className="react=player"
                url="http://techslides.com/demos/sample-videos/small.mp4"
                controls="true"
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div className="col-lg-5">
            <h1>Scenario Title</h1>
            <p>How would you answer this question? </p> <p>Jot down your response in a short sentence or two. </p><p><strong> Maximum allowed time on this task: 60 seconds</strong> </p>
          </div>
        </div>

      
        <form className="mt-4 pt-2">
          <label for="formGroupExampleInput" className="form-label">
            Enter your written answer below:
          </label>
          <textarea
            rows="3"
            className="form-control mb-2"
            id="formGroupExampleInput"
            placeholder="That's a great question thanks. I think that..."
          />
          <div className="response-end text-end pb-2">
          <button type="submit" className="btn btn-primary">
            Submit Answer
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VideoSingleTextQuestion;
