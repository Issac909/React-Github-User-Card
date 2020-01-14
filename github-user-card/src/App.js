import React from 'react';
import axios from 'axios';

import GitHubLogo from './images/githublogo.png';
import LambdaLogo from './images/lambdalogo.png';

import UserCard from './componenets/User'; 
import './App.css';

class App extends React.Component {
  state = {
    user: {}, 
    followers: []
  }
  
  componentDidMount() {
  axios
  .get('https://api.github.com/users/Issac909')
  .then(res => {
    console.log(res.data)
    this.setState({
      user: res.data
    })
  })
  .catch(err => console.log(err));  
  
  axios
  .get('https://api.github.com/users/Issac909/followers')
  .then(res => {
    console.log(res.data)
    this.setState({
      followers: res.data
    })
  })
  .catch(err => console.log(err));
  };



  render() {
    return (

      <div className="App">
        <div className="header">
          <img src = {LambdaLogo} alt = 'Lambda Logo' />
          <p>❤️'s</p>
          <img src = {GitHubLogo} alt = 'GitHub Logo' />
        </div>
        <h1>GitHub Cards in React!</h1>
        <div className = 'cardContainer'>
          
          <div className = 'userContainer'>
          { <UserCard 
            name = {this.state.user.login}
            id = {this.state.user.id}
            link = {this.state.user.html_url}
            avatar = {this.state.user.avatar_url}
            bio = {this.state.user.bio}
            /> }
          </div>

        <div className = 'userContainer'> 
          {this.state.followers.map(follower => (
            <UserCard
            name = {follower.login}
            id = {follower.id}
            avatar = {follower.avatar_url}
            link = {follower.html_url}
            />
          ))
        }
        </div>  
      </div>    
    </div>

    );
  }
}

export default App;
