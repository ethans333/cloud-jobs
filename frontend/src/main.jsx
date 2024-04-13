import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home.jsx";
import Jobs from "./Pages/Jobs.jsx";
import Sidebar from "./Components/Sidebar.jsx";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar children={<Home />} />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
