import "./Response.css";

import React from "react";
import { useGetFormResponsesNewQuery } from "../../redux/slices/formApi";
import { useParams } from "react-router";

const ResponeRender = () => {};

const NewResponses = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess, error } = useGetFormResponsesNewQuery(id);
  console.log(data);
  return (
    <div className="response-wrap">
      <>
        <h2>{data?.data?.form?.formName}</h2>
      </>
    </div>
  );
};

export default NewResponses;
