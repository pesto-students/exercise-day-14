import React, { Component } from 'react';

import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
      input: '',
      mainColor: 'blue',
      paraText: 'No!',
    };
    this.paraClickHandler = this.paraClickHandler.bind(this);
    this.TextChangeHandler = this.TextChangeHandler.bind(this);
  }
  paraClickHandler() {
    this.setState({ paraText: 'Yes!' });
  }
  TextChangeHandler(event) {
    this.setState({ input: event.target.value });
  }
  render() {
    return (
      <div className="App">
        <h1 className={this.state.mainColor}>Welcome to React</h1>
        <button onClick={this.paraClickHandler}> Button</button>
        <p className="button-state">{this.state.paraText}</p>
        <input type="text" onChange={this.TextChangeHandler} />
        <h2>{this.state.input}</h2>
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
