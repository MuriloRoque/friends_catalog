import React from 'react';
import PropTypes from 'prop-types';

const Episodes = ({season, number, name }) => (
  <div>
    <p>Season number: {season}</p>
    <p>Episode number: {number}</p>
    <p>Name: {name}</p>
  </div>
);

Episodes.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Episodes;
