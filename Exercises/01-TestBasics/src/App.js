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

  onClickHandler = () => {
    this.setState({
      text: 'Yes!',
    });
  }

  onChangeHandler = (e) => {
    this.setState({
      input: e.currentTarget.value,
    });
  }

  handleStrings = prop => !!prop;

  render() {
    return (
      <div className="App">
        <h1 className={this.state.mainColor}>Welcome to React</h1>
        <p className="button-state">{this.state.text}</p>
        <button onClick={this.onClickHandler}>Change Text</button>
        <h2>{this.state.input}</h2>
        <input type="text" onChange={this.onChangeHandler} value={this.state.input} />
        <Link address="www.google.com" />
        <Link hide={false} />
      </div>
    );
  }
}

export class Link extends Component {
  render() {
    return (
      this.props.hide ? // eslint-disable-line
        null :
        <a href={this.props.address}>Content</a> // eslint-disable-line
    );
  }
}

export default App;
