import React, { Component } from 'react';
import logo from './logo.svg';
import ToDo from './ToDo.js'

class Main extends Component {
  constructor(props){
    super(props)
  }

  render() {
    var items = this.props.items
    var arr = []
    for(var i = 0; i < items.length; i++){
      if(this.props.filter == "active"){
        if(!items[i].completed){
          arr.push(<ToDo name={items[i].name} completed={items[i].completed} index={i} toggleCompleted={this.props.toggleCompleted}  removeItem={this.props.removeItem}/>)
        }
      }
      else if (this.props.filter == "completed") {
        if(items[i].completed){
          arr.push(<ToDo name={items[i].name} completed={items[i].completed} index={i} toggleCompleted={this.props.toggleCompleted}  removeItem={this.props.removeItem}/>)
        }
      }
      else{
        arr.push(<ToDo name={items[i].name} completed={items[i].completed} index={i} toggleCompleted={this.props.toggleCompleted}  removeItem={this.props.removeItem}/>)
      }
    }
    return (
      <section className="main">
        <ul className="todo-list">
          {arr}
        </ul>
      </section>
    );
  }
}

export default Main;
//
// <input id="toggle-all" className="toggle-all" type="checkbox"/>
// <label htmlFor ="toggle-all">Mark all as complete</label>
