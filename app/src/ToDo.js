import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ToDo extends Component {
  constructor(props){
    super(props)

    this.onClick= this.onClick.bind(this)
    this.onDestroy= this.onDestroy.bind(this)

  }

  onClick(){
    console.log("hera")
      this.props.toggleCompleted(this.props.index)
  }

  onDestroy(){
    this.props.removeItem(this.props.index)
  }

  render() {
    var myJSX= this.props.completed ? (  <input className="toggle" type="checkbox" checked/>) : (  <input className="toggle" type="checkbox"/>)
    var myJSX2 = this.props.completed ? ("completed") : ("")


      return (
        <div className="view">
          <li className={myJSX2}>
            <div onClick={this.onClick}>
              {myJSX}
              <label>{this.props.name} </label>
            </div>
            <button className="destroy" onClick={this.onDestroy}></button>
          </li>
        </div>    );
  }
}

export default ToDo;
