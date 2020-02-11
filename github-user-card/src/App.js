import React from 'react';
import axios from 'axios';

import GitHubLogo from './images/githublogo.png';
import LambdaLogo from './images/lambdalogo.png';

import UserCard from './componenets/User'; 
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: {}, 
      followers: [],
      searchResult: '',
      searchTerm: '',
      handleChange: e => {
        this.setState({ searchTerm: e.target.value })
      },
      handleSubmit: e => {
        e.preventDefault();
        this.setState({
          followers: this.state.friends.filter(
            friend => friend.login == this.state.searchTerm 
          )
        })
      }
  }
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


  fetchSearchResult = e => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.searchTerm}`)
      .then(res => {
        console.log(res)
        this.setState({
          user: res.data
        })
      })
      .catch(err => console.log(err));

    axios
      .get(`https://api.github.com/users/${this.state.searchTerm}/followers`)
      .then(res => {
       this.setState({
         followers: res.data
       })
      })
      .catch(err => console.log(err));
      
  }

  


  render() {
    return (

      <div className="App">
        <div className="header">
          <img src = {LambdaLogo} alt = 'Lambda Logo' />
          <p>❤️'s</p>
          <img src = {GitHubLogo} alt = 'GitHub Logo' />
        </div>
        <h1>GitHub Cards in React!</h1>
        <form>
          <label htmlFor = 'Search'>
            <input 
              name = 'name'
              type = 'text'
              placeholder = 'Search'
              value = {this.state.searchTerm}
              onChange = {this.state.handleChange}
            />
            <button onClick = {this.fetchSearchResult}>Search</button>
          </label>
        </form>
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

        
          {this.state.followers.map(follower => (
          <div key = {follower.id} className = 'userContainer'>
            <UserCard
            
            name = {follower.login}
            avatar = {follower.avatar_url}
            link = {follower.html_url}
            />
          </div>
          ))
        }

      </div>    
    </div>

    );
  }
}

export default App;
