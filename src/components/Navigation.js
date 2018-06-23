import React, { Component } from 'react';

//Cada componente tienen un método llamado render
export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
            { this.props.titulo }
          </a>
      </nav>
    )
  }
}
//ReactDOM.render(<Navigation/>, document.getElementById('app'));
