import React from "react";
import ReactPlayer from "react-player/lazy";
import Quiz from "react-quiz-component";

const questions =  {
  "quizTitle": "",
  "quizSynopsis": "The interview will start as soon as you are ready...",
  "nrOfQuestions": "",
  "questions": [
    {
      "question": "What can you tell us about reports that your company has lost the personal data of hundreds of thousands of your customers?",
      "questionType": "text",
      "questionPic": "", // if you need to display Picture in Question
      "answerSelectionType": "single",
      "answers": [
        "Well, firstly let me assure your viewers that we’re doing everything in our power to understand what’s happened here. I understand the concern and I’m taking personal charge of the situation to ensure things don’t escalate.",
        "Thanks for the opportunity to update everyone on the situation. We’re taking this very seriously and our teams are working hard to establish what has happened. Earlier today, our internal monitoring picked up some apparent anomalies with customer data which we’re investigating. While this is ongoing, I don’t want to speculate but I can say that as ever our priority is the welfare of our customers and we’ll be sharing more details with them as soon as we can - and helping them to stay safe.",
        "I’ve been told that we’ve picked up some strange patterns of data in our customer database, but it may be several days before we have the complete picture. I’d ask people to bear with us while we get to the bottom of this."

      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Your answer is pretty strong, shows understanding and a personal commitment. However, the suggestion that things may yet ‘escalate’ may be alarming and it’s a little early to be taking ‘personal charge’ of a technical situation needing a strong team to resolve it.",
      "messageForIncorrectAnswer": "Your answer is long but shows command of detail and describes the actions you’re taking. It comes across as in-control and open about what has happened. It also underlines that your primary goal is the welfare of customers, and that they are your primary audience for information.",
      "explanation": "Answer A is pretty strong, shows understanding and a personal commitment. However, the suggestion that things may yet ‘escalate’ may be alarming and it’s a little early to be taking ‘personal charge’ of a technical situation needing a strong team to resolve it. Answer B is long but shows command of detail and describes the actions you’re taking. It comes across as in-control and open about what has happened. It also underlines that your primary goal is the welfare of customers, and that they are your primary audience for information. Answer C is a weak answer, which doesn’t suggest you have control over the situation. While appealing for patience is important, it would have more credibility if you gave more detail about what you are doing and why the investigation needs time.",
      "point": "20"
    },
  ],
  
  "appLocale": {
    "landingHeaderText": "",
    "question": "Question",
    "startQuizBtn": "Start the interview",
    "resultFilterAll": "All",
    "resultFilterCorrect": "Best option",
    "resultFilterIncorrect": "Sub-optimal",
    "nextQuestionBtn": "Next Question",
    "resultPageHeaderText": "You have completed the interview. Please consider the following feedback."
  } 
} 

// const renderCustomResultPage = (obj) => {
//   console.log(obj);
//   return (
//     <div className="card-body">
//     <h2>
//       {appLocale.resultPageHeaderText.replace('<correctIndexLength>', correct.length).replace('<questionLength>', questions.length)}
//     </h2>
//     {renderQuizResultQuestions()}
//   </div>
//   )
// }

function CyberInterview() {
  return (
    <div className="videoSingleText">
    <div className="container">
      <div className="row align-items-top my-5">
        <div className="col-lg-7">
            <div className="player-wrapper">
              <ReactPlayer
                className="react=player"
                url="https://www.dropbox.com/sh/u14d3axzv3a0nol/AABfsFNxDPnuc4sGKwH-lk-sa/Interview%20-%20clip%201.mov"
                controls="true"
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div className="col-lg-5">
            <h1>Cyber Incident Response</h1>
            Play the video to hear the question from the journalist. Then start the interview and select the best of the responses below.
          </div>
        </div>

      {/* Quiz component goes here */}
      <Quiz quiz={questions} />
      </div>
    </div>
  );
}

export default CyberInterview;
