// store.js
import { createStore, combineReducers } from 'redux';
import userReducer from './usercontext/userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  // other reducers can go here
});

const store = createStore(rootReducer);

export default store;
