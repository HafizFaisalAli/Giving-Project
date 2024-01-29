import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice.js";
import donateSlice from "./slices/donateSlice.js";
import newDanteSlice from "./slices/newDante.js";
const store = configureStore({
  reducer: {
    auth: authSlice,
    donate: donateSlice,
    doner: newDanteSlice,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
