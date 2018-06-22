import React, { Component } from 'react';

class App extends Component {
  /* eslint-disable react/no-unused-state */
  state = {
    lifeCycle: '',
  }

  componentDidMount() {
    this.setState({ // eslint-disable-line
      lifeCycle: 'componentDidMount',
    });
  }

  componentWillReceiveProps() {
    this.setState({ // eslint-disable-line
      lifeCycle: 'componentWillReceiveProps',
    });
  }

  render() {
    return (
      <div className="App">
        Welcome to react
        <p className="lifeCycle">{this.state.lifeCycle}</p>
      </div>
    );
  }
}

export default App;
