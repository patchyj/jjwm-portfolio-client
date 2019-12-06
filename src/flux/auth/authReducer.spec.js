import authReducer from './authReducer';

describe('authReducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      user: {},
      errors: {
        login: {},
        registration: {}
      },
      loading: false,
      isAuthenticated: false
    };
  });

  it('LOGIN_USER_STARTED', () => {
    const action = {
      type: 'LOGIN_USER_STARTED'
    };
    const expectedState = {
      ...initialState,
      loading: true
    };
    const newState = authReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('LOGIN_USER_SUCCESS', () => {
    const action = {
      type: 'LOGIN_USER_SUCCESS',
      payload: 'Success'
    };
    const expectedState = {
      ...initialState,
      loading: false,
      user: 'Success',
      isAuthenticated: true,
      errors: {}
    };
    const newState = authReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('LOGIN_USER_FAILURE', () => {
    const action = {
      type: 'LOGIN_USER_FAILURE',
      response: {
        errors: {
          field: 'Error'
        }
      }
    };
    const expectedState = {
      ...initialState,
      errors: {
        login: {
          field: 'Error'
        }
      }
    };
    const newState = authReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('LOGOUT_USER_STARTED', () => {
    const action = {
      type: 'LOGOUT_USER_STARTED'
    };
    const expectedState = {
      ...initialState,
      loading: true
    };
    const newState = authReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('LOGOUT_USER_SUCCESS', () => {
    const action = {
      type: 'LOGOUT_USER_SUCCESS'
    };
    const expectedState = {
      ...initialState,
      errors: {}
    };
    const newState = authReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('LOGOUT_USER_FAILURE', () => {
    const action = {
      type: 'LOGOUT_USER_FAILURE',
      response: {
        errors: 'Error'
      }
    };
    const expectedState = {
      ...initialState,
      errors: 'Error'
    };
    const newState = authReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });
});
