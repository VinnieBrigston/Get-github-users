import { combineReducers } from 'redux';
import AllUsersReducer from './reducer_users';
import SingleUserReducer from './reducer_single';

const rootReducer = combineReducers({
  users: AllUsersReducer,
  singleUser: SingleUserReducer
});

export default rootReducer;