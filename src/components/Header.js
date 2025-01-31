 import { useState,useEffect } from "react";
import {LOGO_URL} from "../utils/constants";

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
                        Home
                    </li>
                    <li>
                        About Us
                    </li>
                    <li>
                        Contact Us
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