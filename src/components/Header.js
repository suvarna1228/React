 import { useState,useEffect, useContext } from "react";
import {LOGO_URL} from "../utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [btn,setBtn] = useState("Login");
    console.log("Header render");
 const onlineStatus = useOnlineStatus();
const {loggedInUser} =useContext(UserContext)

    useEffect(()=>{
        console.log("useeffect called");
    },[btn]);
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src = {LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
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
                    <li>
                        Cart
                    </li>
                    <button className="login"
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