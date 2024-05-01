

import './App.css';
import Header from "./components/Header.js";
//import shimmer from "./Shimmer";
import RestaurantMenu from './components/RestaurantMenu.js';

import Body from "./components/Body";
import About from './components/About.js';
import Contact from './components/Contact.js';
//import Groceries from './components/Groceries.js';
import { lazy, Suspense } from 'react';
import Error from './components/Error.js';
 

import {createBrowserRouter, Outlet} from "react-router-dom";

// Header
// - Company Logo
// - Navigation links i.e About, Contact Us, Cart





export const Groceries = lazy(() => 
  import("./components/Groceries.js")
);

//for lazy , plase chck your notes

 export const App = () => {

  return (
    <>
     <Header />
     <Outlet />
    </>   
  )
 }
 

 // In Above Outlet does, if the path is / > it will render App Element. If the path is /about it will render About Element. 
 // If the path is /contact it will render Contact Element.


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Body/>,
        errorElement: <Error/>,
      }
      ,{
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/Groceries",
        element: (<Suspense fallback={<h1> Loading..... </h1>}><Groceries/></Suspense>
         ),
        },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu  />,
      },

    ],
    errorElement: <Error/>,

  },

 ]);


 

 /*const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  )
 }*/
  // Previous Code>>>>>>>>>>>>>>>>>>>

 /* const App = () => {

  return (
    <>
     <Header />
  
    <Body />
    </>   
  )
 } */

 export default appRouter;
 



