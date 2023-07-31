import "./Response.css";

import { Link } from "react-router-dom";
import { ROUTES } from "../../config";
import React from "react";
import { useGetFormResponsesNewQuery } from "../../redux/slices/formApi";
import { useParams } from "react-router";

const NewResponses = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess, error } = useGetFormResponsesNewQuery(id);
  console.log(data);
  return (
    <div className="response-wrap">
      <>
        <h2>{data?.data?.form?.formName}</h2>
        <div className="responses-to-full">
          {data?.data?.responses?.map((elm, idx) => {
            return (
              <Link to={ROUTES.RESPONSE_FULL(elm?._id)}>
                View complete Response for {elm?._id}
              </Link>
            );
          })}
        </div>
      </>
    </div>
  );
};

export default NewResponses;
