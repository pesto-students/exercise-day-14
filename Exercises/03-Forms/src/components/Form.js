import React, { Component } from 'react';

import '../styles/Form.css';
import api from '../api';

export default class Form extends Component {
  state = {
    name: '',
    email: '',
    number: '',
    promotions: true,
  }

  updateName = (event) => {
    this.setState({
      name: event.currentTarget.value,
    });
  }

  updateEmail = (event) => {
    this.setState({
      email: event.currentTarget.value,
    });
  }

  updateNumber = (event) => {
    this.setState({
      number: event.currentTarget.value,
    });
  }

  changePromotions = () => {
    this.setState(state => ({
      promotions: !state.promotions,
    }));
  }

  handleSubmit = () => {
    api.addUser(this.state.name, this.state.email, this.state.number);
  }

  render() {
    return (
      <form data-testid="addUserForm" onSubmit={this.handleSubmit}>
        <h2>Request Information</h2>
        <input data-testid="name" name="name" type="text" placeholder="Name" onChange={this.updateName} value={this.state.name} />
        <input data-testid="email" name="email" type="email" placeholder="Email" onChange={this.updateEmail} value={this.state.email} />
        <input data-testid="number" name="number" type="tel" placeholder="Number" onChange={this.updateNumber} value={this.state.number} />
        <div>
          <input data-testid="checked" type="checkbox" checked={this.state.promotions} onClick={this.changePromotions} />
          <p data-testid="promotionsP" className="promotions">Receive Promotions</p>
        </div>
        <button type="submit" data-testid="submitButton">Submit</button>
      </form>
    );
  }
}
