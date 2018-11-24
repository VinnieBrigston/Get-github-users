import { combineReducers } from 'redux';
import AllUsersReducer from './reducer_users';
import SingleUserReducer from './reducer_user';

const rootReducer = combineReducers({
  users: AllUsersReducer,
  user: SingleUserReducer
});

export default rootReducer;