import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import "./video.css";
import { uploadBytes, ref } from "firebase/storage";
import { storage } from "../firebase";
import { useRecordWebcam, CAMERA_STATUS } from "react-record-webcam";
import { Modal } from "react-bootstrap";

// adapted from https://codesandbox.io/s/xm6fp

// Append date (as a number) to the file name for uniquness
const OPTIONS = {
  filename: "cyberScenarioResponse-" + Date.now(),
  fileType: "mp4",
  width: 640,
  height: 360,
};

// Create a root reference
const storageRef = ref(storage, OPTIONS.filename);

export default function VideoUpload() {
  // TODO : add progress info on upload

  const navigate = useNavigate();
  const recordWebcam = useRecordWebcam(OPTIONS);
  const getRecordingFileHooks = async () => {
    const blob = await recordWebcam.getRecording();
    console.log({ blob });
    //upload to firebase
    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, blob).then((snapshot) => {
      console.log("Uploaded a blob!");
      //Tell the user it has been recieved
      alert("Your video has been sucessfully submitted!");
      navigate("/exit");
    });
  };


  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  return (
    <div className="videoResponse">
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
                url="https://www.dropbox.com/sh/u14d3axzv3a0nol/AABogyyUQiMibxzYpBHavUsma/Interview%20-%20clip%205.mov"
                controls="true"
                width="100%"
                height="100%"
                playing="true"
              />

</Modal>

        <div className="row align-items-top my-5">
          <div className="col-lg-12">
            <div className="player-wrapper">

            </div>
          </div>
        </div>
        <div className="row align-items-top my-5">
          <div className="col-lg-5">
            <h2>Record your answer</h2>
            <p>
              Open up and grant access to your camera. When ready start
              recording and record your response. The video should be less than
              30 seconds long.
            </p>
            <p>When completed click upload for Evaluation.</p>
            {/* <p>Camera status: {recordWebcam.status}</p> */}
          </div>
          <div className="col-lg-7">
            <div className="player-wrapper">
              {/* // TODO: These buttons could be conditionally rendered */}
              <button
                className="btn btn-primary p-1 m-1"
                disabled={
                  recordWebcam.status === CAMERA_STATUS.OPEN ||
                  recordWebcam.status === CAMERA_STATUS.RECORDING ||
                  recordWebcam.status === CAMERA_STATUS.PREVIEW
                }
                onClick={recordWebcam.open}
              >
                Open camera
              </button>
              <button
                className="btn btn-primary p-1 m-1"
                disabled={
                  recordWebcam.status === CAMERA_STATUS.CLOSED ||
                  recordWebcam.status === CAMERA_STATUS.PREVIEW
                }
                onClick={recordWebcam.close}
              >
                Close camera
              </button>
              <button
                className="btn btn-primary p-1 m-1"
                disabled={
                  recordWebcam.status === CAMERA_STATUS.CLOSED ||
                  recordWebcam.status === CAMERA_STATUS.RECORDING ||
                  recordWebcam.status === CAMERA_STATUS.PREVIEW
                }
                onClick={recordWebcam.start}
              >
                Start
              </button>
              <button
                className="btn btn-primary p-1 m-1"
                disabled={recordWebcam.status !== CAMERA_STATUS.RECORDING}
                onClick={recordWebcam.stop}
              >
                Stop
              </button>
              <button
                className="btn btn-primary p-1 m-1"
                disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
                onClick={recordWebcam.retake}
              >
                Retake
              </button>
              <button
                className="btn btn-primary p-1 m-1"
                disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
                onClick={getRecordingFileHooks}
              >
                Upload for Evaluation
              </button>
              {/* {uploadProgress} % */}
              <video
                ref={recordWebcam.webcamRef}
                style={{
                  display: `${
                    recordWebcam.status === CAMERA_STATUS.OPEN ||
                    recordWebcam.status === CAMERA_STATUS.RECORDING
                      ? "block"
                      : "none"
                  }`,
                }}
                autoPlay
                muted
              />
              <video
                ref={recordWebcam.previewRef}
                style={{
                  display: `${
                    recordWebcam.status === CAMERA_STATUS.PREVIEW
                      ? "block"
                      : "none"
                  }`,
                }}
                controls
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
