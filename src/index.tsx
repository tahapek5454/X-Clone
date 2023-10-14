import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import {RouterProvider} from "react-router-dom";
import routes from "./routes";
import './assets/css/tailwind.css'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <RouterProvider router={routes} />
  </>
);

reportWebVitals();
