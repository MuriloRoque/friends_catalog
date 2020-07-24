import fetchApi from '../logic/apiCall';

export const getEpisodes = () => dispatch => {
  fetchApi().then(data => {
    dispatch({
      type: 'GET EPISODES',
      data,
    });
  });
};

export const filterEpisode = season => ({
  type: 'CHANGE_FILTER',
  season,
});
