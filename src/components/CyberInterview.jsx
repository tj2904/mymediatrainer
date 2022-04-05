import React from "react";
import ReactPlayer from "react-player/lazy";
import Quiz from "react-quiz-component";

const questions = {
  quizTitle: "",
  quizSynopsis: "The interview will start as soon as you are ready...",
  nrOfQuestions: "3",
  questions: [
    {
      question:
        "What can you tell us about reports that your company has lost the personal data of hundreds of thousands of your customers?",
      questionType: "text",
      questionPic: "", // if you need to display Picture in Question
      answerSelectionType: "single",
      answers: [
        "Answer A: Well, firstly let me assure your viewers that we’re doing everything in our power to understand what’s happened here. I understand the concern and I’m taking personal charge of the situation to ensure things don’t escalate.",
        "Answer B: Thanks for the opportunity to update everyone on the situation. We’re taking this very seriously and our teams are working hard to establish what has happened. Earlier today, our internal monitoring picked up some apparent anomalies with customer data which we’re investigating. While this is ongoing, I don’t want to speculate but I can say that as ever our priority is the welfare of our customers and we’ll be sharing more details with them as soon as we can - and helping them to stay safe.",
        "Answer C: I’ve been told that we’ve picked up some strange patterns of data in our customer database, but it may be several days before we have the complete picture. I’d ask people to bear with us while we get to the bottom of this.",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer:
        "Answer A pretty strong, shows understanding and a personal commitment. However, the suggestion that things may yet ‘escalate’ may be alarming and it’s a little early to be taking ‘personal charge’ of a technical situation needing a strong team to resolve it. Answer B is long but shows command of detail and describes the actions you’re taking. It comes across as in-control and open about what has happened. It also underlines that your primary goal is the welfare of customers, and that they are your primary audience for information. ",
      messageForIncorrectAnswer:
        "Answer C is a weak answer, which doesn’t suggest you have control over the situation. While appealing for patience is important, it would have more credibility if you gave more detail about what you are doing and why the investigation needs time.",
      explanation:
        "Answer A is pretty strong, shows understanding and a personal commitment. However, the suggestion that things may yet ‘escalate’ may be alarming and it’s a little early to be taking ‘personal charge’ of a technical situation needing a strong team to resolve it. Answer B is long but shows command of detail and describes the actions you’re taking. It comes across as in-control and open about what has happened. It also underlines that your primary goal is the welfare of customers, and that they are your primary audience for information. Answer C is a weak answer, which doesn’t suggest you have control over the situation. While appealing for patience is important, it would have more credibility if you gave more detail about what you are doing and why the investigation needs time.",
      point: "20",
    },

    {
      question:
        "Why has it taken you so long to get on top of the situation? I mean surely you know what’s happened and how to fix it by this point? Was this human error or are you the victims of  some kind of cyber attack?",
      questionType: "text",
      questionPic: "", // if you need to display Picture in Question
      answerSelectionType: "single",
      answers: [
        "Answer A: Well, we’ve been working flat out but these things take time. We just don’t know yet what we’re dealing with",
        "Answer B: This could be a criminal cyberattack, absolutely, we just don’t know right now. There’s a lot of data, systems and so on to comb through so it may take some time",
        "Answer C: We’ve responded as soon as we picked this issue up and we’ve mobilised our security teams as well as external experts. We don’t want to cause confusion or alarm so it’s important we establish exactly what’s happened.",
      ],
      correctAnswer: "3",
      messageForCorrectAnswer:
        "Answer C is the strongest answer here, talking about the specific actions you’ve taken and your urgent response. It also explains constructively why you won’t be drawn into speculation.",
      explanation:
        "Answer A doesn’t suggest you have control of the situation yet, and makes it seem like you’re behind the curve.            Answer B speculates about the cyberattack possibility and doesn’t give the impression of a leader who is on top of the detail of the situation.      Answer C is the strongest answer here, talking about the specific actions you’ve taken and your urgent response. It also explains constructively why you won’t be drawn into speculation.",
      point: "20",
    },

    {
      question:
        "So what do you say to customers who are seeing their accounts emptied by criminals as a result of this? Will you be taking this opportunity to apologise to your customers?",
      questionType: "text",
      questionPic: "", // if you need to display Picture in Question
      answerSelectionType: "single",
      answers: [
        "Answer A: Of course, we’re sorry for the worry this will be causing our customers, and I can promise you we will work to make this right for them.",
        "Answer B: I don’t want to get into the issue of crimes and so on for now - we’re still investigating what has happened here.",
        "Answer C: Absolutely - I want to apologise unreservedly for letting our customers down on this. We will ensure nobody is left out of pocket as a result of this situation.",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer:
        "Answer A is the strongest answer here - demonstrating sympathy for the concern people will understandably have without committing the company to compensation or admitting liability - while the facts have not yet been fully established. It shows a commitment to resolve the situation.",
      explanation:
        "Answer A is the strongest answer here - demonstrating sympathy for the concern people will understandably have without committing the company to compensation or admitting liability - while the facts have not yet been fully established. It shows a commitment to resolve the situation.        Answer B comes across as defensive and repeats the speculation about criminal activity, which you’re not yet ready to discuss. Without addressing the suggestion you apologise, you may be seen as uncaring. Answer C shows sympathy but risks going too far, offering a specific financial commitment before you know the extent of the situation. It also suggests you accept liability.",
      point: "20",
    },

    // {
    //   "question": "",
    //   "questionType": "text",
    //   "questionPic": "", // if you need to display Picture in Question
    //   "answerSelectionType": "single",
    //   "answers": [
    //     "",
    //     "",
    //     ""

    //   ],
    //   "correctAnswer": "1",
    //   "messageForCorrectAnswer": "",
    //   "explanation": "",
    //   "point": "20"
    // },
  ],

  appLocale: {
    landingHeaderText: "",
    question: "Question",
    startQuizBtn: "Start the interview",
    resultFilterAll: "All",
    resultFilterCorrect: "Questions you gave the optimal answer in",
    resultFilterIncorrect: "Questions where your answer was sub-optimal",
    nextQuestionBtn: "Next Question",
    resultPageHeaderText:
      "You have completed the interview. Please consider the following feedback.",
  },
};

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
            Play the video to hear the question from the journalist. Then start
            the interview and select the best of the responses below.
          </div>
        </div>

        {/* Quiz component goes here */}
        <Quiz quiz={questions} />
      </div>
    </div>
  );
}

export default CyberInterview;
