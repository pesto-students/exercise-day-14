import React, { Component } from 'react';

import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  state = {
    on: false,
    input: '',
    mainColor: 'blue',
  }

  changeButtonState = () => {
    this.setState(state => ({
      on: !state.on,
    }));
  }

  changeTitle = (event) => {
    this.setState({
      input: event.currentTarget.value,
    });
  }

  // eslint-disable-next-line
  handleStrings(str) {
    return str.length > 0;
  }

  render() {
    return (
      <div className={this.state.mainColor}>
        <h1>
          Welcome to React
        </h1>

        <h2>{this.state.input}</h2>

        <p className="button-state">{this.state.on ? 'Yes!' : 'No!'}</p>

        <button onClick={this.changeButtonState}>Change State</button>

        <input type="text" name="heading" onChange={this.changeTitle} value={this.state.input} />

        <Link address="www.google.com" />
      </div>
    );
  }
}

export class Link extends Component {
  render() {
    if (this.props.hide) {
      return null;
    }
    return <a href={this.props.address}>{this.props.children}</a>;
  }
}

export default App;
