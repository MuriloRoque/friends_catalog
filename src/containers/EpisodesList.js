import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Episode from '../components/Episode';
import { getEpisodes, filterEpisodes, filterEpisode } from '../actions/index';
import filteredEpisodes from '../logic/filter';
import filteredEpisode from '../logic/episode';
import SeasonFilter from '../components/SeasonFilter';
import episodesList from '../styles/EpisodesList.module.css';

const EpisodesList = ({
  episodes, episodesFilter, episodeFilter, getEpisodes, filterEpisodes, filterEpisode
}) => {
  useEffect(() => {
    getEpisodes();
  }, [getEpisodes]);

  return episodes.length === 0 ? <div className={episodesList.pleaseWait}>Please wait</div> : (
    <div className={episodesList.container}>
      <div>
        <p className={episodesList.filterLabel}>Filter by Seasons:</p>
        <SeasonFilter handleFilterChange={filterEpisodes} />
      </div>
      {filteredEpisodes(episodesFilter, filteredEpisode(episodeFilter, episodes)).map(episode => (
        <Episode
          key={episode.id}
          name={episode.name}
          season={episode.season}
          number={episode.number}
          airdate={episode.airdate}
          runtime={episode.runtime}
          image={episode.image.medium}
          summary={episode.summary}
          id={episode.id}
          handleFilterChange={filterEpisode}
          filter={episodeFilter}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  episodes: state.episodes,
  episodesFilter: state.episodesFilter,
  episodeFilter: state.episodeFilter,
});

const mapDispatchToProps = dispatch => ({
  getEpisodes: () => dispatch(getEpisodes()),
  filterEpisodes: season => dispatch(filterEpisodes(season)),
  filterEpisode: id => dispatch(filterEpisode(id)),
});

EpisodesList.propTypes = {
  episodes: PropTypes.instanceOf(Array).isRequired,
  getEpisodes: PropTypes.func.isRequired,
  episodesFilter: PropTypes.string.isRequired,
  episodeFilter: PropTypes.string.isRequired,
  filterEpisodes: PropTypes.func.isRequired,
  filteredEpisode: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesList);
