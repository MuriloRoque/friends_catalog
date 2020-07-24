import { combineReducers } from 'redux';
import episodes from './episodes';
import filter from './filter';

export default combineReducers({
  episodes,
  filter,
});
