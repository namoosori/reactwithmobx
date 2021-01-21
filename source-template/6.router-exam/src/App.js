import './App.css';
import React, { Component } from 'react';
import Nav from './components/Nav';
import About from './components/About'
import Main from './components/Main'
import Lessons from './components/Lessons'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Nav />
        <Main />
        <About />
        <Lessons />
      </div>
    );
  } 
}

export default App;
