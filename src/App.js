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

  render() {
    const { mosnters, searchField } = this.state;
    const filteredMonsters = mosnters.filter(mosnters =>
      mosnters.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <SearchBox 
          placeholder='search monsters'
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList mosnters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
