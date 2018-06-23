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
           <div className="col-md-4">

                <div className="card">
                      <div className="card-header">
                        <h3>   { todo.title  } </h3>
                      </div>
                      <div className="card-body">
                          <p>  { todo.description } </p>
                      </div>
                    
                </div>
           
           </div>
      )
  });

    return (
      <div className="App">
          <nav className="navbar navbar-dark bg-dark">
              <a href="" className="text-white">
                 Tasks
              </a> 
          </nav>
          
          <div className="container">
             <div className="row mt-4">
                {  todos }
              </div>
           </div>
          <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
