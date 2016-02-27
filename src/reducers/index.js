import { combineReducers } from 'redux';
import CurrentZip from './reducer-zipcode';

const rootReducer = combineReducers({
  zip: CurrentZip
});

export default rootReducer;
