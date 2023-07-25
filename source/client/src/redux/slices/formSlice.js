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
    removeField: (state, { payload }) => {},
    editField: (state, { payload }) => {},
    moveField: (state, { payload }) => {},
  },
});

export default dataSlice.reducer;
export const { setHeaderImage, addField, removeField, editField, moveField } =
  dataSlice.actions;
