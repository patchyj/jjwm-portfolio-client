import * as actions from './authActions';

describe('authActionCreators', () => {
  it('registerUser', () => {
    const registerUser = actions.registerUser({ name: 'Jack', id: 123 });

    expect(registerUser).toEqual({
      type: 'REGISTER_USER',
      payload: { name: 'Jack', id: 123 }
    });
  });

  it('loginUser', () => {
    const loginUser = actions.loginUser({
      email: 'jack@test.com',
      password: 'password'
    });

    expect(loginUser).toEqual({
      type: 'LOGIN_USER',
      payload: { email: 'jack@test.com', password: 'password' }
    });
  });

  it('logoutUser', () => {
    const logoutUser = actions.logoutUser({ history: '/profile' });

    expect(logoutUser).toEqual({
      type: 'LOGOUT_USER',
      payload: { history: '/profile' }
    });
  });
});
