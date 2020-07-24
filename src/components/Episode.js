import React from 'react';
import PropTypes from 'prop-types';

const Episode = ({ season, number, name }) => (
  <div>
    <p>
      Season number:
      {season}
    </p>
    <p>
      Episode number:
      {number}
    </p>
    <p>
      Name:
      {name}
    </p>
  </div>
);

Episode.propTypes = {
  season: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  name: PropTypes.number.isRequired,
};

export default Episode;
