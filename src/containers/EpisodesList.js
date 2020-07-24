import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Episode from '../components/Episode';
import { getEpisodes, filterEpisode } from '../actions/index';
import filteredEpisodes from '../logic/filter';
import SeasonFilter from '../components/SeasonFilter';

const EpisodesList = ({
  episodes, filter, getEpisodes, filterEpisode,
}) => {
  useEffect(() => {
    getEpisodes();
  }, [getEpisodes]);

  return episodes.length === 0 ? <div>Please wait</div> : (
    <div>
      <div>
        <SeasonFilter handleFilterChange={filterEpisode} />
      </div>
      {filteredEpisodes(filter, episodes).map(episode => (
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
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  getEpisodes: () => dispatch(getEpisodes()),
  filterEpisode: season => dispatch(filterEpisode(season)),
});

EpisodesList.propTypes = {
  episodes: PropTypes.instanceOf(Array).isRequired,
  getEpisodes: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  filterEpisode: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesList);
