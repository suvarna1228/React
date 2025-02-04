import React from 'react'

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
    </div>
  );
}
}
export default UserClasss;