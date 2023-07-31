import "./NewFormBuilder.css";

import {
  CATAddCategory,
  CATAddOption,
  FILLAddOption,
  FILLChangeSentence,
  changeFromName,
  changeQuestion,
} from "../../redux/slices/newFormSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CategorizeBuilder = ({ idx }) => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const [option, setOption] = useState({ key: "", value: "" });
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
  const handleAddOption = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      dispatch(
        CATAddOption({
          idx: idx,
          option: {
            [option.key]: option.value || questions?.[idx]?.data?.cats?.[0],
          },
        })
      );
      setOption({ key: "", value: "" });
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
        {questions?.[idx]?.data?.options?.map((elm, idx) => {
          return (
            <div className="cat-b-cat">
              {Object.keys(elm)?.[0]} : {Object.values(elm)?.[0]}
            </div>
          );
        })}
      </div>
      <div className="opt-add">
        <input
          type="text"
          placeholder="Add option"
          value={option.key}
          onChange={(e) => setOption({ ...option, key: e.target.value })}
          onKeyDown={handleAddOption}
        />
        <div class="select-wrapper">
          <select
            class="select"
            onChange={(e) => {
              setOption({ ...option, value: e.target.value });
            }}
          >
            {questions?.[idx]?.data?.cats?.map((elm, idx) => {
              return <option value={elm}>{elm}</option>;
            })}
          </select>
        </div>
      </div>
    </div>
  );
};
const FillUpBuilder = ({ idx }) => {
  const dispatch = useDispatch();
  const [fillUp, setFillUp] = useState("");
  const questions = useSelector(
    (state) => state?.rootReducer?.newForm?.data?.questions
  );

  const handleChangeFillUp = (e) => {
    dispatch(FILLChangeSentence({ idx: idx, sentence: e.target.value }));
  };

  const handleAddOption = (option) => {
    const index = questions?.[idx]?.data?.sentence?.indexOf(option);
    dispatch(FILLAddOption({ idx: idx, option: index }));
  };

  return (
    <div>
      <div className="fill-b-opts-cont">
        <p>Selected Options</p>
        {questions?.[idx]?.data?.options?.map((elm) => {
          console.log(
            elm,
            questions?.[idx]?.data?.sentence,
            questions?.[idx]?.data?.sentence?.[elm]
          );
          return <div>{questions?.[idx]?.data?.sentence?.[elm]}</div>;
        })}
      </div>
      <input
        type="text"
        placeholder="Enter the sentence for fill up"
        value={questions?.[idx]?.data?.sentence?.join(" ")}
        onChange={handleChangeFillUp}
      />
      <div className="fill-b-opts-cont">
        <p>Select Options</p>
        {questions?.[idx]?.data?.sentence?.map((elm, senIdx) => {
          if (questions?.[idx]?.data?.options?.includes(senIdx)) {
            return;
          }
          return <div onClick={() => handleAddOption(elm)}>{elm}</div>;
        })}
      </div>
    </div>
  );
};
const ComprehensionBuilder = ({ idx }) => {
  return <p>Comprehension</p>;
};

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
      Tip : Press Enter on inputs to create entries
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
