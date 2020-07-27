import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Episode from '../components/Episode';
import { getEpisodes, filterEpisodes, filterEpisode } from '../actions/index';
import filteredEpisodes from '../logic/filter';
import SeasonFilter from '../components/SeasonFilter';
import episodesList from '../styles/EpisodesList.module.css';

const EpisodesList = ({
  episodes, episodesFilter, getEpisodes, filterEpisodes,
}) => {
  useEffect(() => {
    getEpisodes();
  }, [getEpisodes]);

  return episodes.length === 0 ? <div className={episodesList.pleaseWait}>Please wait</div> : (
    <div className={episodesList.container}>
      <div>
        <div>
          <p className={episodesList.filterLabel}>Filter by Seasons:</p>
          <SeasonFilter handleFilterChange={filterEpisodes} />
        </div>
        <div className={episodesList.tableName}>
          <p>Season Number</p>
          <p>Episode Number</p>
          <p>Title</p>
        </div>
      </div>
      {filteredEpisodes(episodesFilter, episodes).map(episode => (
        <Episode
          key={episode.id}
          name={episode.name}
          season={episode.season}
          number={episode.number}
          airdate={episode.airdate}
          runtime={episode.runtime}
          image={episode.image.medium}
          summary={episode.summary}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  episodes: state.episodes,
  episodesFilter: state.episodesFilter,
});

const mapDispatchToProps = dispatch => ({
  getEpisodes: () => dispatch(getEpisodes()),
  filterEpisodes: season => dispatch(filterEpisodes(season)),
});

EpisodesList.propTypes = {
  episodes: PropTypes.instanceOf(Array).isRequired,
  getEpisodes: PropTypes.func.isRequired,
  episodesFilter: PropTypes.string.isRequired,
  filterEpisodes: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesList);
