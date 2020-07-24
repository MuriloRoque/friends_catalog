import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Episodes from '../components/Episodes';
import { getEpisodes, getCast } from '../actions/index';
import Characters from '../components/Characters';

const Lists = ({
  episodes, cast, getEpisodes, getCast,
}) => {
  useEffect(() => {
    getEpisodes();
  }, [getEpisodes]);
  useEffect(() => {
    getCast();
  }, [getCast]);
  return episodes.length === 0 || cast.length === 0 ? <div>Please wait</div> : (
    <div>
      <button type="button">Show Episodes</button>
      <button type="button">Show Characters</button>
      <div>
        { true
          ? episodes.map(episode => (
            <Episodes 
            key={episode.id} 
            name={episode.name}
            season={episode.season}
            number={episode.number}
            airdate={episode.airdate}
            runtime={episode.runtime}
            image={episode.image.medium}
            summary={episode.summary} />
          )) : cast.map(person => (
            <Characters
              key={person.person.id}
              name={person.person.name}
              birthday={person.person.birthday}
              gender={person.person.gender}
              image={person.character.image.medium}
              charName={person.character.name}
            />
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  episodes: state.episodes,
  cast: state.cast,
});

const mapDispatchToProps = dispatch => ({
  getEpisodes: () => dispatch(getEpisodes()),
  getCast: () => dispatch(getCast()),
});

Lists.propTypes = {
  episodes: PropTypes.instanceOf(Array).isRequired,
  cast: PropTypes.instanceOf(Array).isRequired,
  getEpisodes: PropTypes.func.isRequired,
  getCast: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
