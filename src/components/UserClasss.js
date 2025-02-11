import React from 'react'
import UserContext from '../utils/UserContext';

class UserClasss extends React.Component {
  constructor(props){
    super(props);
     
    this.state={
      userInfo:{
        name:"dummy",
        location:"default",
         
      },
    };
 
  }
  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/suvarna1228");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  componentWillUnmount(){
    console.log("goneeeeeeeee");
  };
    render(){
      const { name,location,avatar_url } = this.state.userInfo;
  return (
    <div className='user-card'>
      <img src={avatar_url}></img>
        <h2>name: {name}</h2>
        <h3>location: {location}</h3>
        <h4>contact : 9495396735</h4>
        <div>
          <UserContext.Consumer>
            {({loggedInUser})=>(
              <h1 className='text-xl font-bold'>{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
    </div>
  );
}
}
export default UserClasss;