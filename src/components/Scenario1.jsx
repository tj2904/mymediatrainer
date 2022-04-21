import React from "react";
import { NavLink } from "react-router-dom";
import PressOfficerBriefing from "../PressOfficerBriefing.png";

// An intro page that has a link to the quiz page as a new component
// This could be a template for other scenarios with different quizes link to

function Scenario1() {
  return (
    <div className="container">
      <div className="row align-items-top my-5">
        <div className="col-lg-7">
          <img
            src={PressOfficerBriefing}
            className="img-fluid"
            alt="Press Officer Briefing"
          />
        </div>
        <div className="col-lg-5">
          <h1>Cyber Incident Scenario </h1>
          <p>
            OK, so I’m just going to brief you on what we know right now about
            the situation as it’s all moving quite quickly, to be honest. We
            know that IT have picked up suspicious activity on the network as
            part of a routine audit. They’re saying it looks like data has been
            changed in the primary customer database without authorisation and
            some of it seems to have been exported. Several thousand customer
            records seem to be affected but they’re still trying to establish
            exactly how many or how long this has been going on. It could be a
            couple of weeks before that’s done, apparently.
          </p>
          <p>
            The contact centre are reporting customers calling in about suspect
            transactions on their accounts, and have been giving them general
            advice about resetting passwords and so on.
          </p>
          <p>
            Legal are working with us on a statement but are clear we need to be
            careful about accepting liability here - it’s not clear if we’re a
            victim of a crime or if this is a bug in our systems.
          </p>
          <p>
            So, for this interview we need you to come across as concerned but
            in control, OK? The key message here is that we’re taking this
            seriously and we’re investigating urgently, and we’ll keep customers
            informed. Don’t let them draw you into speculation. Is that OK?
          </p>
          <p>Great, good luck, see you on the other side.</p>
        </div>
      </div>
      <div className="response-end text-end pb-4 d-grid gap-2 d-md-flex justify-content-md-end">
        <NavLink
          className="nav-link btn btn-primary text-light"
          to="/CyberInterview"
        >
          Start Interview
        </NavLink>
      </div>
    </div>
  );
}

export default Scenario1;
