import {
    createBrowserRouter,

  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";

  export const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h1>This page is not available</h1>,
      children:[
        {
            path: "/",
            element: <Home></Home>,

        },
      ]
    },
  ]);