import "./Home.css";

import React, { useEffect } from "react";
import {
  editField,
  moveFieldDown,
  moveFieldUp,
  removeField,
} from "../../redux/slices/formSlice";
import {
  faArrowDown,
  faArrowUp,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCreateFormMutation } from "../../redux/slices/formApi";
import { useServerStatusQuery } from "../../redux/slices/rootApi";

export const Home = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state?.rootReducer?.form?.data?.form);
  const inputTypes = useSelector(
    (state) => state?.rootReducer?.form?.data?.types
  );

  const handleUpArrow = (elm, idx) => {
    dispatch(moveFieldUp({ idx: idx, elm: elm }));
  };
  const handleDownArrow = (elm, idx) => {
    dispatch(moveFieldDown({ idx: idx, elm: elm }));
  };
  const handleEdit = (idx) => {
    dispatch(editField(idx));
  };
  const handleRemove = (idx) => {
    dispatch(removeField(idx));
  };

  return (
    <>
      <div className="form-wrap">
        <h2>Create Form</h2>
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
                      {/* {"  *"} */}
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
