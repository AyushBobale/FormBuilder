import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  errorData: {
    message: "",
    type: "",
    errors: [],
  },
  isError: false,
  // "https://www.fotor.com/blog/wp-content/uploads/2017/09/1-2.jpg"
  data: {
    types: {
      tel: { value: "tel", name: "Telephone" },
      text: { value: "text", name: "Text" },
      password: { value: "password", name: "Password" },
      number: { value: "number", name: "Number" },
      file: { value: "file", name: "File" },
      time: { value: "time", name: "Time" },
      email: { value: "email", name: "Email" },
      color: { value: "color", name: "Color" },
      date: { value: "date", name: "Date" },
      datetimeLocal: { value: "datetime-local", name: "Date & Time" },
      url: { value: "url", name: "URL" },
      search: { value: "search", name: "Search" },
      // hidden: "hidden",
      // image: "image",
      // month: "month",
      // week: "week",
      // ----------------------------
      button: { value: "button", name: "Button" },
      // checkbox: "checkbox",
      // radio: "radio",
      // range: "range",
      // reset: "reset",
      // submit: "submit",
    },
    form: {
      formName: "",
      fieldEdited: {
        fieldId: "",
        label: "",
        placeholder: "",
        image: "",
        type: "",
        isRequired: false,
      },
      formHeaderImage:
        "https://www.freewebheaders.com/wp-content/gallery/abstract-size-800x200/cache/gray-red-feathers-abstract-art-header-800x200.jpg-nggid0511676-ngg0dyn-800x200x100-00f0w010c010r110f110r010t010.jpg",
      fields: [],
    },
  },
  status: {},
};

const dataSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    setHeaderImage: (state, { payload }) => {
      state.data.form.formHeaderImage = payload;
    },
    addField: (state, { payload }) => {
      state.data.form.fields = [...state.data.form.fields, payload];
    },
    moveFieldUp: (state, { payload }) => {
      const fromIndex = payload.idx;
      const toIndex = Math.max(0, fromIndex - 1);
      const elm = state.data.form.fields.splice(fromIndex, 1)[0];
      state.data.form.fields.splice(toIndex, 0, elm);
    },
    moveFieldDown: (state, { payload }) => {
      const fromIndex = payload.idx;
      const toIndex = Math.min(state.data.form.fields.length, fromIndex + 1);
      const elm = state.data.form.fields.splice(fromIndex, 1)[0];
      state.data.form.fields.splice(toIndex, 0, elm);
    },
    editField: (state, { payload }) => {
      state.data.form.fieldEdited = state.data.form.fields[payload];
    },
    removeField: (state, { payload }) => {
      const elm = state.data.form.fields.splice(payload, 1)[0];
      if (elm?.fieldId == state.data.form.fieldEdited.fieldId) {
        state.data.form.fieldEdited = {
          fieldId: "",
          label: "",
          placeholder: "",
          image: "",
          type: "",
          isRequired: false,
        };
      }
    },
    discardEditChanges: (state, { payload }) => {
      state.data.form.fieldEdited = {
        fieldId: "",
        label: "",
        placeholder: "",
        image: "",
        type: "",
        isRequired: false,
      };
    },
    saveEditChanges: (state, { payload }) => {
      const index = state.data.form.fields
        .map((elm) => elm.fieldId)
        .indexOf(state.data.form.fieldEdited.fieldId);
      state.data.form.fields[index] = state.data.form.fieldEdited;
      state.data.form.fieldEdited = {
        fieldId: "",
        label: "",
        placeholder: "",
        image: "",
        type: "",
        isRequired: false,
      };
    },
    handleEditChange: (state, { payload }) => {
      state.data.form.fieldEdited = {
        ...state.data.form.fieldEdited,
        ...payload,
      };
    },
    changeFormName: (state, { payload }) => {
      state.data.form.formName = payload;
    },
  },
});

export default dataSlice.reducer;
export const {
  setHeaderImage,
  addField,
  removeField,
  editField,
  moveFieldDown,
  moveFieldUp,
  discardEditChanges,
  saveEditChanges,
  handleEditChange,
  changeFormName,
} = dataSlice.actions;
