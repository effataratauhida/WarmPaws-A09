import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import Error from '../Pages/Error Page/Error';
import Home from '../Pages/Home/Home';
import Services from '../Pages/Services/Services';
import ServiceDetails from '../Pages/Service Details/ServiceDetails';
import Contact from '../Pages/Contact Us/Contact';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import AuthLayout from '../layouts/AuthLayout';



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
        {
            index: true,
            loader: () => fetch("/WinterCareData.json").then(res => res.json()),
            element: <Home></Home>
        },
        {
            path: '/services',
            element: <Services></Services>,
            loader: () => fetch("/WinterCareData.json").then(res => res.json()),
        }, 
        {
          path: '/serviceDetails/:id',
          element: <ServiceDetails></ServiceDetails>,
          loader: () => fetch("/WinterCareData.json").then(res => res.json()),
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        
    ]
  },
  {
          path: '/auth',
          element: <AuthLayout></AuthLayout>,
          children: [
            {
              path: 'login',
              element: <Login></Login>
            },
            {
              path: 'register',
              element: <Register></Register>
            }
          ]
        }
]);