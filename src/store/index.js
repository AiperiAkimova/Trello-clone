import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import modalSlice from "./slices/modalSlice";
import columnSlice from "./slices/trelloSlice";
import uiSlice from "./slices/uiSlices";

const store = configureStore({
  reducer: {
    user: loginSlice.reducer,
    column: columnSlice.reducer,
    uiSlice: uiSlice.reducer,
    modal: modalSlice.reducer,
  },
});

export default store;
