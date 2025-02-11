import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body.js";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom" ;
import Contact from "./components/Contact.js";
import About from "./components/About";
import Error from "./components/Error.js";
import RestaurentMenu from "./components/RestaurentMenu.js";
// import Grocery from "./components/Grocery.js";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext.js";

const Grocery = lazy(()=> import("./components/Grocery.js"));


const AppLayout = () => {
    const [userName,setUserName]=useState();

useEffect(()=>{
    const data={
        name:"suvarna",
    };
    setUserName(data.name);
},[]);
    return (
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        <div className="app">
        <Header/>
        <Outlet/>
        </div>
        </UserContext.Provider>

    );
 
};
 
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
         children:[
            {
               path:"/",
               element:<Body/>
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/Contact",
                element: <Contact/>
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>loading...</h1>}><Grocery /></Suspense>,
            },

            {
                path: "/restaurants/:resId",
                element: <RestaurentMenu/>,
            },
         ],
        errorElement: <Error/>
    },
   
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
