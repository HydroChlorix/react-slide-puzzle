import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = { clicked: 0 }
    this.clicked = 0
  }
  handleClick = () => {
    this.setState({ clicked: this.state.clicked + 1 })
    console.log(this.state.clicked)

    // this.clicked = this.clicked + 1
    // console.log(this.clicked)
  }
  render() {

    return (
      <div className="App">
        {/*<div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
        <img src={logo} className="App-logo" alt="logo" onClick={this.handleClick} />
        <div> click : {this.state.clicked}</div>
      </div>
    );
  }
}

export default App;
