/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import LoginSection from './sections/Login';
import RegisterSection from './sections/Register';
import S from '../../styledComponents';

const AuthContainer = () => {
  const [isLogin, setLogin] = useState(true);
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
      {isLogin ? <LoginSection /> : <RegisterSection />}
    </S.AuthContainer>
  );
};

export default AuthContainer;
