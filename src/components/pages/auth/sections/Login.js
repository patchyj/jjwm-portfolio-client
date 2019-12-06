import React, { Component } from 'react';
import PropTypes from 'prop-types';
import S from '../../../styledComponents';
import FormGroup from '../../../shared/forms/FormGroup';
import FormSubmit from '../../../shared/forms/FormSubmit';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: 'test3@test.com',
      password: 'password'
    };
  }

  onChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  };

  onSubmit = () => {
    const { email, password } = this.state;
    const { onSubmit } = this.props;

    onSubmit({ email, password });
  };

  render() {
    const { email, password } = this.state;
    const { networkErr, errors } = this.props;

    return (
      <S.FormContainer isInvalid={networkErr}>
        <h4>Login</h4>
        <FormGroup
          label="Email"
          placeholder="Email..."
          type="email"
          name="email"
          value={email}
          onChange={this.onChange}
          errors={errors && errors.email}
        />
        <FormGroup
          label="Password"
          placeholder="Password..."
          type="text"
          name="password"
          value={password}
          onChange={this.onChange}
          errors={errors && errors.password}
        />
        <FormSubmit label="Login" onSubmit={this.onSubmit} />
      </S.FormContainer>
    );
  }
}

Login.propTypes = {
  onSubmit: PropTypes.func,
  networkErr: PropTypes.bool,
  errors: PropTypes.shape({})
};

Login.defaultProps = {
  onSubmit: () => {},
  networkErr: false,
  errors: {}
};

export default Login;
