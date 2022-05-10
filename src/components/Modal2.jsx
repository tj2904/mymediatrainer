import React, { useState } from "react";
import ReactPlayer from "react-player/lazy";
import { Modal, Button } from "react-bootstrap";

function Modal2() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <div className="videoSelect">
      <div className="container">
        <Modal
          show={show}
          centered="true"
          size="xl"
          fullscreen="true"
          animation="true"
          onHide={handleClose}
          keyboard="true"
        >
          <ReactPlayer
            className="react=player"
            url="http://techslides.com/demos/sample-videos/small.mp4"
            controls="true"
            width="100%"
            height="100%"
          />
        </Modal>

        <div className="row align-items-top my-5">
          <div className="col-lg-12"></div>
          <div className="col-lg-5">
            <h1></h1>
          </div>
        </div>

        <div className="answerSelectionInfo pt-2">
          Please read the possible answers below and consider which one, or ones
          form the best-practice answer to the question posed in the video.
        </div>
        <div className="answerSelection pt-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="option1"
            />
            <label className="form-check-label" for="option1">
              Option 1
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="option2"
            />
            <label className="form-check-label" for="option2">
              Option 2
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="option3"
            />
            <label className="form-check-label" for="option3">
              Option 3
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="option4"
            />
            <label className="form-check-label" for="option4">
              Option 4
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="option5"
            />
            <label className="form-check-label" for="option5">
              Option 5
            </label>
          </div>
          <div className="response-end text-end pb-2">
            <button type="submit" class="btn btn-primary">
              Submit Answer
            </button>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a
              className="page-link"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/VideoSelectResponse">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/VideoSelectResponse">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/VideoSelectResponse">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/VideoSelectResponse">
              4
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/VideoSelectResponse">
              5
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/VideoSelectResponse">
              6
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/VideoSelectResponse">
              7
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/VideoSelectResponse">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Modal2;
