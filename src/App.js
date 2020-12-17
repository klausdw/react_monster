import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      mosnters: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ mosnters: users }));
  }

  render() {
    return (
      <div className="App">
        {
          this.state.mosnters.map(monster => <h1 key={monster.id}> {monster.name} </h1>)
        }
      </div>
    )
  }
}

export default App;
