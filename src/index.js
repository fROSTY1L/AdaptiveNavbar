import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, Route, RouterProvider} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Quiz from './pages/Quiz';
import Converter from './pages/Converter';
import FriendsList from './pages/FriendsList';

const router = createBrowserRouter([{
  path: "/",
  element: <App/>,
  children:[
    {
    path: "",
    element: <Home/>
    },
    {
      path:"about",
      element: <About/>
    },
    {
      path:"quiz",
      element:<Quiz/>
    },
    {
      path:"converter",
      element: <Converter/>
    },
    {
      path:"friends-list",
      element: <FriendsList/>
    }
]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);
