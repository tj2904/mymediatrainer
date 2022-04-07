import React from "react";
import ReactPlayer from "react-player/lazy";

import {  uploadBytes, ref} from "firebase/storage"
import {storage } from "../firebase";

import {
  RecordWebcam,
  useRecordWebcam,
  CAMERA_STATUS,
} from "react-record-webcam";

// Create a root reference


const storageRef = ref(storage,  "test-video-upload");

const OPTIONS = {
  filename: "test-filename",
  fileType: "mp4",
  width: 640,
  height: 360,
};

export default function VideoUpload() {
  const recordWebcam = useRecordWebcam(OPTIONS);
  const getRecordingFileHooks = async () => {
    const blob = await recordWebcam.getRecording();
    console.log({ blob });
    
    //upload to firebase
    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, blob).then((snapshot) => {
      console.log("Uploaded a blob!");
    });
  };

  const getRecordingFileRenderProp = async (blob) => {
    console.log({ blob });
  };

  return (
    <div className="videoResponse">
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
            <h1>Final Question</h1>
            <p>
              We are picking up from social media that a former employee has
              just said this was “a situation waiting to happen” and that he
              shared his concerns with managers but was ignored.
            </p>
            <p>Can you tell our viewers why that was?</p>
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
  );
}

// import React from "react";
// import ReactPlayer from "react-player/lazy";
// import VideoRecorder from "react-video-recorder";
// import { useRecordWebcam } from "react-record-webcam";

// const OPTIONS = {
//   filename: "test-filename",
//   fileType: "mp4",
//   width: 1920,
//   height: 1080,
// };

// function VideoUpload() {
//   const recordWebcam = useRecordWebcam(OPTIONS);
//   const getRecordingFileHooks = async () => {
//     const blob = await recordWebcam.getRecording();
//     console.log({ blob });
//   };

//   const getRecordingFileRenderProp = async (blob) => {
//     console.log({ blob });
//   };

//   return (
//     <div className="VideoUploadPage">
//       <div className="container">
//         <div className="row align-items-top my-5">
//           <div className="col-lg-7">
//             <div className="player-wrapper">
//               <ReactPlayer
//                 className="react=player"
//                 url="https://www.dropbox.com/sh/u14d3axzv3a0nol/AABogyyUQiMibxzYpBHavUsma/Interview%20-%20clip%205.mov"
//                 controls={true}
//                 width="100%"
//                 height="100%"
//               />
//             </div>
//           </div>

//           <div className="col-lg-5">
//             <h1>Final Question </h1>
//             We are picking up from social media that a former employee has just
//             said this was “a situation waiting to happen” and that he shared his
//             concerns with managers but was ignored. Can you tell our viewers why
//             that was?
//           </div>
//         </div>
//         <div className="row align-items-top my-5">
//          <div className="col-lg-5">
//             <h1>Record your answer</h1>
//             Using the recorder, please record your response to the question that is no longer thatn 30 seconds.
//           </div>
//         <div className="col-lg-7 pb-4 ">
//           <VideoRecorder
//             onRecordingComplete={(videoBlob) => {
//               // Do something with the video...
//               console.log("videoBlob", videoBlob);
//             }}
//           />
//         </div>
//       </div>
//       </div>
//           </div>
//   );
// }

// export default VideoUpload;
