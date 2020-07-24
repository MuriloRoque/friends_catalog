import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import SEASONS from '../constants/Seasons';

const SeasonFilter = ({ handleFilterChange }) => {
  const filterChange = useCallback(event => {
    handleFilterChange(event.target.value);
  }, [handleFilterChange]);

  return (
    <div>
      <label htmlFor="season">
        <select onChange={filterChange}>
          {
           ['All'].concat(SEASONS).map(season => (
             <option key={season} value={season}>{ season }</option>
           ))
            }
        </select>
      </label>
    </div>
  );
};

SeasonFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default SeasonFilter;
