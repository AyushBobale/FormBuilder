import "./Home.css";

import React from "react";

export const Home = () => {
  const inputTypes = {
    button: "button",
    checkbox: "checkbox",
    color: "color",
    date: "date",
    datetimeLocal: "datetime-local",
    email: "email",
    file: "file",
    hidden: "hidden",
    image: "image",
    month: "month",
    number: "number",
    password: "password",
    radio: "radio",
    range: "range",
    reset: "reset",
    search: "search",
    submit: "submit",
    tel: "tel",
    text: "text",
    time: "time",
    url: "url",
    week: "week",
  };

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

  console.log(fields2);

  return (
    <>
      <div className="form-wrap">
        <div className="form">
          <img
            className="header-img"
            src="https://www.fotor.com/blog/wp-content/uploads/2017/09/1-2.jpg"
            // src="https://images.template.net/wp-content/uploads/2016/01/Car-Wash-Roll-Up-Banner-Template.jpg"
          />
          {fields2.map((elm, idx) => {
            return (
              <div key={elm.fieldId} className="field-wrap">
                <label htmlFor={elm.fieldId}>
                  <div className="lbl-img">
                    {elm.image && <img src={elm.image} />}
                  </div>
                  <div>
                    {elm.label}
                    <span className={elm.isRequired ? "req" : "not-req"}>
                      {"  *"}
                    </span>
                  </div>
                  <input
                    type={elm.type}
                    name={elm.fieldId}
                    placeholder={elm.placeholder}
                  />
                </label>
              </div>
            );
          })}
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
        </div>
      </div>
    </>
  );
};
