import React, { Component } from 'react';

export default class TodoForm extends Component {
  
  constructor () {
    super();
    this.state = {
      title: '',
      responsible: '',
      description: '',
      priority: 'low'
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleInput(e){
  const {value, name} = e.target;
   this.setState({
     [name]: value
   });
   console.log(this.state);
  }

  handleSubmit(e){
     e.preventDefault();
     console.log('Enviando los datos');
      this.props.onAddTodo(this.state);
      this.setState({
      title: '',
      responsible: '',
      description: '',
      priority: 'low'
    });
  }

  render() {

    return (
      <div className="card">
        <form  onSubmit={ this.handleSubmit } className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="title"
              onChange={this.handleInput}
              className="form-control"
              placeholder="Title"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsible"
              onChange={this.handleInput}
              className="form-control"
              placeholder="Responsible"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              onChange={this.handleInput}
              className="form-control"
              placeholder="Description"
              />
          </div>
          <div className="form-group">
            <select
                name="priority"
                className="form-control"
                onChange={this.handleInput}
              >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    )
  }

}
