import "../Home/Home.css";
import "./Fill.css";

import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { useGetFormIdQuery } from "../../redux/slices/formApi";

const Fill = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetFormIdQuery(id);

  console.log(data?.data?.form);

  return (
    <div className="fill-wrap">
      {data?.data?.form?.formName && (
        <>
          <h2>{data?.data?.form?.formName}</h2>
          <div className="form">
            {data?.data?.form?.formHeaderImg && (
              <div className="header-img">
                <img
                  src={data?.data?.form?.formHeaderImg}
                  // src="https://images.template.net/wp-content/uploads/2016/01/Car-Wash-Roll-Up-Banner-Template.jpg"
                />
              </div>
            )}
            {data?.data?.form?.fields?.map((elm, idx) => {
              return (
                <div key={elm.fieldId} className="field-wrap">
                  {/* <div className="controls">
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    onClick={() => {
                      handleDownArrow(elm, idx);
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    onClick={() => {
                      handleUpArrow(elm, idx);
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    onClick={() => {
                      handleEdit(idx);
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => {
                      handleRemove(idx);
                    }}
                  />
                </div> */}
                  <label htmlFor={elm.fieldId}>
                    {elm.image && (
                      <div className="lbl-img">
                        <img src={elm.image} />
                      </div>
                    )}
                    <div>
                      {elm.label}
                      <span className={elm.isRequired ? "req" : "not-req"}>
                        {"  *"}
                      </span>
                    </div>
                    <input
                      type={elm.type}
                      id={elm.fieldId}
                      placeholder={elm.placeholder}
                      required={elm.isRequired}
                    />
                  </label>
                </div>
              );
            })}
          </div>
        </>
      )}
      <button>Submit</button>
    </div>
  );
};

export default Fill;
