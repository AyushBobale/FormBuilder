import "./CompQue.css";

import React, { useEffect, useState } from "react";

import { editAnswer } from "../../redux/slices/newFormSlice";
import { useDispatch } from "react-redux";

const CompQue = ({ compPassage, compQuestions, question, idx }) => {
  const dispatch = useDispatch();
  const [answers, setAnswers] = useState({});

  const handleClick = (idx, value) => {
    setAnswers({ ...answers, [idx]: value });
  };

  useEffect(() => {
    dispatch(editAnswer({ idx: idx, data: answers }));
  }, [answers]);

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
