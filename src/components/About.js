import User from "./User";
import React, { Component } from "react";
import UserClasss from "./UserClasss";

class About extends React.Component {
    constructor(props){
        super(props);
        console.log("parent constructor");
    }
    componentDidMount(){
        console.log("componrt did mount parent")
    }
    render(){
        console.log("parent Render");
        return(
            <div>
                <h1>About</h1>
                <h2>This is Nmaste React</h2>  
                <UserClasss name={"suvarna from (class)"} location={"kerala"} />
            </div>
    );
   }
};

export default About;