import { useEffect, useState } from "react";


const User = ({name,location}) => {
  const [count,setCount] = useState(0);
  const [count2] = useState(3);

  useEffect(()=>{

  },[count]);


  return (
    <div className="user-card">
        <h1>count={count},{count2}</h1>
        <h1>count={count2}</h1>
        <h2>name:{name}</h2>
        <h3>location:{location}</h3>
        <h4>contact:9495396735</h4>
    </div>
  );
};

export default User;