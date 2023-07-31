import "./CompQue.css";

import React from "react";

const CompQue = ({ compPassage, compQuestions }) => {
  return (
    <div className="comp-que">
      <h3>Comprehension Question</h3>
      <p className="passage">{compPassage}</p>
      <div className="mcqs">
        {compQuestions?.map((elm, idx) => {
          return (
            <div className="mcq-que">
              <p className="question">
                {idx + 1}. {elm?.question}
              </p>
              {elm?.options?.map((option, idx) => {
                return <p className="option">{option}</p>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompQue;
