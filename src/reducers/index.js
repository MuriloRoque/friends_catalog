import { combineReducers } from 'redux';
import seasons from './seasons';
import cast from './cast';

export default combineReducers({
  seasons,
  cast,
});
