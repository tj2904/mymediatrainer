import React from "react";
import ReactPlayer from "react-player/lazy";

function VideoSelectResponse() {
  return (
    <div className="container pt-4">
      <div className="VideoSingleTextQuestion m-4">
        <div class="row">
          <div class="col">
            {" "}
            <ReactPlayer
              url="http://techslides.com/demos/sample-videos/small.mp4"
              controls="true"
            />
          </div>
          <div class="col">
            <h3>Scenario Title</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            bibendum est in felis bibendum imperdiet. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Suspendisse eu libero eleifend, efficitur magna tempus,
            facilisis erat. Donec consectetur, odio non dapibus vestibulum, nibh
            arcu vulputate magna, semper eleifend elit nunc vitae lacus.
          </div>
        </div>

        <div className="answerSelectionInfo pt-2">
          Please read the possible answers below and consider which one, or ones
          form the best-practice answer to the question posed in the video.
        </div>
        <div className="answerSelection pt-2">
          <div class="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="option1"
            />
            <label class="form-check-label" for="option1">
              Option 1
            </label>
          </div>
          <div class="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="option2"
            />
            <label class="form-check-label" for="option2">
              Option 2
            </label>
          </div>
          <div class="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="option3"
            />
            <label class="form-check-label" for="option3">
              Option 3
            </label>
          </div>
          <div class="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="option4"
            />
            <label class="form-check-label" for="option4">
              Option 4
            </label>
          </div>
          <div class="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="option5"
            />
            <label class="form-check-label" for="option5">
              Option 5
            </label>
          </div>
          <div className="response-end text-end">
          <button type="submit" class="btn btn-primary">
            Submit Answer
          </button>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="/VideoSelectResponse">1</a></li>
    <li class="page-item"><a class="page-link" href="/VideoSelectResponse">2</a></li>
    <li class="page-item"><a class="page-link" href="/VideoSelectResponse">3</a></li>
    <li class="page-item"><a class="page-link" href="/VideoSelectResponse">4</a></li>
    <li class="page-item"><a class="page-link" href="/VideoSelectResponse">5</a></li>
    <li class="page-item"><a class="page-link" href="/VideoSelectResponse">6</a></li>
    <li class="page-item"><a class="page-link" href="/VideoSelectResponse">7</a></li>  
    <li class="page-item">
      <a class="page-link" href="/VideoSelectResponse">Next</a>
    </li>
  </ul>
</nav>
    </div>
  );
}

export default VideoSelectResponse;