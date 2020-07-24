const filteredEpisodes = (filter, episodes) => {
  if (filter !== 'All') {
    const filtered = episodes.filter(episode => episode.season.toString() === filter);
    return filtered;
  }
  return episodes;
};

export default filteredEpisodes;
