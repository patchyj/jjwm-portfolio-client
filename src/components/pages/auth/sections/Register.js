/* eslint-disable no-console */
/* eslint-disable object-curly-newline */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import S from '../../../styledComponents';
import FormGroup from '../../../shared/forms/FormGroup';
import FormSubmit from '../../../shared/forms/FormSubmit';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: 'test',
      lastName: 'mctesterson',
      email: 'testabc@123.com',
      password: 'password',
      password2: 'password',
      missingFields: {}
    };
  }

  onChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {
    const { firstName, lastName, email, password, password2 } = this.state;
    const { onSubmit } = this.props;

    if (!firstName || !lastName || !email || !password || !password2) {
      const obj = {};
      Object.entries(this.state).forEach((e) => {
        if (e[1] === '') obj[e[0]] = 'Missing field';
      });
      this.setState({ missingFields: obj });
    } else {
      onSubmit({
        firstName,
        lastName,
        email,
        password,
        password2
      });
      this.setState({ missingFields: {} });
    }
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      password2,
      missingFields
    } = this.state;
    const { networkErr, errors } = this.props;

    return (
      <S.FormContainer isInvalid={networkErr}>
        <h4>Register</h4>
        <FormGroup
          label="First name"
          placeholder="First name..."
          name="firstName"
          value={firstName}
          onChange={this.onChange}
          errors={
            (errors && errors.firstName)
            || (missingFields && missingFields.firstName)
          }
        />
        <FormGroup
          label="Last Name"
          placeholder="Last Name..."
          name="lastName"
          value={lastName}
          onChange={this.onChange}
          errors={
            (errors && errors.lastName)
            || (missingFields && missingFields.lastName)
          }
        />
        <FormGroup
          label="Email"
          placeholder="Email..."
          type="email"
          name="email"
          value={email}
          onChange={this.onChange}
          errors={
            (errors && errors.email) || (missingFields && missingFields.email)
          }
        />
        <FormGroup
          label="Password"
          placeholder="Password..."
          type="password"
          name="password"
          value={password}
          onChange={this.onChange}
          errors={
            (errors && errors.password)
            || (missingFields && missingFields.password)
          }
        />
        <FormGroup
          label="Password Confirmation"
          placeholder="Password Confirmation..."
          type="password"
          name="password2"
          value={password2}
          onChange={this.onChange}
          errors={
            (errors && errors.password2)
            || (missingFields && missingFields.password2)
          }
        />
        <FormSubmit label="Register" onSubmit={this.handleSubmit} />
      </S.FormContainer>
    );
  }
}

Register.propTypes = {
  onSubmit: PropTypes.func,
  networkErr: PropTypes.bool,
  errors: PropTypes.shape({})
};

Register.defaultProps = {
  networkErr: false,
  onSubmit: () => {},
  errors: {}
};

export default Register;
