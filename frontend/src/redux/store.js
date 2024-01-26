import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice.js";
import donateSlice from "./slices/donateSlice.js";

const store = configureStore({
  reducer: {
    auth: authSlice,
    donate: donateSlice,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
