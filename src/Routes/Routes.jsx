import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Root from '../Pages/Root/Root';
import Error from '../Pages/Error Page/Error';
import Home from '../Pages/Home/Home';
import Services from '../Pages/Services/Services';
import ServiceDetails from '../Pages/Service Details/ServiceDetails';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import AuthLayout from '../layouts/AuthLayout';
import MyProfile from '../Pages/My Profile/MyProfile';
import PrivateRoute from '../Components/PrivateRoute';
import ForgotPassword from '../Pages/Forgot Password/ForgotPassword';
import Contacts from '../Pages/ContactNav/Contacts';
import About from './../Pages/About/About';



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
            path: '/about',
            element: <About></About> ,
            loader: () => fetch("/WinterCareData.json").then(res => res.json()),
        },
         {
            path: '/contact',
            element: <Contacts></Contacts> ,
            loader: () => fetch("/WinterCareData.json").then(res => res.json()),
        }, 
        {
          path: '/serviceDetails/:id',
          element: ( 
            <PrivateRoute>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            ),
          loader: () => fetch("/WinterCareData.json").then(res => res.json()),
        },
        {
              path: 'myProfile',
              element: (
                <PrivateRoute>
                  <MyProfile></MyProfile>
                </PrivateRoute>
              )
        }
         
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
            },
        {
          path: 'forgotPassword',
          element: <ForgotPassword></ForgotPassword>
        }

            
          ]
        }
]);