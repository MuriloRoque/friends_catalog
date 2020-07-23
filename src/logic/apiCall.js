const fetchApi = async cast => {
  const URL = 'http://api.tvmaze.com/shows/431/';
  const SEASONS = 'seasons';
  const CAST = 'cast';
  const UrlSeasons = `${URL + SEASONS}`;
  const UrlCast = `${URL + CAST}`;

  if (cast === 'cast') {
    const responseCast = await fetch(UrlCast, { mode: 'cors' });
    const dataCast = await responseCast.json();
    return dataCast;
  }

  const responseSeasons = await fetch(UrlSeasons, { mode: 'cors' });
  const dataSeasons = await responseSeasons.json();
  console.log(dataSeasons)
  return dataSeasons;
};

export default fetchApi;
