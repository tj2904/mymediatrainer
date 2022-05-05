import ReactPlayer
 from "react-player";

function Exit() {
  return (
    <div className="videoSingleText">
      <div className="container">
        <div className="row align-items-top my-5">
          <div className="col-lg-12">
            <div className="player-wrapper">
              <ReactPlayer
                className="react=player"
                url="https://www.dropbox.com/sh/u14d3axzv3a0nol/AABMjMR5ezyHF9XTFzZJbyZHa/Interview%20-%20end%20clip.mov"
                controls="true"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
        <div className="row">
            <p> That's the end of the interview, and training session. Your coach will be in touch with you via email shortly.</p>
        </div>
      </div>
    </div>
  );
}

export default Exit;
