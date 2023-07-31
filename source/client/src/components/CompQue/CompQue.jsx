import "./CompQue.css";

import React, { useState } from "react";

const CompQue = ({ compPassage, compQuestions, question, idx }) => {
  const [answers, setAnswers] = useState({});

  const handleClick = (idx, value) => {
    setAnswers({ ...answers, [idx]: value });
  };

  console.log(answers);

  return (
    <div className="comp-que">
      <h3>Comprehension Question</h3>
      <p>{question}</p>
      <p className="passage">{compPassage}</p>
      <div className="mcqs">
        {compQuestions?.map((elm, idx) => {
          return (
            <div className="mcq-que">
              <p className="question">
                {idx + 1}. {elm?.question}
              </p>
              {elm?.options?.map((option, optionIdx) => {
                return (
                  <p
                    className="option"
                    onClick={() => handleClick(idx, optionIdx)}
                  >
                    <span
                      className={
                        answers[idx] == optionIdx
                          ? "option-circle selected"
                          : "option-circle"
                      }
                    >
                      <span>{"\u00A0"}</span>
                    </span>
                    {option}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompQue;
