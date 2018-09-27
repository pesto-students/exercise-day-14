import React, { Component } from 'react';

import '../styles/Form.css';
import api from '../api';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      number: '',
      receivePromotions: true,
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.toggleReceivePromotions = this.toggleReceivePromotions.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChangeName(e) {
    this.setState({ name: e.currentTarget.value });
  }
  onChangeEmail(e) {
    this.setState({ email: e.currentTarget.value });
  }
  onChangeNumber(e) {
    this.setState({ number: e.currentTarget.value });
  }
  toggleReceivePromotions() {
    this.setState(prevState => ({ ...prevState, receivePromotions: !prevState.receivePromotions }));
  }
  handleSubmit(e) {
    e.preventDefault();
    api.addUser(this.state.name, this.state.email, this.state.number);
  }
  render() {
    return (
      <form data-testid="addUserForm" onSubmit={this.handleSubmit}>
        <h2>Request Information</h2>
        <input
          data-testid="name"
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={this.onChangeName}
        />
        <input
          data-testid="email"
          type="text"
          placeholder="Email"
          value={this.state.email}
          onChange={this.onChangeEmail}
        />
        <input
          data-testid="number"
          type="text"
          placeholder="Number"
          value={this.state.number}
          onChange={this.onChangeNumber}
        />
        <div>
          <input
            data-testid="checked"
            type="checkbox"
            checked={this.state.receivePromotions}
            onClick={this.toggleReceivePromotions}
          />
          <p data-testid="promotionsP" className="promotions">Receive Promotions</p>
        </div>
        <button type="submit" data-testid="submitButton">Submit</button>
      </form>
    );
  }
}
