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
    };
    this.toggleBtnState = this.toggleBtnState.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  toggleBtnState() {
    this.setState(prevState => ({ ...prevState, on: !prevState.on }));
  }

  updateInput(e) {
    this.setState({ input: e.currentTarget.value });
  }

  handleStrings(str) {
    if (str.length) {
      this.setState({ input: str });
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="App">
        <h1 className={this.state.mainColor}>Welcome to React</h1>

        <div>
          <p className="button-state">{this.state.on ? 'Yes!' : 'No!'}</p>
          <button onClick={this.toggleBtnState}>Click me!</button>
        </div>

        <div>
          <h2>{this.state.input}</h2>
          <input type="text" name="inp" value={this.state.input} onChange={this.updateInput} />
        </div>
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
