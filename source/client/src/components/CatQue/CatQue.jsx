import "./CatQue.css";

import React, { useState } from "react";

const CatQue = ({ question, cats, options }) => {
  const [dragables, setDragables] = useState(options);
  const [widgets, setWidgets] = useState({});

  const handleOnDragStart = (e, widgetType) => {
    e.dataTransfer.setData("widgetType", widgetType);
  };

  const handleOnDrop = (e, cat) => {
    const widgetType = e.dataTransfer.getData("widgetType");
    const newDragables = dragables.filter((elm) => elm != widgetType);
    setDragables(newDragables);
    const prevWidgets = widgets[cat] || [];
    setWidgets({ ...widgets, [cat]: [...prevWidgets, widgetType] });
  };

  console.log(widgets);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const resetFillUp = () => {
    setWidgets({});
    setDragables(options);
  };
  return (
    <div className="cat-que">
      <h3>Categorize Question</h3>
      <p>{question}</p>
      <div className="cat-options">
        {dragables.map((elm, idx) => {
          return (
            <div
              className="fill-option"
              draggable
              onDragStart={(e) => {
                handleOnDragStart(e, elm);
              }}
            >
              {elm}
            </div>
          );
        })}
      </div>
      <div className="cats-cont">
        {cats?.map((elm, idx) => {
          return (
            <div
              className="single-cat-cont"
              onDrop={(e) => {
                handleOnDrop(e, elm);
              }}
              onDragOver={handleDragOver}
            >
              <p>{elm}</p>
              {widgets[elm]?.map((ans, idx) => {
                return <p className="cat-ans">{ans}</p>;
              })}
            </div>
          );
        })}
      </div>
      <button className="rst-btn" onClick={resetFillUp}>
        Reset
      </button>
    </div>
  );
};

export default CatQue;
