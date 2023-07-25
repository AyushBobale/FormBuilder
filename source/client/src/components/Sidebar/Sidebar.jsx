import "./Sidebar.css";

import { addField, setHeaderImage } from "../../redux/slices/formSlice";
import { useDispatch, useSelector } from "react-redux";

import React from "react";

const Sidebar = () => {
  const dispatch = useDispatch();
  const inputTypes = useSelector(
    (state) => state?.rootReducer?.form?.data?.types
  );
  const formData = useSelector((state) => state?.rootReducer?.form?.data?.form);

  const handleHeaderImage = (e) => {
    dispatch(setHeaderImage(e.target.value));
  };

  const handleBtnClick = (type) => {
    dispatch(
      addField({
        fieldId: `${type}_${formData?.fields?.length}`,
        label: `${type}_${formData?.fields?.length}`,
        placeholder: `${type}_${formData?.fields?.length}`,
        image: ``,
        type: type,
        isRequired: true,
      })
    );
  };

  return (
    <div className="sidebar-wrap">
      <div className="sidebar">
        <h3>Add Inputs</h3>
        <p>
          <label htmlFor="header-img">Add link to header Image</label>
          <input id="header-img" type="text" onChange={handleHeaderImage} />
        </p>
        {Object.keys(inputTypes).map((elm, idx) => {
          return (
            <button
              onClick={() => {
                handleBtnClick(inputTypes[elm]?.value);
              }}
            >
              {" "}
              {inputTypes[elm]?.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
