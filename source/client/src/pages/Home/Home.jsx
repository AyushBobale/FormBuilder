import "./Home.css";

import { useDispatch, useSelector } from "react-redux";

import React from "react";

export const Home = () => {
  const formData = useSelector((state) => state?.rootReducer?.form?.data?.form);
  console.log(formData);

  const inputTypes = useSelector(
    (state) => state?.rootReducer?.form?.data?.types
  );
  //   tel: "tel",
  //   text: "text",
  //   password: "password",
  //   number: "number",
  //   file: "file",
  //   time: "time",
  //   email: "email",
  //   color: "color",
  //   date: "date",
  //   datetimeLocal: "datetime-local",
  //   url: "url",
  //   search: "search",
  //   // hidden: "hidden",
  //   // image: "image",
  //   // month: "month",
  //   // week: "week",
  //   // ----------------------------
  //   button: "button",
  //   // checkbox: "checkbox",
  //   // radio: "radio",
  //   // range: "range",
  //   // reset: "reset",
  //   // submit: "submit",
  // };

  const fields = [
    {
      fieldId: "Lable1",
      label: "Lable1",
      placeholder: "Lable1",
      image: "https://www.fotor.com/blog/wp-content/uploads/2017/09/1-2.jpg",
      type: inputTypes.text,
      isRequired: true,
    },
  ];
  const fields2 = Object.keys(inputTypes).map((elm) => {
    return {
      fieldId: elm,
      label: elm,
      placeholder: elm,
      type: inputTypes[elm],
      isRequired: true,
    };
  });

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
          {fields2.map((elm, idx) => {
            return (
              <div key={elm.fieldId} className="field-wrap">
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
