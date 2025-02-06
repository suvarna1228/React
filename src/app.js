import React, {lazy, Suspense} from "react";
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

const Grocery = lazy(()=> import("./components/Grocery.js"));

const AppLayout = () => {
    return (
    <div className="app">
        <Header/>
        <Outlet/>
        </div>
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
