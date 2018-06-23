import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';

import { todos } from './components/todos.json';
console.log(todos);

class App extends Component {

 constructor(){
   //necesario super
   super();
   this.state = {
      todos
   }
 }


  render() {


 const todos = this.state.todos.map((todo, i) => {
      return (
          <div className="card">
             { todo.title  }
          </div>
      )
  });

    return (
      <div className="App">
          <nav className="navbar navbar-dark bg-dark">
              <a href="" className="text-white">
             
              </a> 
          </nav>
            {  todos }
          <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
