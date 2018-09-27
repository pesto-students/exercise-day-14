import React, { Component } from 'react';

import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  state = {
    on: false,
    input: '',
    mainColor: 'blue',
    pText: 'No!',
  }
  handleButtonClick = () => {
    // e.preventDefault();
    this.setState({ pText: 'Yes!' });
  }
  handleInputChange = (e) => {
    // e.preventDefault();
    const text = e.target.value;
    this.setState({ input: text });
  }
  render() {
    return (
      <div className="App">
        <h1>Welcome to React</h1>
        <h2>{this.state.input}</h2>
        <div className={this.state.mainColor}>State</div>
        <p className="button-state">{this.state.pText}</p>
        <button onClick={this.handleButtonClick}>click</button>
        <input type="text" onChange={this.handleInputChange} />
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
