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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
        element:<EstateDetails></EstateDetails>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/update',
        element:<UpdateProfile></UpdateProfile>
      },

      
    ]

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <FirebaseProvider>
    <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>,
)
