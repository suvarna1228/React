import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body.js";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom" ;
import Contact from "./components/Contact.js";
import About from "./components/About";
import Error from "./components/Error.js";
import RestaurentMenu from "./components/RestaurentMenu.js";

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
                path: "/restaurants/:resId",
                element: <RestaurentMenu/>,
            },
         ],
        errorElement: <Error/>
    },
   
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
