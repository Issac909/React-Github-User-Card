import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    users: []
  }
  
  componentDidMount() {
  axios
  .get('https://api.github.com/users/Issac909')
  .then(res => {
    console.log(res)
  })
  .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <img src = './public/lambdalogo.png' alt = 'Lambda Logo' />
          <p>❤️'s</p>
          <img src = '/public/githublogo.png' alt = 'GitHub Logo' />
        </div>
      </div>
    );
  }
}

export default App;
