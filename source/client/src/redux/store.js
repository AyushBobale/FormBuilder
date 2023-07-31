import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { baseApi } from "./slices/rootApi.js";
import dataSlice from "./slices/dataSlice.js";
import { formApi } from "./slices/formApi.js";
import formSlice from "./slices/formSlice.js";
import newFormSlice from "./slices/newFormSlice.js";

const rootReducer = combineReducers({
  data: dataSlice,
  form: formSlice,
  newForm: newFormSlice,
});

export default configureStore({
  reducer: {
    [formApi.reducerPath]: formApi.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
    rootReducer: rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(formApi.middleware)
      .concat(baseApi.middleware),
});
