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
      tel: "tel",
      text: "text",
      password: "password",
      number: "number",
      file: "file",
      time: "time",
      email: "email",
      color: "color",
      date: "date",
      datetimeLocal: "datetime-local",
      url: "url",
      search: "search",
      // hidden: "hidden",
      // image: "image",
      // month: "month",
      // week: "week",
      // ----------------------------
      button: "button",
      // checkbox: "checkbox",
      // radio: "radio",
      // range: "range",
      // reset: "reset",
      // submit: "submit",
    },
    form: {
      formHeaderImage: "",
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
    addField: (state, { payload }) => {},
    removeField: (state, { payload }) => {},
    editField: (state, { payload }) => {},
    moveField: (state, { payload }) => {},
  },
});

export default dataSlice.reducer;
export const { setHeaderImage } = dataSlice.actions;
