import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list';
import {Card} from './components/card/card';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      monsters: []
    }
  }

  componentDidMount(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url).then(response => response.json()).then(users => this.setState({monsters: users}))
  } 

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}/>
      </div>
    );
  }
}

export default App;
