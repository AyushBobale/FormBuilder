import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { formApi, formApiNew } from "./slices/formApi.js";

import { baseApi } from "./slices/rootApi.js";
import dataSlice from "./slices/dataSlice.js";
import formSlice from "./slices/formSlice.js";
import newFormSlice from "./slices/newFormSlice.js";

const rootReducer = combineReducers({
  data: dataSlice,
  form: formSlice,
  newForm: newFormSlice,
});

export default configureStore({
  reducer: {
    [formApiNew.reducerPath]: formApiNew.reducer,
    [formApi.reducerPath]: formApi.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
    rootReducer: rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(formApiNew.middleware)
      .concat(formApi.middleware)
      .concat(baseApi.middleware),
});
