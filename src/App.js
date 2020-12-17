import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      mosnters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ mosnters: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { mosnters, searchField } = this.state;
    const filteredMonsters = mosnters.filter(mosnters =>
      mosnters.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList mosnters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
