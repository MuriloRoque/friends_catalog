import fetchApi from '../logic/apiCall';

export const getEpisodes = () => dispatch => {
  fetchApi().then(data => {
    dispatch({
      type: 'GET EPISODES',
      data,
    });
  });
};

export const filterEpisodes = season => ({
  type: 'CHANGE_FILTER',
  season,
});

export const filterEpisode = id => ({
  type: 'CHANGE_EPISODE',
  id,
});
