import "./Response.css";
import "../Fill/Fill.css";

import React from "react";
import { useGetFormResponsesQuery } from "../../redux/slices/formApi";
import { useParams } from "react-router";

const Responses = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess, error } = useGetFormResponsesQuery(id);
  console.log(data);
  return (
    <div className="response-wrap">
      {data?.data?.form?.formName && (
        <>
          <h2>{data?.data?.form?.formName}</h2>
          <div className="response-table">
            <div className="response-row-header">
              <p>Sr No</p>
              {data?.data?.form?.fields?.map((elm, idx) => {
                return <p>{elm?.label}</p>;
              })}
            </div>
            {data?.data?.responses?.map((elm, idx) => {
              return (
                <div className="response-row">
                  <p>{idx + 1}.</p>
                  {elm?.map((elmInner, idx) => {
                    return <p>{elmInner?.[0]}</p>;
                  })}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Responses;

/*
Manage data in the backend 
minimal changes in the frontednd are needed
after taking a reponse redirect the user so that the same form is not filled again

 */
