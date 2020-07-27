import React from 'react';
import PropTypes from 'prop-types';
import episode from '../styles/Episode.module.css';

const Episode = ({season, number, airdate, runtime, image, summary, name
}) => {
  return (
    <div>
        <div className={episode.details}>
          <div>
            <p>Title</p>
            <p>Airdate</p>
            <p>Runtime (min)</p>
          </div>
          <div>
            <p>{name}</p>
            <p>{airdate}</p>
            <p>{runtime}</p>
          </div>
          <img src={image} alt={name} />
          <p>
            Summary:
            {summary.slice(3, -4)}
          </p>
        </div>
        <div className={episode.container}>
          <p>
            {season}
          </p>
          <p>
            {number}
          </p>
        </div>
        </div>
  );
};

Episode.propTypes = {
  season: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  airdate: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

export default Episode;
