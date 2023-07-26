import { combineReducers, configureStore } from "@reduxjs/toolkit";

import dataSlice from "./slices/dataSlice.js";
import { formApi } from "./slices/formApi.js";
import formSlice from "./slices/formSlice.js";

const rootReducer = combineReducers({
  data: dataSlice,
  form: formSlice,
  [formApi.reducerPath]: formApi.reducer,
});

export default configureStore({
  reducer: {
    rootReducer: rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(formApi.middleware),
});
