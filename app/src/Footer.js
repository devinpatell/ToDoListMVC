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
            <a className="selected" href="#/">All</a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    );
  }
}

export default Footer;
