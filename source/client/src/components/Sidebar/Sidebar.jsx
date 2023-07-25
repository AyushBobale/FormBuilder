import "./Sidebar.css";

import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { setHeaderImage } from "../../redux/slices/formSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const inputTypes = useSelector(
    (state) => state?.rootReducer?.form?.data?.types
  );
  const handleHeaderImage = (e) => {
    dispatch(setHeaderImage(e.target.value));
  };
  return (
    <div className="sidebar-wrap">
      <div className="sidebar">
        <p>
          <label htmlFor="header-img">Add link to header Image</label>
          <input id="header-img" type="text" onChange={handleHeaderImage} />
        </p>
        {Object.keys(inputTypes).map((elm, idx) => {
          return <p>{inputTypes[elm]}</p>;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
