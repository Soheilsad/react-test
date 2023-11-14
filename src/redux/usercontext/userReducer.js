// userReducer.js
import { SET_USER_TOKEN, SET_USER_ID, LOGOUT_USER } from './userActionTypes';

const initialState = {
  token: null,
  userId: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case SET_USER_ID:
      return {
        ...state,
        userId: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        token: null,
        userId: null,
      };
    default:
      return state;
  }
};

export default userReducer;
