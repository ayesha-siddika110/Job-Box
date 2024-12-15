import {
    createBrowserRouter,

  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import FindJob from "../pages/FindJob/FindJob";
import PrivetRouter from "./PrivetRouter/PrivetRouter";
import PublishJob from "../pages/PublishJob/PublishJob";
import JobApply from "../pages/JobApply/JobApply";

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
        {
          path:"/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/findJob",
          element: <FindJob></FindJob>
        },
        {
          path: "/publishJob",
          element: <PrivetRouter><PublishJob></PublishJob></PrivetRouter>
        },
        {
          path: "/jobApply/:id",
          element: <PrivetRouter><JobApply></JobApply></PrivetRouter>
        }
        

      ]
    },
  ]);