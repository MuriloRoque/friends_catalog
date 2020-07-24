import fetchApi from '../logic/apiCall';

export const getSeasons = () => dispatch => {
  fetchApi('seasons').then(data => {
    dispatch({
      type: 'GET SEASONS',
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
