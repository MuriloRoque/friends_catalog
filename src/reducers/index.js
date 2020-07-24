import { combineReducers } from 'redux';
import episodes from './episodes';
import episodesFilter from './season';
import episodeFilter from './episode';

export default combineReducers({
  episodes,
  episodesFilter,
  episodeFilter,
});
