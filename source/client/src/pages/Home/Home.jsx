import "./Home.css";

import {
  faArrowDown,
  faArrowUp,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { moveFieldDown, moveFieldUp } from "../../redux/slices/formSlice";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Home = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state?.rootReducer?.form?.data?.form);
  console.log(formData);

  const inputTypes = useSelector(
    (state) => state?.rootReducer?.form?.data?.types
  );

  const handleUpArrow = (elm, idx) => {
    dispatch(moveFieldUp({ idx: idx, elm: elm }));
  };
  const handleDownArrow = (elm, idx) => {
    dispatch(moveFieldDown({ idx: idx, elm: elm }));
  };

  return (
    <>
      <div className="form-wrap">
        <div className="form">
          {formData?.formHeaderImage && (
            <div className="header-img">
              <img
                src={formData?.formHeaderImage}
                // src="https://images.template.net/wp-content/uploads/2016/01/Car-Wash-Roll-Up-Banner-Template.jpg"
              />
            </div>
          )}
          {formData?.fields?.map((elm, idx) => {
            return (
              <div key={elm.fieldId} className="field-wrap">
                <div className="controls">
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
                  <FontAwesomeIcon icon={faPenToSquare} />
                </div>
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
      </div>
    </>
  );
};
