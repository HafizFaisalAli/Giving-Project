import { configureStore } from "@reduxjs/toolkit";
import donateSlice from "./donate/donateSlice.js";

const store = configureStore({
  reducer: {
    donate: donateSlice,
  },
});

export default store;
