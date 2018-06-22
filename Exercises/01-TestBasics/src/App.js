import React, { Component } from 'react';

import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  state = {
    on: false,
    input: '',
    mainColor: 'blue',
    text: 'No!',
  }
  buttonClick = () => {
    this.setState({
      text: 'Yes!',
    });
  }
  inputChange = (e) => {
    if (e.target.value === 'Pesto') { this.state.input = 'Pesto'; }
  }
  render() {
    return (
      <div className="App">
        <h1 className={this.state.mainColor}>Welcome to React</h1>
        <button onClick={this.buttonClick}>Hit me!</button>
        <p className="button-state">{this.state.text}</p>
        <input type="text" onChange={this.inputChange} />
        <h2>{this.state.input}</h2>
      </div>
    );
  }
}

export class Link extends Component {
  render() {
    return 'www.google.com';
  }
}

export default App;
