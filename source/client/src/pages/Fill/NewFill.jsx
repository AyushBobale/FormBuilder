import "../NewFormRenderer/NewFormRenderer.css";

import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";

import CatQue from "../../components/CatQue/CatQue";
import CompQue from "../../components/CompQue/CompQue";
import FillUpQue from "../../components/FillUpQue/FillUpQue";
import { useGetFormIdNewQuery } from "../../redux/slices/formApi";

const ReturnQuestion = (type, idx, data) => {
  switch (type) {
    case "CAT":
      const opts = data?.data?.options?.map((elm) => Object.keys(elm)[0]);
      return (
        <CatQue
          question={data?.question}
          options={opts || []}
          cats={data?.data?.cats}
          idx={idx}
        />
      );
    case "FILL":
      return (
        <FillUpQue
          options={data?.data?.options}
          sentence={data?.data?.sentence}
          question={data?.question}
          idx={idx}
        />
      );
    case "COMP":
      return (
        <CompQue
          compPassage={data?.data?.passage}
          compQuestions={data?.data?.questions}
          question={data?.question}
          idx={idx}
        />
      );
  }
};

const NewFill = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, error, isSuccess } = useGetFormIdNewQuery(id);
  console.log(data);

  const [formData, setFormData] = useState([]);

  return (
    <div className="new-form-wrap">
      <h2>{data?.data?.form?.formName}</h2>
      <div className="new-form">
        {data?.data?.form?.questions?.map((elm, idx) => {
          return (
            <div className="que-wrap">
              {ReturnQuestion(elm?.type, idx, elm)}
            </div>
          );
        })}

        {/* <div className="que-wrap">
          <CatQue
            cats={catQueData.cats}
            options={catQueData.options}
            question={catQueData.question}
          />
        </div>

        <div className="que-wrap">
          <FillUpQue
            sentence={fillQueData.sentence}
            options={fillQueData.options}
          />
        </div>

        <div className="que-wrap">
          <CompQue
            compPassage={compQueData.passage}
            compQuestions={compQueData.questions}
          />
        </div> */}
      </div>
    </div>
  );
};

export default NewFill;
