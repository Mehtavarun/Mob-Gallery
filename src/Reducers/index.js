import { combineReducers } from 'redux';
import user from './user';
import mobiles from './mobiles';
import cart from './cart';

export default combineReducers({
  user,
  mobiles,
  cart
});
