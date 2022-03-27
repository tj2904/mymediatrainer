import React from "react";
import ReactPlayer from "react-player/lazy";

function VideoSingleTextQuestion() {
  return (
    <div className="container pt-4">
      <div className="VideoSingleTextQuestion m-4">
        <div className="row">
          <div className="col-8 col-md-8 col-sm-12">
            {" "}
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
          <div className="col-4 col-md-4 col-sm-12">
            <h3>Scenario Title</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            bibendum est in felis bibendum imperdiet. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Suspendisse eu libero eleifend, efficitur magna tempus,
            facilisis erat. Donec consectetur, odio non dapibus vestibulum, nibh
            arcu vulputate magna, semper eleifend elit nunc vitae lacus.
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
          <div className="response-end text-end">
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
