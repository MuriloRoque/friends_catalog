import fetchApi from '../logic/apiCall';

export const getEpisodes = () => dispatch => {
  fetchApi('episodes').then(data => {
    dispatch({
      type: 'GET EPISODES',
      payload: data,
    });
  });
};

export const getCast = () => dispatch => {
  fetchApi('cast').then(data => {
    dispatch({
      type: 'GET CAST',
      payload: data,
    });
  });
};
