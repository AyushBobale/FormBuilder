import { combineReducers, configureStore } from "@reduxjs/toolkit";

import dataSlice from "./slices/dataSlice.js";
import formSlice from "./slices/formSlice.js";

const rootReducer = combineReducers({
  data: dataSlice,
  form: formSlice,
});

export default configureStore({
  reducer: {
    rootReducer: rootReducer,
  },
  // middleware: [thunk],
});
