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
  data: { questions: [] },
  status: {},
};

const newFormSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {},
});

export default newFormSlice.reducer;
export const {} = newFormSlice.actions;
