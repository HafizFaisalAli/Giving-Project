import React from "react";
import ReactDOM from "react-dom/client";
import "animate.css";
import routes from "./routes";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={routes} />
  </>
);
