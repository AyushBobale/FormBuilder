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
  data: {},
  status: {},
};

const dataSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {},
});

export default dataSlice.reducer;
export const {} = dataSlice.actions;
