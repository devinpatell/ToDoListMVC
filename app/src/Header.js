import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends Component {
  constructor(props){
    super(props)

    this.state = {
      newTask:""
    }

    this.onChange= this.onChange.bind(this)
    this.onSubmit= this.onSubmit.bind(this)
  }

  onChange(event){
    this.setState({newTask:event.target.value})
  }

  onSubmit(event){
    this.props.addItem(this.state.newTask)
    this.setState({newTask: ""})
    event.preventDefault()
  }

  render() {
    console.log(this.state.newTask)
    return (

      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.onSubmit}>
          <input className="new-todo" placeholder="What needs to be done?" onChange={this.onChange} value={this.state.newTask}/>
          <input type="submit" value="submit"/>
        </form>
      </header>
    );
  }
}

export default Header;
