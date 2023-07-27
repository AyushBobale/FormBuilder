import "../Home/Home.css";
import "./Fill.css";

import React, { useEffect, useState } from "react";
import {
  useGetFormIdQuery,
  useSubmitFormMutation,
} from "../../redux/slices/formApi";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import { ROUTES } from "../../config";

const Fill = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, error, isSuccess } = useGetFormIdQuery(id);
  const [submitForm, results] = useSubmitFormMutation();

  const [formData, setFormData] = useState([]);

  useEffect(() => {
    if (isSuccess) {
      setFormData(
        data?.data?.form?.fields?.map((elm, idx) => {
          return { fieldId: elm?.fieldId, response: [""] };
        })
      );
    }
  }, [isLoading]);

  const handleChange = (fieldId, value) => {
    if (!fieldId || !value) {
      return;
    }
    const formDataCopy = formData;
    const modFormData = formDataCopy.map((elm, idx) => {
      if (elm?.fieldId == fieldId) {
        return {
          ...elm,
          response: [value],
        };
      } else {
        return elm;
      }
    });

    // if the field does not exist
    const targetField = formDataCopy.find((elm) => elm.fieldId == fieldId);
    if (!targetField) {
      const newField = {
        fieldId: fieldId,
        response: [value],
      };
      modFormData.push(newField);
    }

    setFormData(modFormData);
  };

  const handleSubmit = () => {
    submitForm({ id: id, body: { fields: formData } });
  };

  useEffect(() => {
    if (results.data?.success) navigate(ROUTES.RESPONSES(id));
  }, [results.data]);

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
                        {/* {"  *"} */}
                      </span>
                    </div>
                    <input
                      type={elm.type}
                      id={elm.fieldId}
                      placeholder={elm.placeholder}
                      required={elm.isRequired}
                      onChange={(e) =>
                        //  console.log(elm?.fieldId, e.target.value)
                        handleChange(elm?.fieldId, e.target.value)
                      }
                    />
                  </label>
                </div>
              );
            })}
          </div>
        </>
      )}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Fill;
