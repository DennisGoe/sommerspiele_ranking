import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    confirmLogin(state) {
      state.auth = true;
    },
  },
});

export const { confirmLogin } = authSlice.actions;
export default authSlice;
