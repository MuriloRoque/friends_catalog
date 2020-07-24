import React from 'react';
import PropTypes from 'prop-types';

const Seasons = ({ image }) => (
  <div>
    <img src={image} alt="season" />
  </div>
);

Seasons.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Seasons;
