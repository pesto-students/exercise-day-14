import React, { Component } from 'react';

import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  state = {
    on: false,
    input: '',
    mainColor: 'blue',
  }
  render() {
    return (
      <div className="App">
        <h1>Welcome to React</h1>
        <div className={this.state.mainColor}>State</div>
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
