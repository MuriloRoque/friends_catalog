const filteredEpisode = (filter, episodes) => {
  if (filter !== '') {
    const filtered = episodes.filter(episode => episode.id.toString() === filter);
    return filtered;
  }
  return episodes;
};

export default filteredEpisode;
