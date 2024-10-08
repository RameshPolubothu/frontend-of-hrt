import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import router from "./Router/router"; // Adjust the path as needed
import {store}  from "./redux/store.js";
ReactDOM.createRoot(document.getElementById('root')).render(
      <Provider store = {store}>
        <RouterProvider router={router} />
      </Provider>
);
