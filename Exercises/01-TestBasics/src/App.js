import React, { Component } from 'react';

import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
      input: '',
      paraText: 'No!',
      mainColor: 'blue',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleClick() {
    this.setState({ paraText: 'Yes!' });
  }

  handleInput(event) {
    this.setState({ input: event.target.value });
  }
  render() {
    return (
      <div className="App">
        <h1 className={this.state.mainColor} >Welcome to React</h1>
        <button onClick={this.handleClick}>Click Me</button>
        <input type="text" onChange={this.handleInput} />
        <h2>{this.state.input}</h2>
        <p className="button-state">{this.state.paraText}</p>
      </div>
    );
  }
}

export class Link extends Component {
  render() {
    return null;
  }
}

export default App;
