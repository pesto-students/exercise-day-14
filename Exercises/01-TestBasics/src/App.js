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
      text: 'No!',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.on === false) {
      this.setState({ on: true });
      this.setState({ text: 'Yes!' });
    } else {
      this.setState({ on: false });
      this.setState({ text: 'No!' });
    }
  }
  render() {
    return (
      <div className={this.state.mainColor}>
        <h1>Welcome to React</h1>
        <p className="button-state">{this.state.text}</p>
        <button onClick={this.handleClick}>Click Me</button>
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
