import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Footer extends Component {
  constructor(props){
    super(props)
  }

  render() {

    return (

      <footer className="footer">
        <span className="todo-count"><strong>0</strong> item left</span>
        <ul className="filters">
          <li>
            <a className="selected" onClick={()=>{this.props.setFilter("all")}} href="#/">All</a>
          </li>
          <li>
            <a onClick={()=>{this.props.setFilter("active")}} href="#/active">Active</a>
          </li>
          <li>
            <a onClick={()=>{this.props.setFilter("completed")}} href="#/completed">Completed</a>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    );
  }
}

export default Footer;
