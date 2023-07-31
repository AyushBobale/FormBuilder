import "./FillUpQue.css";

import React, { useEffect, useState } from "react";

import { editAnswer } from "../../redux/slices/newFormSlice";
import { useDispatch } from "react-redux";

const FillUpQue = ({ sentence, options, question, idx }) => {
  const dispatch = useDispatch();

  const [dragables, setDragables] = useState(options);
  const [widgets, setWidgets] = useState({});

  const handleOnDragStart = (e, widgetType) => {
    e.dataTransfer.setData("widgetType", widgetType);
  };

  const handleOnDrop = (e, dropNumber) => {
    const widgetType = JSON.parse(e.dataTransfer.getData("widgetType"));
    const newDragables = dragables.filter((elm) => elm != widgetType?.idx);
    setDragables(newDragables);
    setWidgets({ ...widgets, [dropNumber]: widgetType });
  };

  useEffect(() => {
    dispatch(editAnswer({ idx: idx, data: Object.values(widgets) }));
  }, [widgets]);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const resetFillUp = () => {
    setWidgets({});
    setDragables(options);
  };

  return (
    <div className="fill-que">
      <h3>Fill Up Question</h3>
      <p>{question}</p>
      <div className="fill-options">
        {dragables?.map((elm, idx) => {
          return (
            <div
              className="fill-option"
              draggable
              onDragStart={(e) => {
                handleOnDragStart(
                  e,
                  JSON.stringify({ text: sentence[elm], idx: elm })
                );
              }}
            >
              {sentence[elm]}
            </div>
          );
        })}
      </div>
      <div className="fill-up">
        {sentence?.map((elm, idx) => {
          if (options?.includes(idx)) {
            return (
              <span
                className="blank"
                onDrop={(e) => {
                  handleOnDrop(e, idx);
                }}
                onDragOver={handleDragOver}
              >
                {widgets[idx] && <p>{widgets[idx]?.text}</p>}
              </span>
            );
          }
          return <span>{elm}</span>;
        })}
      </div>
      <button className="rst-btn" onClick={resetFillUp}>
        Reset
      </button>
    </div>
  );
};

export default FillUpQue;
