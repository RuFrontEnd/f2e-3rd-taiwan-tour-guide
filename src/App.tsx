import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./custom.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>home</div>,
  },
  {
    path: "/list",
    element: <div>list</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
