import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list';
import {Card} from './components/card/card';
import {SearchBox} from './components/search-box/search-box'
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url).then(response => response.json()).then(users => this.setState({monsters: users}))
  } 

  handleChange(e) {
    this.setState({searchField: e.target.value})
  }

  render() {
    const {monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <SearchBox 
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
