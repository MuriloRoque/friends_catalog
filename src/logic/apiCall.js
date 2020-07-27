import 'regenerator-runtime/runtime';

const fetchApi = async () => {
  const URL = 'https://api.tvmaze.com/shows/431/';
  const EPISODES = 'episodes';
  const Url = `${URL + EPISODES}`;

  const response = await fetch(Url, { mode: 'cors' });
  const data = await response.json();
  return data;
};

export default fetchApi;
