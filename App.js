import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "max", age: 28 },
      { name: "ceci", age: 22 },
      { name: "Stephine", age: 21 }
    ],
    otherState: 'some other values'
  }

  switchNameHandler = () => {
    this.setState ({
      persons: [
        { name: "hi little kid", age: 0 },
        { name: "wonnder", age: 11028 },
        { name: "garfield", age: 9902 } 
      ]
    }) 
  }
  

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React APP</h1>
        <button onClick= {this.switchNameHandler} >Switch Name</button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}> My hobby is playing music. </Person> 
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age} />
      </div>
    );
    return React.createElement('div',null,'h1')
    }
}

export default App;



