import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from'./Header.js'
import Main from './Main.js'
import Footer from './Footer.js'

(a, b) => {

}

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      items:[{name:"Taste JavaScript", completed:false}, {name: "Buy a Unicorn", completed: false}],
      filter:"all"
    }

    this.addItem = this.addItem.bind(this)
    this.toggleCompleted = this.toggleCompleted.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.setFilter = this.setFilter.bind(this)

  }

  addItem(name){
   this.setState((prevState)=>{
      prevState.items.push({
        name,
        completed: false,
      })
      return prevState
    })
  }

toggleCompleted(index){
  this.setState(({items})=>{
    items[index].completed = !items[index].completed
    return {items}
  })
}

removeItem(index){
  this.setState((prevState) =>{
    prevState.items.splice(index,1)
    return prevState
  })
}

setFilter(filter){
  this.setState((prevState) =>{
    prevState.filter = filter
    return prevState
  })
}

  render() {

    console.log(this.state.items)
    return (
      <div>
        <section className="todoapp">

          <Header addItem={this.addItem}/>
          <Main items={this.state.items} toggleCompleted={this.toggleCompleted} removeItem={this.removeItem} filter={this.state.filter}/>
          <Footer items={this.state.items} setFilter={this.setFilter}/>

        </section>
      </div>

    );
  }
}

export default App;


// <div className="App">
//   <Header name="Devin" items={this.state.items} myAddItem={this.addItem}/>
//   <Header items={this.state.items} myAddItem={this.addItem}/>
//   <p className="App-intro">
//     To get started, edit <code>src/App.js</code> and save to reload.
//   </p>
// </div>
