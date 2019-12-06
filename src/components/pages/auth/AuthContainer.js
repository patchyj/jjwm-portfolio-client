/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginSection from './sections/Login';
import RegisterSection from './sections/Register';
import S from '../../styledComponents';

const AuthContainer = ({ loginUser, registerUser, auth }) => {
  const [isLogin, setLogin] = useState(true);

  const { errors } = auth;
  const networkErr =
    errors &&
    (errors.login === 'Network Error' || errors.register === 'Network Error');

  return (
    <S.AuthContainer>
      <S.AuthHeader isLogin={isLogin}>
        <ul>
          <li className="login" onClick={() => setLogin(true)}>
            {' '}
            <span>Login</span>
          </li>
          <li className="register" onClick={() => setLogin(false)}>
            {' '}
            <span>Register</span>
          </li>
        </ul>
      </S.AuthHeader>
      {isLogin ? (
        <LoginSection
          onSubmit={loginUser}
          networkErr={networkErr}
          errors={errors && errors.login}
        />
      ) : (
        <RegisterSection
          onSubmit={registerUser}
          networkErr={networkErr}
          errors={errors && errors.registration}
        />
      )}
      {networkErr && <S.AuthFooter>Network Error</S.AuthFooter>}
    </S.AuthContainer>
  );
};

AuthContainer.propTypes = {
  loginUser: PropTypes.func,
  registerUser: PropTypes.func,
  auth: PropTypes.shape({
    errors: PropTypes.shape({})
  }).isRequired
};

AuthContainer.defaultProps = {
  loginUser: () => {},
  registerUser: () => {}
};

export default AuthContainer;
