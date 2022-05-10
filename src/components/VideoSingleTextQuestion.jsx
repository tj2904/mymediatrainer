import React, { useState } from "react";
import ReactPlayer from "react-player/lazy";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function VideoSingleTextQuestion() {
  const navigate = useNavigate();

  // https://www.geeksforgeeks.org/how-to-use-firestore-database-in-reactjs/
  const [writtenResponse, setWrittenResponse] = useState(
    "No response provided"
  );

  const submit = (e) => {
    e.preventDefault();
    addDoc(collection(db, "clientResponses"), {
      scenario: "CyberScenario-WritenResponse",
      answer: writtenResponse,
      // https://stackoverflow.com/questions/32192922/how-do-i-get-a-date-in-yyyy-mm-dd-format
      date: new Date().toLocaleString(),
    })
      .then((docRef) => {
        alert(
          "Your response has been successfully submitted for review by a trainer."
        );
        navigate("/upload");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <div className="videoSingleText">
      <div className="container">
        <div className="row align-items-top my-5">
          <div className="col-lg-12">
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
        </div>

        <form className="mt-4 pt-2">
          <label for="questionResponse" className="form-label">
            Enter your written answer below:
          </label>
          <textarea
            onChange={(e) => {
              setWrittenResponse(e.target.value);
            }}
            rows="3"
            className="form-control mb-2"
            id="questionResponse"
            placeholder="That's a great question thanks. I think that..."
          />
          <div className="response-end text-end pb-2">
            <button onClick={submit} type="submit" className="btn btn-primary">
              Submit Answer and Take Next Question
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VideoSingleTextQuestion;
