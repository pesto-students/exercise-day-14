import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  /* eslint-disable react/no-unused-state */
  state = {
    lifeCycle: '',
  }
  componentDidMount() {
    this.setState({ lifeCycle: 'componentDidMount' });
  }
  componentWillReceiveProps() {
    this.setState({ lifeCycle: 'componentWillReceiveProps' });
  }
  render() {
    return (
      <div className="App">
        <p className="lifeCycle">{this.state.lifeCycle || 'Welcome to React'}</p>
      </div>
    );
  }
}

App.propTypes = {
  hide: PropTypes.bool,
};

App.defaultProps = {
  hide: false,
};

export default App;
