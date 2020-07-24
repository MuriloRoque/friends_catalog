import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const Episode = ({ handleFilterChange, id, season, number, name }) => {
  const filterChange = useCallback(event => {
    handleFilterChange(event.target.value);
  }, [handleFilterChange]);
  return(
  <div>
    <p>
      Season number:
      {season}
    </p>
    <p>
      Episode number:
      {number}
    </p>
    <button onClick={filterChange} value={id} type='button'>
      {name}
    </button>
  </div>
)}

Episode.propTypes = {
  season: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Episode;
