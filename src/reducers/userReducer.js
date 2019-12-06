import actionTypes from '../flux/constants';

const initialState = {
  user: {},
  loading: false,
  errors: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_USERS_STARTED:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: {},
        users: action.payload.data.data.getUsers
      };
    case actionTypes.GET_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.message
      };
    case actionTypes.GET_USER_STARTED:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: {},
        user: action.payload.data.user
      };
    case actionTypes.GET_USER_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.message
      };
    default:
      return state;
  }
}
