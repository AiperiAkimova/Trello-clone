import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  email: "aiperi@gmail.com",
  password: "123",
  formIsValid: false,
};

const loginSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser(state, action) {
      state.formIsValid =
        state.email === action.payload.email &&
        state.password === action.payload.password;
    },
    showColumn(state, action){
        state.showColumn = !state.showColumn
    }
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice;
