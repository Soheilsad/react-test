// actions.js
import { SET_USER_TOKEN, SET_USER_ID, LOGOUT_USER } from './userActionTypes';

export const setUserToken = (token) => ({
  type: SET_USER_TOKEN,
  payload: token,
});

export const setUserId = (userId) => ({
  type: SET_USER_ID,
  payload: userId,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
