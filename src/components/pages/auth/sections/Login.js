import React, { Component } from 'react';
import PropTypes from 'prop-types';
import S from '../../../styledComponents';
import FormGroup from '../../../shared/forms/FormGroup';
import FormSubmit from '../../../shared/forms/FormSubmit';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: 'test1@test.com',
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

    return (
      <S.FormContainer>
        <h4>Login</h4>
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
          type="text"
          name="password"
          value={password}
          onChange={this.onChange}
        />
        <FormSubmit label="Login" onSubmit={this.onSubmit} />
      </S.FormContainer>
    );
  }
}

Login.propTypes = {
  onSubmit: PropTypes.func
};

Login.defaultProps = {
  onSubmit: () => {}
};

export default Login;
