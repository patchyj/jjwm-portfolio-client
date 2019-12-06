/* eslint-disable object-curly-newline */
import React, { Component } from 'react';
import S from '../../../styledComponents';
import FormGroup from '../../../shared/forms/FormGroup';
import FormSubmit from '../../../shared/forms/FormSubmit';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: ''
    };
  }

  onChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  };

  onSubmit = () => {
    const { firstName, lastName, email, password, password2 } = this.state;

    console.log({
      firstName,
      lastName,
      email,
      password,
      password2
    });
  };

  render() {
    const { firstName, lastName, email, password, password2 } = this.state;
    const { networkErr } = this.props;

    return (
      <S.FormContainer isInvalid={networkErr}>
        <h4>Register</h4>
        <FormGroup
          label="First name"
          placeholder="First name..."
          name="firstName"
          value={firstName}
          onChange={this.onChange}
        />
        <FormGroup
          label="Last Name"
          placeholder="Last Name..."
          name="lastName"
          value={lastName}
          onChange={this.onChange}
        />
        <FormGroup
          label="Email"
          placeholder="Email..."
          type="email"
          name="email"
          value={email}
          onChange={this.onChange}
        />
        <FormGroup
          label="Password"
          placeholder="Password..."
          type="password"
          name="password"
          value={password}
          onChange={this.onChange}
        />
        <FormGroup
          label="Password Confirmation"
          placeholder="Password Confirmation..."
          type="password"
          name="password2"
          value={password2}
          onChange={this.onChange}
        />
        <FormSubmit label="Register" onSubmit={this.onSubmit} />
      </S.FormContainer>
    );
  }
}

export default Register;
