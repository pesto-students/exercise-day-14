import React, { Component } from 'react';

import '../styles/Form.css';
import api from '../api';

export default class Form extends Component {
  state = {
    name: '',
    email: '',
    number: '',
    checked: true,
  }

  onChangeHandler = (inputField, e) => {
    this.setState({
      [inputField]: e.currentTarget.value,
    });
  }

  onCheckHandler = () => {
    this.setState(prevState => ({
      checked: !prevState.checked,
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, number } = this.state;
    api.addUser(name, email, number);
  }
  render() {
    return (
      <form data-testid="addUserForm" onSubmit={this.handleSubmit}>
        <h2>Request Information</h2>
        <input data-testid="name" type="text" placeholder="Name" value={this.state.name} onChange={e => this.onChangeHandler('name', e)} />
        <input data-testid="email" type="text" placeholder="Email" value={this.state.email} onChange={e => this.onChangeHandler('email', e)} />
        <input data-testid="number" type="text" placeholder="Number" value={this.state.number} onChange={e => this.onChangeHandler('number', e)} />
        <div>
          <input data-testid="checked" type="checkbox" checked={this.state.checked} onClick={this.onCheckHandler} />
          <p data-testid="promotionsP" className="promotions">Receive Promotions</p>
        </div>
        <button type="submit" data-testid="submitButton">Submit</button>
      </form>
    );
  }
}
