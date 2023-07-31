import "./NewFormBuilder.css";

import React from "react";
import { useSelector } from "react-redux";

const NewFormBuilder = () => {
  const questions = useSelector(
    (state) => state?.rootReducer?.newForm?.data?.questions
  );

  return (
    <div className="form-builder">
      <h2>New Form Builder</h2>
    </div>
  );
};

export default NewFormBuilder;
