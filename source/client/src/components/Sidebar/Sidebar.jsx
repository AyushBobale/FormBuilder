import "./Sidebar.css";

import React, { useEffect, useState } from "react";
import {
  addField,
  changeFormName,
  discardEditChanges,
  handleEditChange,
  resetForm,
  saveEditChanges,
  setHeaderImage,
} from "../../redux/slices/formSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";

import { ROUTES } from "../../config";
import { addQ } from "../../redux/slices/newFormSlice";
import { useCreateFormMutation } from "../../redux/slices/formApi";

const Sidebar = () => {
  const location = useLocation();
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const [createFrom, result] = useCreateFormMutation();
  const inputTypes = useSelector(
    (state) => state?.rootReducer?.form?.data?.types
  );
  const formData = useSelector((state) => state?.rootReducer?.form?.data?.form);
  const editData = useSelector(
    (state) => state?.rootReducer?.form?.data?.form?.fieldEdited
  );

  const handleHeaderImage = (e) => {
    dispatch(setHeaderImage(e.target.value));
  };

  const handleBtnClick = (type) => {
    dispatch(
      addField({
        fieldId: `${type}_${count}`,
        label: `${type}_${count}`,
        placeholder: `${type}_${count}`,
        image: ``,
        type: type,
        isRequired: true,
      })
    );
    setCount((count) => count + 1);
  };

  const handleFormName = (e) => {
    dispatch(changeFormName(e.target.value));
  };
  const handleDiscard = () => {
    dispatch(discardEditChanges());
  };
  const handleEdit = (data) => {
    dispatch(handleEditChange(data));
  };
  const handleSave = () => {
    dispatch(saveEditChanges());
  };
  const handleFormSubmit = () => {
    createFrom({
      formName: formData?.formName,
      formHeaderImage: formData?.formHeaderImage,
      fields: formData?.fields,
    });
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (result.data?.success) {
      navigate(ROUTES.FORMS);
      dispatch(resetForm());
    }
  }, [result.data]);

  // New form fucntions----------------------------------------------------------
  const addCatQue = () => {
    dispatch(
      addQ({
        type: "CAT",
        question: "Please edit the question",
        questionImg: "",
        data: { cats: [], options: [] },
      })
    );
  };
  const addFillQue = () => {
    dispatch(
      addQ({
        type: "FILL",
        question: "Please edit the question",
        questionImg: "",
        data: {
          sentence: [],
          options: [],
        },
      })
    );
  };
  const addCompQue = () => {
    dispatch(
      addQ({
        type: "COMP",
        question: "Please edit the question",
        questionImg: "",
        data: {
          passage: "",
          questions: [],
        },
      })
    );
  };
  //-----------------------------------------------------------------------------

  if (location.pathname == ROUTES.NEW_FORM_BUILDER) {
    return (
      <div
        className={
          location.pathname == ROUTES.NEW_FORM_BUILDER
            ? "sidebar-wrap"
            : "sidebar-wrap-hidden"
        }
      >
        <div className="sidebar">
          <h3>Options</h3>
          <p className="new-btn" onClick={addCatQue}>
            Add Categorize Question
          </p>
          <p className="new-btn" onClick={addFillQue}>
            Add Fill up{" "}
          </p>
          <p className="new-btn" onClick={addCompQue}>
            Add Comprehension Question
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={
        location.pathname == "/" ? "sidebar-wrap" : "sidebar-wrap-hidden"
      }
    >
      <div className="sidebar">
        <p>
          <label htmlFor="header-img">Form Name</label>
          <input
            id="header-img"
            type="text"
            onChange={handleFormName}
            value={formData?.formName}
          />
        </p>
        <p>
          <label htmlFor="header-img">Add link to header Image</label>
          <input
            id="header-img"
            type="text"
            onChange={handleHeaderImage}
            value={formData?.formHeaderImages}
          />
        </p>
        <button onClick={handleFormSubmit}>Save Form</button>
        {formData?.fieldEdited?.fieldId && (
          <div className="edit-field">
            <h3>Edit Field</h3>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={editData?.label}
              onChange={(e) => {
                handleEdit({ label: e.target.value });
              }}
            />
            <label htmlFor="placeholder">Placeholder</label>
            <input
              type="text"
              id="placeholder"
              value={editData?.placeholder}
              onChange={(e) => {
                handleEdit({ placeholder: e.target.value });
              }}
            />
            <label htmlFor="image">Question Image</label>
            <input
              type="text"
              id="image"
              value={editData?.image}
              onChange={(e) => {
                handleEdit({ image: e.target.value });
              }}
            />
            <span>
              <button onClick={handleSave}>Save</button>
              <button onClick={handleDiscard}>Discard</button>
            </span>
          </div>
        )}
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
