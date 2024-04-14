import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import Login from './Pages/Login/Login.jsx';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider.jsx';
import Home from './Pages/Home/Home.jsx';
import Register from './Pages/Login/Register.jsx';
import EstateDetails from './Pages/Estate/EstateDetails.jsx';
import UpdateProfile from './Pages/UpdateProfile/UpdateProfile.jsx';
import About from './Pages/About/About.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import ContactUs from './Pages/ContactUs/ContactUs.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/estate/:id",
        loader: ()=> fetch('/data.json'),
        element:<PrivateRoute>
          <EstateDetails></EstateDetails>
        </PrivateRoute>
        // element:<EstateDetails></EstateDetails>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/update',
        element:<UpdateProfile></UpdateProfile>
      },
      {
        path:'/contact',
        element:<PrivateRoute><ContactUs></ContactUs></PrivateRoute>
      }

      
    ]

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <FirebaseProvider>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
    </FirebaseProvider>
  </React.StrictMode>,
)
