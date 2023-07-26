import "./Forms.css";

import React, { useEffect } from "react";

import { useGetFormsQuery } from "../../redux/slices/formApi";

const Forms = () => {
  const getForms = useGetFormsQuery();
  return (
    <div className="forms-wrapper">
      <h2>Forms</h2>
      <div className="forms-table">
        {/* <div className="forms-row">
          {getForms.data?.data?.forms?.map((elm) => {
            return <p>{JSON.stringify(elm)}</p>;
          })}
        </div> */}
        <p>{JSON.stringify(getForms)}</p>
      </div>
    </div>
  );
};

export default Forms;
