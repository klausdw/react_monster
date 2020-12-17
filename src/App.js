import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.jsx';

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
        <CardList mosnters={this.state.mosnters} />
      </div>
    )
  }
}

export default App;
