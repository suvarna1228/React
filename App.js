
import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement(
    "div" , 
    {id:"parent"}, 
    React.createElement(
        "div" , 
        {id:"child"},
        [
            React.createElement("h1", {}, "hi iam h1"),
            React.createElement("h2", {}, "hi iam h2")
        ]
        )
    );

console.log(parent);
// const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, "hi");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);  