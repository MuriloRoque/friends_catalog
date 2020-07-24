import { combineReducers } from 'redux';
import episodes from './episodes';
import cast from './cast';

export default combineReducers({
  episodes,
  cast,
});
