import "./DragAndDrop.css";

import React, { useState } from "react";

const DragAndDrop = () => {
  const [dragables, setDragables] = useState([
    "Widget 1",
    "Widget 2",
    "Widget 3",
  ]);
  const [widgets, setWidgets] = useState([]);

  const handleOnDragStart = (e, widgetType) => {
    e.dataTransfer.setData("widgetType", widgetType);
  };

  const handleOnDrop = (e) => {
    const widgetType = e.dataTransfer.getData("widgetType");
    const newDragables = dragables.filter((elm) => elm !== widgetType);
    setDragables(newDragables);
    setWidgets([...widgets, widgetType]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        {dragables.map((elm, idx) => {
          return (
            <div
              className="widget"
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
      <div
        className="drop-zone"
        onDrop={handleOnDrop}
        onDragOver={handleDragOver}
      >
        Drop Zone
        {widgets.map((elm, idx) => {
          return <div className="widget">{elm}</div>;
        })}
      </div>
    </div>
  );
};

export default DragAndDrop;
