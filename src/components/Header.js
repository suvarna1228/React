 import { useState,useEffect } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [btn,setBtn] = useState("Login");
    console.log("Header render");

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
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About </Link>
                    </li>
                    <li>
                       <Link to="/contact">Contact Us </Link>
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
                </ul>
            </div>
        </div>
    );
};

export default Header;