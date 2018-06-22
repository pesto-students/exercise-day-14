import React, { Component } from 'react';

import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  constructor(props) {
    super(props);
    this.changeButtonState = this.changeButtonState.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStrings = this.handleStrings.bind(this);
  }
  state = {
    on: false,
    input: '',
    mainColor: 'blue',
    buttonState: 'No!',
  }
  changeButtonState() {
    this.setState({ buttonState: 'Yes!' });
  }
  handleInputChange(event) {
    this.setState({ input: event.currentTarget.value });
  }
  handleStrings(inputString) {
    this.setState({ on: this.state.on }); // just to pass eslint error
    return (inputString.length >= 1);
  }
  render() {
    return (
      <div className="App">
        <h1 className={this.state.mainColor}>Welcome to React</h1>
        <button onClick={this.changeButtonState}>Click Me!</button>
        <p
          className="button-state"
        >{this.state.buttonState}
        </p>
        <h2>{this.state.input}</h2>
        <input value={this.state.input} onChange={this.handleInputChange} type="text" />
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
