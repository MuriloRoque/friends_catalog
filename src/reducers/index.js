import { combineReducers } from 'redux';
import episodes from './episodes';
import episodesFilter from './season';

export default combineReducers({
  episodes,
  episodesFilter,
});
