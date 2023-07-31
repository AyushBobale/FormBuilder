import "./SpecificResponse.css";

import React from "react";
import { useGetFormResponseSpecificQuery } from "../../redux/slices/formApi";
import { useParams } from "react-router";

const CatAnsRender = ({ idx, qData, aData }) => {
  const expectedAnswer = {};
  qData?.data?.options?.forEach((elm, idx) => {
    const key = Object.values(elm)?.[0];
    const value = Object.keys(elm)?.[0];
    expectedAnswer[[key]] = [...(expectedAnswer[key] || []), value];
  });
  console.log(expectedAnswer);
  return (
    <div className="flex">
      <p>
        {idx + 1}
        {". " + qData?.question}
      </p>
      <p>Expected Answer</p>
      <p>{JSON.stringify(expectedAnswer)}</p>
      <p>Answer Given</p>
      <p>{JSON.stringify(aData)}</p>
    </div>
  );
};

const FillAnsRender = ({ idx, qData, aData }) => {
  const responseRec = aData?.map((elm) => elm?.idx);
  return (
    <div className="flex">
      <p>
        {idx + 1}
        {". " + qData?.question}
      </p>
      <p>Expected Answer</p>
      <p>{JSON.stringify(qData?.data?.options)}</p>
      <p>Answer Given</p>
      <p>{JSON.stringify(responseRec)}</p>
    </div>
  );
};

const CompAnsRender = ({ idx, qData, aData }) => {
  const expectedAns = qData?.data?.questions?.map((elm) => elm?.rightOpt);
  console.log(qData);
  return (
    <div className="flex">
      <p>
        {idx + 1}
        {". " + qData?.question}
      </p>
      <p>Expected Answer</p>
      <p>{JSON.stringify(expectedAns)}</p>
      <p>Answer Given</p>
      <p>{JSON.stringify(Object.values(aData))}</p>
    </div>
  );
};

const AnswerRenderer = (type, idx, qData, aData) => {
  switch (type) {
    case "CAT":
      return <CatAnsRender idx={idx} qData={qData} aData={aData} />;
    case "FILL":
      return <FillAnsRender idx={idx} qData={qData} aData={aData} />;
    case "COMP":
      return <CompAnsRender idx={idx} qData={qData} aData={aData} />;
  }
};

const SpecificResponse = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess, error } =
    useGetFormResponseSpecificQuery(id);

  return (
    <div>
      <h3>Response for {data?.data?._id}</h3>
      <div className="flex">
        {data?.data?.formId?.questions?.map((elm, idx) => {
          return AnswerRenderer(elm?.type, idx, elm, data?.data?.answers[idx]);
        })}
      </div>
    </div>
  );
};

export default SpecificResponse;
