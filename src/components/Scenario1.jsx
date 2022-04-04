import React from "react";
import ReactPlayer from "react-player/lazy";
import { NavLink } from "react-router-dom";

function Scenario1() {
  return (
    <div className="videoSelect">
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
            <h1>Cyber Incident Scenario </h1>
            <p>
              OK, so I’m just going to brief you on what we know right now about
              the situation as it’s all moving quite quickly, to be honest. We
              know that IT have picked up suspicious activity on the network as
              part of a routine audit. They’re saying it looks like data has
              been changed in the primary customer database without
              authorisation and some of it seems to have been exported. Several
              thousand customer records seem to be affected but they’re still
              trying to establish exactly how many or how long this has been
              going on. It could be a couple of weeks before that’s done,
              apparently. The contact centre are reporting customers calling in
              about suspect transactions on their accounts, and have been giving
              them general advice about resetting passwords and so on. Legal are
              working with us on a statement but are clear we need to be careful
              about accepting liability here - it’s not clear if we’re a victim
              of a crime or if this is a bug in our systems.
            </p>
            <p>
              So, for this interview we need you to come across as concerned but
              in control, OK? The key message here is that we’re taking this
              seriously and we’re investigating urgently, and we’ll keep
              customers informed. Don’t let them draw you into speculation. Is
              that OK?
            </p>
            <p>Great, good luck, see you on the other side.</p>
          </div>
        </div>
        <div className="response-end text-end pb-2">
        <NavLink className="nav-link" to="/CyberInterview">
                  Start Interview
                </NavLink>
          </div>
      </div>
    </div>
  );
}

export default Scenario1;
