import "./NewFormBuilder.css";

import {
  CATAddCategory,
  changeFromName,
  changeQuestion,
} from "../../redux/slices/newFormSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const NewFormBuilder = () => {
  const dispatch = useDispatch();
  const formName = useSelector(
    (state) => state?.rootReducer?.newForm?.data?.formName
  );
  const questions = useSelector(
    (state) => state?.rootReducer?.newForm?.data?.questions
  );

  const getType = (type) => {
    switch (type) {
      case "CAT":
        return "Categorize";
      case "FILL":
        return "Fill up";
      case "COMP":
        return "Comprehension";
    }
  };

  const CategorizeBuilder = ({ idx }) => {
    const [category, setCategory] = useState("");
    const questions = useSelector(
      (state) => state?.rootReducer?.newForm?.data?.questions
    );

    const handleAddCategory = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        dispatch(CATAddCategory({ idx: idx, cat: category }));
        setCategory("");
      }
    };

    return (
      <div>
        <div className="cat-b-cats-cont">
          <p>Categories</p>
          {questions?.[idx]?.data?.cats?.map((elm, idx) => {
            return <div className="cat-b-cat">{elm}</div>;
          })}
        </div>

        <input
          type="text"
          placeholder="Add Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          onKeyDown={handleAddCategory}
        />
        <div className="cat-b-opts-cont">
          <p>Options</p>
        </div>
      </div>
    );
  };
  const FillUpBuilder = ({ idx }) => {
    return <p>Fill Up</p>;
  };
  const ComprehensionBuilder = ({ idx }) => {
    return <p>Comprehension</p>;
  };

  const getBuilder = (type, idx) => {
    switch (type) {
      case "CAT":
        return <CategorizeBuilder idx={idx} />;
      case "FILL":
        return <FillUpBuilder idx={idx} />;
      case "COMP":
        return <ComprehensionBuilder idx={idx} />;
    }
  };

  const handleFormName = (e) => {
    dispatch(changeFromName(e.target.value));
  };

  const handleQuestionChange = (e, idx) => {
    dispatch(changeQuestion({ idx: idx, question: e.target.value }));
  };

  return (
    <div className="form-builder">
      <h2>New Form Builder</h2>
      <input
        type="text"
        placeholder="Add form Name !"
        value={formName}
        onChange={handleFormName}
      />
      <div className="builder-ques">
        {questions?.map((elm, idx) => {
          return (
            <div className="builder-que">
              <h4>
                Question No {idx + 1} : {getType(elm?.type)}{" "}
              </h4>
              <input
                type="text"
                placeholder="Add question !"
                value={elm?.question}
                onChange={(e) => handleQuestionChange(e, idx)}
              />
              {getBuilder(elm?.type, idx)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewFormBuilder;
