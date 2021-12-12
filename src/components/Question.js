import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code 
useEffect(() => {
  const timer = setTimeout(() => {
    setTimeRemaining(timeRemaining-1)}, 1000);
    if (timeRemaining === 0) {
      setTimeRemaining(10)
      onAnswered(false)
    }
    return function cleanup () {
      clearTimeout(timer);
    } 
  });


// countdown timer 10 seconds/q
// use setTimeout to run a callback fn after 1 seconds
//   inside this, use setTimeRemaining to -1 timeRem. each second
//   when timerem hits 0, set it back to 10 sec, call onAnswered(false)
//cleanup fn

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
