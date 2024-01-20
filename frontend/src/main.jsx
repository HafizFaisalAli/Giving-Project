import React from "react";
import ReactDOM from "react-dom/client";
import "animate.css";
import routes from "./routes";
import { RouterProvider } from "react-router-dom";
import store from './redux/store'
import { Provider } from "react-redux";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </>
);
