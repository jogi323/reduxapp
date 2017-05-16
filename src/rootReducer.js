import { combineReducers } from 'redux';

import loggedinUser from './reducers/loggedinUser';

export default combineReducers({
  user:loggedinUser
});
