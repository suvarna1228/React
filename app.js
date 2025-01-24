import React from "react";
import ReactDOM from "react-dom/client";
// react element
const Title=()=>(
    <h1>hi titlee component</h1>
);
// react functional componet
const HeadingComponent  = ()=>(
    <div id="container">
    <Title/>
    <h1 className="heading">this is jsx</h1>
    </div>
);
 

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/ >); 