import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "antd/dist/reset.css";
import Register from "./pages/signup";
import ResetPassword from "./pages/resetpassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-up",
    element: <Register />,
  },
  {
    path: "/forgotten-password",
    element: <ResetPassword />,
  },
]);

export default function RootApp() {
  return <RouterProvider router={router}></RouterProvider>;
}
