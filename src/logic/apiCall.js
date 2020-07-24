const fetchApi = async cast => {
  const URL = 'http://api.tvmaze.com/shows/431/';
  const EPISODES = 'episodes';
  const CAST = 'cast';
  const UrlEpisodes = `${URL + EPISODES}`;
  const UrlCast = `${URL + CAST}`;

  if (cast === 'cast') {
    const responseCast = await fetch(UrlCast, { mode: 'cors' });
    const dataCast = await responseCast.json();
    return dataCast;
  }

  const responseEpisodes = await fetch(UrlEpisodes, { mode: 'cors' });
  const dataEpisodes = await responseEpisodes.json();
  return dataEpisodes;
};

export default fetchApi;
