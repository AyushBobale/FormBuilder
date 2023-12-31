import "./Forms.css";

import React, { useEffect } from "react";
import {
  useDeleteFromMutation,
  useGetFormsQuery,
} from "../../redux/slices/formApi";

import { Link } from "react-router-dom";
import { ROUTES } from "../../config";

const Forms = () => {
  const getForms = useGetFormsQuery();
  const [deleteForm, result] = useDeleteFromMutation();
  return (
    <div className="forms-wrapper">
      <h2>Forms</h2>
      <div className="forms-table">
        <div className="forms-row-head">
          <p>Sr No</p>
          <p>Form Name</p>
          <p>Responses</p>
          <p>Fill</p>
          <p>Delete</p>
        </div>

        {getForms.data?.data?.forms?.map((elm, idx) => {
          return (
            <div className="forms-row">
              <p>{idx + 1}.</p>
              <p>{elm?.formName}</p>

              <Link to={ROUTES.RESPONSES(elm?._id)}>Responses</Link>

              <Link to={ROUTES.FILL(elm?._id)}>Fill</Link>

              <button onClick={() => deleteForm(elm?._id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forms;
