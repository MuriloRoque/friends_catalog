import React from 'react';
import PropTypes from 'prop-types';
import episode from '../styles/Episode.module.css';

const Episode = ({ season, number, name }) => (
  <div className={episode.container}>
    <p>
      {season}
    </p>
    <p>
      {number}
    </p>
    <p>
      {name}
    </p>
  </div>
);

Episode.propTypes = {
  season: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Episode;
