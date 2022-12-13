import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "antd/dist/reset.css";
import Register from "./pages/signup";
import ResetPassword from "./pages/resetpassword";
import Page404 from "./pages/errors/404";
import Dashboard from "./pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Page404 />,
  },
  {
    path: "/sign-up",
    element: <Register />,
  },
  {
    path: "/forgotten-password",
    element: <ResetPassword />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default function RootApp() {
  return <RouterProvider router={router}></RouterProvider>;
}
