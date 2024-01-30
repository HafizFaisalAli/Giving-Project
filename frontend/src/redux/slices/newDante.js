import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  donateId: null,
  success: false,
};

const donate = createSlice({
  name: "donate",
  initialState,
  reducers: {
    donateCreated: (state, { payload }) => {
      state.newDonate = payload;
      state.success = true;
    },
    resetDonate: (state) => {
      state.newDonate = null;
      state.success = false;
    },
  },
});

export const { donateCreated, resetDonate } = donate.actions;

export default donate.reducer;
