const initialState = {
  user: {},
  errors: {
    login: {},
    registration: {}
  },
  loading: false,
  isAuthenticated: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    // ====== REGISTRATION ======
    case 'REGISTER_USER_STARTED':
      return {
        ...state,
        loading: true
      };
    case 'REGISTER_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        errors: {
          login: {},
          registration: {}
        }
      };
    case 'REGISTER_USER_FAILURE':
      return {
        ...state,
        loading: false,
        errors: {
          ...state.login,
          registration: action.response.errors
        }
      };
    // ====== LOGIN ======
    case 'LOGIN_USER_STARTED':
      return {
        ...state,
        loading: true
      };
    case 'LOGIN_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: true,
        errors: {}
      };
    case 'LOGIN_USER_FAILURE':
      return {
        ...state,
        loading: false,
        errors: {
          ...state.registration,
          login: action.response.errors
        }
      };
    case 'LOGOUT_USER_STARTED':
      return {
        ...state,
        loading: true
      };
    case 'LOGOUT_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        user: {},
        errors: {},
        isAuthenticated: false
      };
    case 'LOGOUT_USER_FAILURE':
      return {
        ...state,
        loading: false,
        errors: action.response.errors
      };
    default:
      return state;
  }
};
