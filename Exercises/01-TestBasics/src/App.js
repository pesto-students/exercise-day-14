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
      text: 'no',
    };
  }
  render() {
    return (
      <div>
        <h1 className="App">
        Welcome to React
        </h1>
        <p className="button-state" > this.state.text</p>
        <button onClick={() => this.setState({ text: 'Yes!' })}>
        Click
        </button>
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
