import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './components/Main';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from './components/Register/Register';
import Login from "./components/Login/Login"
import ErrorPage from './components/ErrorPage';

const routes = createBrowserRouter([
  {
    path:"/",
    element:<Main/>,
    errorElement: <ErrorPage />,
  },
  {
    path:"/register",
    element: <Register/>
  },
  {
    path:"/login",
    element: <Login />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider  router={routes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
