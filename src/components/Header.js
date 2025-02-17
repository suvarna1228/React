 import { useState,useEffect, useContext } from "react";
import {LOGO_URL} from "../utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btn,setBtn] = useState("Login");
    
 const onlineStatus = useOnlineStatus();
const {loggedInUser} =useContext(UserContext)

    useEffect(()=>{
       
    },[btn]);

// subscribing
    const cartItems = useSelector((store) => store.cart.items);
    

    return(
        <div className="header m-2">
            <div className="logo-container">
                <img className="logo" src = {LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul className="font-semibold">
                    <li>
                       Online Status:{onlineStatus ? "🟢":"🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About </Link>
                    </li>
                    <li>
                       <Link to="/contact">Contact Us </Link>
                    </li>
                    <li>
                       <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="font-bold text-lg">
                        <Link to="/cart">Cart-({cartItems.length}items)</Link>
                    </li>
                    <button className="login border bg-black  m-2 text-white  border-black "
                    onClick={()=>{
                        setBtn(btn === "Login" ? "Logout" : "Login");
                    }}>
                      {btn}  
                    </button>
                    <li className="px-4 font-bold">
                        {loggedInUser}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;