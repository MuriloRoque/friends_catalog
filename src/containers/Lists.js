import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Seasons from '../components/Seasons';
import { getSeasons, getCast } from '../actions/index';
import Characters from '../components/Characters';

const Lists = ({
  seasons, cast, getSeasons, getCast,
}) => {
  useEffect(() => {
    getSeasons();
  }, [getSeasons]);
  useEffect(() => {
    getCast();
  }, [getCast]);
  return seasons.length === 0 || cast.length === 0 ? <div>Please wait</div> : (
    <div>
      <button type="button">Show Seasons</button>
      <button type="button">Show Characters</button>
      <div>
        { seasons
          ? seasons.map(season => (
            <Seasons key={season.id} image={season.image.medium} />
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
  seasons: state.seasons,
  cast: state.cast,
});

const mapDispatchToProps = dispatch => ({
  getSeasons: () => dispatch(getSeasons()),
  getCast: () => dispatch(getCast()),
});

Lists.propTypes = {
  seasons: PropTypes.instanceOf(Array).isRequired,
  cast: PropTypes.instanceOf(Array).isRequired,
  getSeasons: PropTypes.func.isRequired,
  getCast: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
