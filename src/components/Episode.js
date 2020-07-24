import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const Episode = ({ handleFilterChange, id, season, number, airdate, runtime, image, summary, name, filter }) => {
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
    {
      (filter)
      ? <div>
        <p>{airdate}</p>
        <p>{runtime}</p>
        <p>{summary}</p>
        <img src={image} alt={name}/>
        <button type='button' value='' onClick={filterChange}>Back</button>
      </div> 
      :     <button onClick={filterChange} value={id} type='button'>
      {name}
    </button>
    }
  </div>
)}

Episode.propTypes = {
  season: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  filter: PropTypes.string,
};

export default Episode;
